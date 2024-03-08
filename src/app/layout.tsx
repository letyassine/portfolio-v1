import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yassine Haimouch",
  description: "This is My Personal Portfolio/Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-slate-200 dark:bg-background pt-[60px] md:pt-[48px]",
          dmsans.className
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
