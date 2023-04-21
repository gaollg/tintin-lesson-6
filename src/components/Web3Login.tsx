import Web3Helper from '@/helper/Web3Heper';
import { Button, Divider, Card } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

type TLoginInfo = {
  chainId: number;
  blockNumber: number;
  blockTimestamp: string | number;
  balance: string;
};

export default function Web3Login(props: { onLogin: () => void }, onLogout: () => void) {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [loginInfo, setLoginInfo] = useState<TLoginInfo>();

  let freshAccount = async () => {
    let accounts = await web3.eth.getAccounts();
    setAccounts(accounts);

    let blockNumber = await web3.eth.getBlockNumber();
    let block = await web3.eth.getBlock(blockNumber);
    let loginInfo: TLoginInfo = {
      chainId: await web3.eth.getChainId(),
      blockNumber: blockNumber,
      blockTimestamp: block.timestamp,
      balance: await web3.eth.getBalance(accounts[0]),
    };
    setLoginInfo(loginInfo);

    let c = Web3Helper.getLesson6ERC20();
    let tokenSymbol = await c.methods.symbol().call();
    console.log('--------tokenSymbol', tokenSymbol);
  };
  useEffect(() => {
    web3.eth.getAccounts().then((accounts) => {
      freshAccount();
    });
  }, []);

  if (loginInfo) {
    return (
      <Card title="登录信息" extra={<a href="#">More</a>} style={{ width: 500 }}>
        <div className="max-w-[500px]">
          <div className="flex flex-row  mt-2">
            <div className="flex-1">登录账号</div>
            <div className="flex-1 text-gray-400">{accounts[0]}</div>
          </div>
          <div className="flex flex-row  mt-2">
            <div className="flex-1">chainId</div>
            <div className="flex-1 text-gray-400">{loginInfo?.chainId}</div>
          </div>
          <div className="flex flex-row  mt-2">
            <div className="flex-1">BlockNumber</div>
            <div className="flex-1 text-gray-400">{loginInfo?.blockNumber}</div>
          </div>
          <div className="flex flex-row  mt-2">
            <div className="flex-1">blockTimestamp</div>
            <div className="flex-1 text-gray-400">{loginInfo?.blockTimestamp}</div>
          </div>
          <div className="flex flex-row  mt-2">
            <div className="flex-1">余额</div>
            <div className="flex-1 text-gray-400">{web3.utils.fromWei(loginInfo.balance)}</div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={async () => {
          await window.ethereum.enable();
          freshAccount();
        }}
      >
        登录
      </Button>
    </div>
  );
}
