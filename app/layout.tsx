import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yourdomain.com is for sale",
  description: "Interested in buying yourdomain.com? Get in touch with us to make an offer.",
  openGraph: {
    title: "yourdomain.com is for sale",
    description: "Interested in buying yourdomain.com? Get in touch with us to make an offer.",
    url: "https://yourdomain.com",
    siteName: "yourdomain.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-blue-500 selection:text-white flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
