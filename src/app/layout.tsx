import type { Metadata } from "next";
import { baseMetadata } from "@shared/meta";
import { fontQuestrial } from "@shared/fonts";
import "@styles/global.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontQuestrial.className}>
        <div className="cursor" id="cursor" />
        {children}
      </body>
    </html>
  );
}
