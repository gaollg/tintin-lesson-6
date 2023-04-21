import { Button } from 'antd';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
let web3 = new Web3(window.ethereum);

export default function Web3Login(props: { onLogin: () => void }, onLogout: () => void) {
  const [accounts, setAccounts] = useState<string[]>([]);

  let freshAccount = async () => {
    let accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
  };
  useEffect(() => {
    web3.eth.getAccounts().then((accounts) => {
      freshAccount();
    });
  }, []);

  if (accounts.length > 0) {
    return (
      <div>
        <div>当前登录账号：{JSON.stringify(accounts)}</div>
        <Button
          onClick={async () => {
            await window.ethereum.enable();
            freshAccount();
          }}
        >
          切换账号
        </Button>
      </div>
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
