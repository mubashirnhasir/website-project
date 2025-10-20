import { GeistSans, GeistMono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // safer than /next for app router

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ninja Job Support",
  description: "Get real-time job and proxy interview support from experts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
