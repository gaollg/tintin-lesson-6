import { Button } from 'antd';
import Web3 from 'web3';

export default function Web3Login(props: {}) {
  if (!window.ethereum) {
    return <div>未安装钱包</div>;
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={async () => {
          await window.ethereum.enable();
          let web3 = new Web3(window.ethereum);
          console.log(web3);
          let accounts = await web3.eth.getAccounts();
          console.log(accounts);
        }}
      >
        登录
      </Button>
    </div>
  );
}
