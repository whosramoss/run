import { fontQuestrial } from "@utils/app-font";
import AppProvider from "@providers/AppProvider";
import { cn } from "@utils/utils";
import AppMetadata from "@utils/app-metadata";
import "@styles/global.css";

export const generateMetadata = () => {
  const isLocalMetadata = true;
  const m = new AppMetadata(isLocalMetadata)
  return m.completeMetadata;
}


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
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
