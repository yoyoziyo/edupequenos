import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "EduPequenos | Materiais pedagógicos", template: "%s | EduPequenos" },
  description: "Livros, atividades e materiais pedagógicos digitais para os anos iniciais.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
