import { CustomQueryProvider } from "@providers/QueryProvider";
import { CommonsProps } from "@utils/utils";

export default async function AppProvider({ children }: CommonsProps) {
  return <CustomQueryProvider>{children}</CustomQueryProvider>;
}
