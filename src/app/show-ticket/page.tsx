"use client";
import { useCallback, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Copy, Loader2 } from "lucide-react";

interface TicketInfo {
  eventName: string;
  ticketId: string;
  userWalletAddress: string;
  userEmail: string;
}

function TicketContent() {
  const searchParams = useSearchParams();
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState("Copy to clipboard");

  const fetchTicketInfo = async () => {
    const app = searchParams.get("app");
    const contractId = searchParams.get("contractId");
    const ticketId = searchParams.get("tokenId");
    const userEmail = searchParams.get("userEmail");

    if (!app || !contractId || !ticketId || !userEmail) {
      setError("Missing required query parameters");
      setIsLoading(false);
      return;
    }

    try {
      const apiBaseUrl = "https://api.blessed.fan";
      const response = await fetch(`${apiBaseUrl}/api/v1/applications/${app}/tickets/${contractId}/${ticketId}/show-ticket?userEmail=${userEmail}`);
      if (!response.ok) {
        throw new Error("Failed to fetch ticket information");
      }
      const data = await response.json();
      setTicketInfo(data);
    } catch (err) {
      setError("An error occurred while fetching ticket information");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTicketInfo();
  }, [searchParams]);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyToClipboard = useCallback(() => {
    if (ticketInfo) {
      navigator.clipboard.writeText(ticketInfo.userWalletAddress);
      setTooltipContent("Copied!");
      setTimeout(() => setTooltipContent("Copy to clipboard"), 2000);
    }
  }, [ticketInfo]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-red-500">Error</h1>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    )
  }

  if (!ticketInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">No Ticket Information</h1>
          <p className="text-gray-700">No ticket information available.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        <div className="bg-black text-primary-foreground p-6">
          <h1 className="text-3xl text-center font-bold text-white">{ticketInfo.eventName}</h1>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Ticket ID</span>
              <span className="text-lg font-bold">{ticketInfo.ticketId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <span className="text-base">{ticketInfo.userEmail}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Wallet Address</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center space-x-2 text-base hover:text-primary"
                    >
                      <span>{shortenAddress(ticketInfo.userWalletAddress)}</span>
                      <Copy className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipContent}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 bg-white rounded-full border-8 border-gray-200 -ml-8"></div>
            <div className="w-16 h-16 bg-white rounded-full border-8 border-gray-200 -mr-8"></div>
          </div>
        </div>
        <div className="p-6 text-center">
          <p className="text-sm text-gray-500">Present this ticket at the event entrance</p>
        </div>
      </div>
    </div>
  );
}

export default function ShowTicket() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>}>
      <TicketContent />
    </Suspense>
  );
}