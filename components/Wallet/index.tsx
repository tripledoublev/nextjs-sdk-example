import { hooks } from "@paytweed/frontend-sdk-react";
import CreateWallet from "./components/CreateWallet";
import WalletData from "./components/WalletData";

const Wallet = () => {
  const { data: walletExists, error, loading } = hooks.useWalletExists();

  const renderContent = () => {
    if (loading) return <div>Loading</div>;
    if (error) return <div>Error: {error}</div>;
    return walletExists ? (
      <WalletData />
    ) : (
      <CreateWallet />
    );
  };

  return renderContent();
};

export default Wallet;
