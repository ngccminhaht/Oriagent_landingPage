import type { Metadata } from "next";
import "./globals.css";
// Tùy chọn: Sử dụng font Google
import { Inter } from "next/font/google";

// IMPORT THÀNH PHẦN CHUNG
import { Footer } from "@/components/global/Footer";
import { MainNav } from "@/components/global/main-nav";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // EN: Your best teammates, multiplied. Working Smarter, Faster, and Stronger.
  title: "Oriagent",
  description: "Ваши лучшие коллеги, умноженные. Работают умнее, быстрее и сильнее.",
  icons: {
    icon: "/logooriagent.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        {/* 1. HEADER - STICKY (Dính) */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
          <MainNav />
        </div>

        {/* 2. NỘI DUNG CHÍNH - pt-16 để tránh bị Header che */}
        <main className="grow pt-0">
          {children}
        </main>

        {/* 3. FOOTER */}
      </body>
    </html>
  );
}