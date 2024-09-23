"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { apiUrl, dashboardUrl } from "@/variables/varaibles";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Card } from "@/components/ui/card";

export const AuthModal = ({ type }: { type: "onboarding" | "login" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState<number | null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const onEmailSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/auth/${type}`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.status !== 200) {
        toast(`Error: ${data?.message || res.statusText}`, { type: "error" });
      } else {
        toast("Successfully send verification code, please check your inbox!", { type: "success" });
        setEmailSent(true);
      }
    } catch (e) {
      toast(`Something went wrong: ${e?.message}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const onCodeSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/auth/${type}/verify`, {
        method: "POST",
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      if (res.status !== 200 || (!data?.newSessionData?.accessToken && !data?.accessToken)) {
        toast(`Something went wrong: ${data?.message || res.statusText}`, { type: "error" });
      } else {
        setCookie("accessToken", type === "login" ? data?.newSessionData?.accessToken : data.accessToken, {
          maxAge: 60 * 60 * 24 * 2,
        });
        window.location.href = `${dashboardUrl}?token=${type === "login" ? data?.newSessionData?.accessToken : data.accessToken}`;
        toast("Successfully logged in!", { type: "success" });
      }
    } catch (e) {
      toast(`Something went wrong: ${e?.message}`, { type: "error" });
    }
    onClearStates();
    setIsOpen(false);
    setIsLoading(false);
  };

  const onClearStates = () => {
    setCode(null);
    setIsLoading(false);
    setEmail("");
    setEmailSent(false);
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClearStates();
          setIsOpen(false);
        } else {
          setIsOpen(open);
        }
      }}
    >
      <DialogTrigger asChild={type === "onboarding"}>
        {type === "login" ? (
          "Log in"
        ) : (
          <Button variant="green" className="rounded-full" size="lg">
            Start for free
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle className="text-center text-sm font-semibold uppercase">
            {type !== "login" ? "HELLO, GREAT TO SEE YOU HERE!" : "Log in"}
          </DialogTitle>
          <DialogDescription className="text-center font-bold text-5xl text-black uppercase font-ttBluescreens px-6">
            {type !== "login" ? "Let’s Get You Set Up with Blessed" : "Enter your email to log in"}
          </DialogDescription>
        </DialogHeader>
        {!emailSent && (
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@blessed.fan"
              className="col-span-3"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Card className="bg-yellow-500 !p-5">
              <span>
                <span className="font-semibold">We’ll send you a quick verification code</span>, so keep an eye on your
                inbox.
              </span>
            </Card>
          </div>
        )}
        {emailSent && (
          <div className="flex flex-col gap-4 w-full">
            <Label htmlFor="verificationCode" className="font-semibold">
              Verification code
            </Label>

            <div className="w-full flex justify-center">
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                onChange={(value) => setCode(value)}
                disabled={isLoading}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Card className="bg-yellow-500 !p-5">
              <span className="font-semibold">Enter the 5-digit code we verify your account.</span>
            </Card>
          </div>
        )}
        <DialogFooter className="flex !justify-center">
          {!emailSent && (
            <Button
              onClick={onEmailSubmit}
              isLoading={isLoading}
              variant="green"
              size="xl"
              className="rounded-full px-8 min-w-[180px]"
            >
              {type !== "login" ? "Let's go" : "Log in"}
            </Button>
          )}
          {emailSent && (
            <Button
              onClick={onCodeSubmit}
              disabled={`${code}`?.length !== 5}
              isLoading={isLoading}
              variant="green"
              size="xl"
              className="rounded-full px-8 min-w-[180px]"
            >
              Confirm code
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
