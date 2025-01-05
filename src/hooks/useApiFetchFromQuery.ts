import { useQuery } from "@tanstack/react-query";

interface QueryProps {
  url: string;
  key: string;
}

export const useApiFetchFromQuery = <T>({ url, key }: QueryProps) => {
  const { data, isLoading, isError, error } = useQuery<{
    success: boolean;
    data: T;
  }>({
    queryKey: [key],
    queryFn: async (): Promise<{
      success: boolean;
      data: T;
    }> => {
      const response = await fetch(url);
      return response.json();
    },
  });

  return { data: data?.data, error, isLoading, isError };
};
