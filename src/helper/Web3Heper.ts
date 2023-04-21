import Web3 from 'web3';

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
};

export default Web3Helper;
