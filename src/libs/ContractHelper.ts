import Web3 from "web3";
import { AbiItem } from "web3-utils";

declare global {
  interface Window {
    ethereum: any;
  }
}

class ContractHelper {
  public web3: Web3;

  constructor() {
    window.ethereum.request({ method: "eth_requestAccounts" });

    this.web3 = new Web3(window.ethereum);
  }

  public getContract(abi: AbiItem | AbiItem[], address: string): any {
    return new this.web3.eth.Contract(abi, address);
  }
}

export const contractHelper = new ContractHelper();
