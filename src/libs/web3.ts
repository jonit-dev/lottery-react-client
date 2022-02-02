import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }
}

window.ethereum.request({ method: "eth_requestAccounts" });

export const web3 = new Web3(window.ethereum);
