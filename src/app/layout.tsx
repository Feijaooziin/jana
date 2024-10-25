import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jana.com",
  description:
    "Site feito com todo amor do mundo para a mulher mais linda da Terra!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
