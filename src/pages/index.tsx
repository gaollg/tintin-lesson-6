import Web3 from 'web3';
import Web3Login from '@/components/Web3Login';

export default function HomePage() {
  if (!window.ethereum) {
    return <div>未安装钱包, 请安装钱包后重试</div>;
  }

  return (
    <div>
      <Web3Login />
    </div>
  );
}
