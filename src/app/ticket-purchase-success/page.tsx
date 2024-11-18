import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { TicketPurchaseSuccess } from "@/components/ticketPurchaseSuccess";

export default function TicketPurchaseSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      }
    >
      <TicketPurchaseSuccess />
    </Suspense>
  );
}