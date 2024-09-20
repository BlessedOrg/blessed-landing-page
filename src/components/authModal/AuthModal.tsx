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
        toast(`Something went wrong: ${data?.message || res.statusText}`, { type: "error" });
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
    setIsOpen(false);
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild={type === "onboarding"}>
        {type === "login" ? (
          "Log in"
        ) : (
          <Button variant="green" className="rounded-full" size="lg">
            Start for free
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{type !== "login" ? "Sign up" : "Log in"}</DialogTitle>
          <DialogDescription>Enter your email below to {type !== "login" ? "Sign up" : "Log in"}</DialogDescription>
        </DialogHeader>
        {!emailSent && (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="user@blessed.fan"
                className="col-span-3"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
        )}
        {emailSent && (
          <div className="w-full flex justify-center">
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} onChange={(value) => setCode(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        )}
        <DialogFooter>
          {!emailSent && (
            <Button onClick={onEmailSubmit} isLoading={isLoading}>
              {type !== "login" ? "Sign up" : "Log in"}
            </Button>
          )}
          {emailSent && (
            <div className="flex gap-2 w-full justify-between">
              <Button
                onClick={() => {
                  setCode(null);
                  setIsLoading(false);
                  setEmail("");
                  setEmailSent(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={onCodeSubmit} disabled={`${code}`?.length !== 5} isLoading={isLoading}>
                Confirm code
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
