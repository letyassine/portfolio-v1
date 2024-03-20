import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "./providers";
import Navbar from "@/components/NavBar/Navbar";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yassine Haimouch",
  description: "This is My Personal Portfolio - Blog",
  icons: {
    icon: "/images/icon.png",
  },
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
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
