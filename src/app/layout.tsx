import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./providers";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yassine's Blog",
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
          "antialiased bg-slate-50 dark:bg-dark pt-[60px] md:pt-[48px]",
          dmsans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
