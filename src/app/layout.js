"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import MarketplaceLayout from "@/components/MarketplaceLayout";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import SessionListener from "@/components/SessionListener";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata = {
  title: "Local Marketplace",
  description:
    "A digital destination for slow living and artisanal excellence, connecting you with the finest local makers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SessionProvider>
          <MarketplaceLayout>
            {children}
            <SessionListener />
            <ToastContainer position="top-right" />
          </MarketplaceLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
