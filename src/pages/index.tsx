import Web3 from 'web3';
import Web3Login from '@/components/Web3Login';
import { useState } from 'react';

export default function HomePage() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  if (!window.ethereum) {
    return <div>未安装钱包, 请安装钱包后重试</div>;
  }

  return (
    <div>
      <Web3Login
        onLogin={() => {
          setIsLogin(true);
        }}
      />
      {(() => {
        if (!isLogin) {
          return <div></div>;
        }

        return <div></div>;
      })()}
    </div>
  );
}
