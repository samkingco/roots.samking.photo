import useSWR from "swr";
import { fetcher } from "../utils/fetch";

export interface ENSLookupResponse {
  address: string;
  name: string;
  displayName: string;
  avatar: string;
}

export const useENS = (
  address?: string,
  shouldFetch = true
): ENSLookupResponse | undefined => {
  const { data: resolved } = useSWR<ENSLookupResponse>(
    Boolean(address && shouldFetch)
      ? `https://api.ensideas.com/ens/resolve/${address}`
      : null,
    fetcher
  );

  return resolved;
};
