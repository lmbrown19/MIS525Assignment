import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollBackground } from "@/components/ScrollBackground";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Tennis Record - Estimated Tennis Ratings and Statistics",
  description:
    "Statistical Analysis and Estimated Tennis Ratings to the 10,000th of a Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans relative">
        <ScrollBackground />
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1 relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
