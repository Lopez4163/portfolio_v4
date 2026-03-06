import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorem Persona Portfolio",
  description: "Sleek portfolio concept with mock content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
