"use client";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Copy, Loader2 } from "lucide-react";

interface TicketInfo {
  eventName: string;
  ticketId: string;
  userWalletAddress: string;
  userEmail: string;
}

export function TicketPurchaseSuccess(): JSX.Element {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        <div className="bg-black text-primary-foreground p-6">
          <h1 className="text-3xl text-center font-bold text-white">
            Thank you for the purchase! 🙏
          </h1>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">You will soon receive your ticket on your email - {email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}