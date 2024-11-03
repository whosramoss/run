import type { Metadata } from "next";
import AppProvider from "@providers/AppProvider";
import { baseMetadata } from "@shared/meta";
import { fontNeueMontreal } from "@shared/fonts";
import CustomCursor from "@components/Cursor";
import "@styles/global.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontNeueMontreal.className}>
        <AppProvider>
          <CustomCursor />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
