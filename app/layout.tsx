import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Força G Experience",
  description:
    "Experiência de voo acrobático com o líder da Esquadrilha CEU na Barra da Tijuca, Rio de Janeiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}
