import { hooks } from "@paytweed/frontend-sdk-react";
import CreateWallet from "./components/CreateWallet";

const WalletData = () => {
  const { data: address, error: errorAddress, loading: loadingAdderess } = hooks.useWalletAddress({blockchainId: 'ethereum'});
  const { data: cryptoBalance, error: errorBalance, loading: loadingBalance } = hooks.useCryptoBalance();
  const {data} = hooks.useBlockchainList()
  const sdk = hooks.useTweedFrontendSDK()

  console.log(data)

  if (loadingAdderess || loadingBalance) return <div>Loading</div>;
  if (errorAddress || errorBalance) return <div>Error: {errorAddress || errorBalance}</div>;

  const onLogout = async () => {
    await sdk.wallet.logout()
  }
  
  const onSendTransaction = async () => {
    const destinationAddress = await sdk.wallet.getAddress({blockchainId: 'ethereum'})
     await sdk.coin.sendToWallet({walletAddress: destinationAddress, cryptoCurrencyAmount: '0', blockchainId: 'ethereum'})
  }




  return (
    <>
      <div>Address: {address}</div>
      {/* <div>Balance ETH: {cryptoBalance?.ETH.map}</div> */}
      <button onClick={onSendTransaction}>Send Transaction</button>
      <button onClick={onLogout}>Dissconnect</button>
    </>
  );
};

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
