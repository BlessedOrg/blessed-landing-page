"use client";

import { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { apiUrl, dashboardUrl } from "@/variables/varaibles";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/requests/requests";

export const AuthModal = ({ authType = "login", label = "Start for free", className }: { authType?: "onboarding" | "login", label?: string, className?: string }) => {
  return (<Suspense><AuthModalContent authType={authType} label={label} className={className} /></Suspense>);
};
const AuthModalContent = ({ authType = "login", label = "Start for free", className }: { authType?: "onboarding" | "login", label?: string, className?: string }) => {
  const searchParams = useSearchParams();
  const isAfterLogout = authType === "login" && searchParams.get("logout");

  const [resendTimer, setResendTimer] = useState(0);
  const [type, setType] = useState<"login" | "onboarding">(authType);
  const [isOpen, setIsOpen] = useState(!!isAfterLogout);
  const [code, setCode] = useState<number | null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const onEmailSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetcher(`${apiUrl}/developers/login`, {
        method: "POST",
        body: JSON.stringify({ email })
      });
      if (!!res?.error) {
        toast(`Error: ${res?.message || res.statusText}`, { type: "error" });
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
      const res = await fetch(`${apiUrl}/developers/verify`, {
        method: "POST",
        body: JSON.stringify({ code })
      });
      const data = await res.json();
      console.log(data);
      if (!data?.accessToken) {
        toast(`Something went wrong: ${data?.message || res.statusText}`, { type: "error" });
      } else {
        setCookie("accessToken", data?.accessToken, {
          maxAge: 60 * 60 * 24 * 2
        });
        window.location.href = `${dashboardUrl}?token=${data?.accessToken}`;
        toast("Successfully logged in!", { type: "success" });
      }
    } catch (e) {
      toast(`Something went wrong: ${e?.message}`, { type: "error" });
    }
    onClearStates();
    setIsOpen(false);
    setIsLoading(false);
  };
  const handleResendCode = async () => {
    if (resendTimer > 0) return;

    setResendTimer(30);
    await onEmailSubmit();

    const timer = setInterval(() => {
      setResendTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    return () => {
      if (resendTimer > 0) {
        clearInterval(resendTimer);
      }
    };
  }, []);
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
          if (isAfterLogout) {
            window.location.replace(new URL(window.location.origin));
          }
        } else {
          setIsOpen(open);
        }
      }}
    >
      <DialogTrigger asChild={type === "onboarding"}>
        {type === "login" ? (
          "Log in"
        ) : (
          <Button variant="green" className={className ?? "rounded-full"} size="lg">
            {label}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[350px] ${isLoading && emailSent && type === "onboarding" ? "opacity-0" : "opacity-100"}`}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-sm font-semibold uppercase font-sans">
            {emailSent ? "YOU'RE ALMOST THERE!" : "HELLO, GREAT TO SEE YOU HERE!"}
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
        <DialogFooter className="flex !flex-col gap-2 items-center !justify-center">
          <div>
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
          </div>
          {!emailSent && (
            <div className="flex gap-2 items-center mt-4">
              <p className="text-sm">{type === "login" ? "Don't have an account?" : "Already have an account?"}</p>
              <button onClick={() => setType(type === "login" ? "onboarding" : "login")} className="text-sm underline">
                {type === "login" ? "Create account" : "Log in"}
              </button>
            </div>
          )}
          {emailSent && (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center mt-4">
                <p className="text-sm">Code did not arrive?</p>
                <button
                  className="text-sm underline tabular-nums"
                  onClick={handleResendCode}
                  disabled={resendTimer > 0 || isLoading}
                >
                  {resendTimer > 0 ? `Resend code (${resendTimer}s)` : "Resend code"}
                </button>
              </div>
              <button className="text-xs underline mt-2" onClick={onClearStates}>
                Back to email
              </button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
      <Dialog open={emailSent && isLoading && type === "onboarding"}>
        <DialogContent
          className="bg-gradient-to-r from-white to-yellow-500 py-10"
          withClose={false}
          overlayProps={{ className: "!bg-black/60" }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-sm font-semibold uppercase font-sans">Hang tight!</DialogTitle>
            <DialogDescription className="text-center font-bold text-5xl text-black uppercase font-ttBluescreens">
              We{"’"}re Setting Things <br />
              Up for You
            </DialogDescription>
          </DialogHeader>
          <div className="text-center flex flex-col gap-10 items-center">
            <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M48.9867 36.2937L50.5 37.8162L52.0133 36.2937C58.045 30.2217 68.3879 32.9562 70.6308 41.2158C71.6717 45.0492 70.5883 49.1467 67.7892 51.9646L50.5 69.3629L33.2108 51.96C27.1792 45.8879 29.9825 35.5633 38.2571 33.3758C42.0971 32.3604 46.1875 33.4712 48.9867 36.2892V36.2937Z"
                fill="#FFFACD"
              />
              <path
                d="M48.9867 36.2937L50.5 37.8162L52.0133 36.2937C58.045 30.2217 68.3879 32.9562 70.6308 41.2158C71.6717 45.0492 70.5883 49.1467 67.7892 51.9646L50.5 69.3629L33.2108 51.96C27.1792 45.8879 29.9825 35.5633 38.2571 33.3758C42.0971 32.3604 46.1875 33.4712 48.9867 36.2892V36.2937Z"
                stroke="#1D1D1B"
                stroke-width="6.25"
              />
              <path
                id="arrow-top-arc"
                d="M84.686 19.8479C76.0414 10.0258 63.5848 4.40373 50.5002 4.41873C25.3256 4.41873 4.91895 24.8254 4.91895 50C4.91895 54.7633 5.64811 59.3579 7.00644 63.6746"
                stroke="#1D1D1B"
                stroke-width="6.25"
              />
              <path
                id="arrow-bottom-arc"
                d="M16.3145 80.1521C24.959 89.9742 37.4157 95.5963 50.5003 95.5813C75.6749 95.5813 96.0815 75.1746 96.0815 50C96.087 45.3621 95.3828 40.7509 93.994 36.3254"
                stroke="#1D1D1B"
                stroke-width="6.25"
              />
              <path id="arrow-top-head" d="M84.6856 2.13959V20.3721H66.4531" stroke="#1D1D1B" stroke-width="6.25" />
              <path id="arrow-bottom-head" d="M16.3145 97.8604V79.6279H34.547" stroke="#1D1D1B" stroke-width="6.25" />
            </svg>

            <p className="text-3xl font-bold text-green-500 uppercase">Loading...</p>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};
