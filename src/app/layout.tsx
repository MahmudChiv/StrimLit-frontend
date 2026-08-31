import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StrimLit - Video Conferencing & Co-Working Platform",
  description: "Meet, co-work, and collaborate in real-time with StrimLit video conferencing.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} h-full antialiased font-sans`}
    >
      <body className={`${ubuntu.className} min-h-full flex flex-col bg-[#f7f5f0] text-[#1e293b] selection:bg-[#ff5500] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
