import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cultivate Dance Studio | High-Fidelity Deep Purple Edition",
  description: "Engineered for the elite. A sanctuary where technical mastery meets the raw edge of modern movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${splineSans.variable} font-sans bg-background-deep text-white antialiased selection:bg-primary selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
