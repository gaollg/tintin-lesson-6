import Web3 from 'web3';
import { Contract, ContractOptions } from 'web3-eth-contract';
import Lesson6ERC20AbiData from './Lesson6ERC20.json';

let instanceWeb3: Web3;

let Web3Helper = {
  instance: (): Web3 => {
    if (instanceWeb3) {
      return instanceWeb3;
    }
    if (!window.ethereum) {
      throw `未安装钱包, 请安装钱包后重试`;
    }
    instanceWeb3 = new Web3(window.ethereum);
    return instanceWeb3;
  },
  getContractLesson6ERC20: (): Contract => {
    let Contract = Web3Helper.instance().eth.Contract;
    //@ts-ignore
    let contract = new Contract(Lesson6ERC20AbiData.abi, '0x86Dd4C46766228BA10c6d98AB3649E9772e07D35');
    return contract;
  },
};

export default Web3Helper;
