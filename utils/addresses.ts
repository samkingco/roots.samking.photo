export function formatAddress(address: string): string {
  const parts = [];
  parts[0] = address.slice(0, 4);
  parts[1] = address.slice(address.length - 4);
  return parts.join("…");
}
