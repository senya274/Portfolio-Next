import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./frames.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syn-Front.Dev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body className="font-montserrat">


        {children}

        </body>

    </html>
  );
}
