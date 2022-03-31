import RootsABI from "../abis/Roots.json";

export const deployedContracts = {
  roots: {
    addresses: {
      1: "0xd0c2A3C9127966E9dfED75E04a4341fBaBD77e43", // mainnet
    },
    supportedChainIds: [1],
    abi: RootsABI,
  },
};

export function isChainSupportedForContract(
  contract: keyof typeof deployedContracts,
  chainId: number
) {
  return deployedContracts[contract].supportedChainIds.includes(chainId);
}

export function contractAddress(
  contract: keyof typeof deployedContracts,
  chainId = 1
) {
  // @ts-ignore
  return deployedContracts[contract].addresses[chainId];
}

export function contractAbi(contract: keyof typeof deployedContracts) {
  return deployedContracts[contract].abi;
}
