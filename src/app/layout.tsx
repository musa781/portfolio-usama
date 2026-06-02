import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Muhammad Usama Sharif | MERN Stack & Shopify Developer",
  description: "Welcome to the professional portfolio of Muhammad Usama Sharif, a skilled MERN Stack & Shopify Developer specializing in scalable full-stack web applications, Remix/React Router v7, and custom Shopify store integrations.",
  keywords: [
    "Muhammad Usama Sharif",
    "Usama Sharif",
    "MERN Stack Developer",
    "Shopify Developer",
    "Shopify Expert",
    "Soft Pulse Developer",
    "VisaBridge Web Developer",
    "React.js Developer",
    "Remix Developer",
    "Node.js Developer",
    "FastAPI",
    "Pakistan Web Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Muhammad Usama Sharif", url: "https://github.com/musa781" }],
  creator: "Muhammad Usama Sharif",
  metadataBase: new URL("https://usamasharif.dev"),
  openGraph: {
    title: "Muhammad Usama Sharif | MERN Stack & Shopify Developer",
    description: "Explore the work, work experience, and technical skillsets of Muhammad Usama Sharif, an expert full-stack developer.",
    url: "https://usamasharif.dev",
    siteName: "Muhammad Usama Sharif Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usama Sharif | MERN Stack & Shopify Developer",
    description: "Explore the work, work experience, and technical skillsets of Muhammad Usama Sharif, an expert full-stack developer."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans select-none bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
