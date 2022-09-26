import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { getShortAddress } from '../common/utils';

export default function WalletButton() {
  const wallet = useWallet();
  const { visible, setVisible } = useWalletModal();

  const connect = () => setVisible(!visible);
  const disconnect = async () => await wallet.disconnect();

  return (
    <div className="wrapper">
      {wallet.connected ? (
        <div className="button" onClick={disconnect}>
          <span className="tooltip">Press to disconnect wallet</span>
          <span>Wallet: {getShortAddress(wallet.publicKey?.toBase58())}</span>
        </div>
      ) : (
        <div className="button" onClick={connect}>
          <span className="tooltip">Press to disconnect wallet</span>
          <span>Connect Wallet</span>
        </div>
      )}
    </div>
  );
}
