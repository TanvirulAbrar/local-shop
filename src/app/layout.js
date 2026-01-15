import { Inter } from "next/font/google";
import "./globals.css";
import MarketplaceLayout from "@/components/MarketplaceLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Local Marketplace",
  description:
    "A digital destination for slow living and artisanal excellence, connecting you with the finest local makers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
       
        <MarketplaceLayout>{children}</MarketplaceLayout>
      </body>
    </html>
  );
}
