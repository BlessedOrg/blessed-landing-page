import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/providers/RootProvider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Blessed ",
    default: "Blessed.fan"
  },
  openGraph: {
    images: [`/metadata/og-image.svg`]
  },
  twitter: {
    images: [`/metadata/og-image.svg`]
  }
};
const ttBluescreens = localFont({
  src: "../../public/fonts/TT_Bluescreens_Bold.woff",
  variable: "--font-tt-bluescreens",
  display: "swap"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ttBluescreens.variable}`}>
    <body className={inter.className}>
    <RootProvider>
      <main className="flex flex-col items-center w-full">{children}</main>
    </RootProvider>
    </body>
    </html>
  );
}
