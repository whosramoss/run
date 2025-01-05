import type { Metadata } from "next";
import { baseMetadata } from "src/utils/meta";
import { fontQuestrial } from "src/utils/fonts";
import "@styles/global.css";
import AppProvider from "@providers/AppProvider";
import { cn } from "@utils/utils";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "max-w-[100vw] overflow-x-hidden bg-primary",
          fontQuestrial.className,
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
