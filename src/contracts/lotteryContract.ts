import { AbiItem } from "web3-utils";
import { contractHelper } from "../libs/ContractHelper";
import lotteryContractInterface from "./lotteryABI.json";

export const lotteryContract = contractHelper.getContract(
  lotteryContractInterface as unknown as AbiItem,
  "0xA4B5dac7a13A5C8e9021A5732dc12Fd0a088585E"
);
