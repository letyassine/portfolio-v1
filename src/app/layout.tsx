import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "./providers";
import Navbar from "@/components/NavBar/Navbar";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gitcoder.vercel.app/'),
  title: "Yassine Haimouch",
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Yassine Haimouch",
    description: "Developer, writer, and creator.",
    url: "https://gitcoder.vercel.app",
    siteName: "Yassine Haimouch",
    locale: "en_US",
    type: "website",
  },
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
