import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "canadaai.si is for sale",
  description: "Interested in buying canadaai.si? Get in touch with us to make an offer.",
  openGraph: {
    title: "canadaai.si is for sale",
    description: "Interested in buying canadaai.si? Get in touch with us to make an offer.",
    url: "https://canadaai.si",
    siteName: "canadaai.si",
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
