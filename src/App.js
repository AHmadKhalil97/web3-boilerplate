import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import WalletButton from './components/WalletButton';
import Wallet from './providers/WalletProvider';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import './App.css';

const network = 'devnet';

function App() {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  return (
    <BrowserRouter>
      <ConnectionProvider endpoint={endpoint}>
        <Wallet>
          <WalletButton />
        </Wallet>
      </ConnectionProvider>
    </BrowserRouter>
  );
}

export default App;
