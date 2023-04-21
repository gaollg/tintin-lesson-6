import Web3Helper from '@/helper/Web3Heper';
import { Button, Divider, Card, Input, Space, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
let web3 = Web3Helper.instance();

type TLoginInfo = {
  chainId: number;
  blockNumber: number;
  blockTimestamp: string | number;
  balance: string;
};

let contractLesson6ERC20 = Web3Helper.getContractLesson6ERC20();

export default function HomeWork2(props: {}) {
  let [mintValue, setMintValue] = useState<number>(200);
  let [burnValue, setBurnValue] = useState<number>(100);

  return (
    <Card title="作业2：开发前端界面，合约owner可以在前端实现增发与销毁功能。" className="mt-3">
      <div className="flex flex-row gap-2 mt-2">
        <Space.Compact style={{ width: '100%' }}>
          <InputNumber
            type="number"
            value={mintValue}
            onChange={(value) => {
              if (value) {
                setMintValue(value);
              }
            }}
          />
          <Button type="primary">增发 {mintValue}</Button>
        </Space.Compact>
        <Space.Compact style={{ width: '100%' }}>
          <InputNumber
            type="number"
            value={burnValue}
            onChange={(value) => {
              if (value) {
                setBurnValue(value);
              }
            }}
          />
          <Button type="primary" danger>
            销毁{burnValue}
          </Button>
        </Space.Compact>
      </div>
    </Card>
  );
}
