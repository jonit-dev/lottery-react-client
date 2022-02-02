import Web3 from "web3";
import { AbiItem } from "web3-utils";

declare global {
  interface Window {
    ethereum: any;
  }
}

class ContractHelper {
  public web3: Web3;

  public accounts: Promise<string[]>;
  public currentAccount: Promise<string>;

  constructor() {
    window.ethereum.request({ method: "eth_requestAccounts" });

    this.web3 = new Web3(window.ethereum);

    this.accounts = this.web3.eth.getAccounts();
    this.currentAccount = this.web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);
  }

  public getContract(abi: AbiItem | AbiItem[], address: string): any {
    return new this.web3.eth.Contract(abi, address);
  }
}

export const contractHelper = new ContractHelper();
