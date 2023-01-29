import { SubTitle, Table, Td, Th } from "@/public/style";

interface CryptoCurrencyToken {
  contractAddress: string;
  decimals: number;
  logo: string;
  name: string;
  symbol: string;
}

interface EthereumData {
  createdAt: string;
  cryptoCurrencyAmount: string;
  cryptoCurrencyToken: CryptoCurrencyToken;
  direction: string;
  fromAddress: string;
  id: string;
  status: string;
  toAddress: string;
  type: string;
}

interface Data {
  ethereum?: EthereumData[];
  polygon: any[];
  tezos: any[];
}

const TransactionsList: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <>
      <Table>
        <thead>
          <SubTitle>Ethereum</SubTitle>
          <tr>
            <Th>Created At</Th>
            <Th>Crypto Currency Amount</Th>
            <Th>Token Name</Th>
            <Th>Token Symbol</Th>
            <Th>Direction</Th>
            <Th>From Address</Th>
            <Th>To Address</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {data.ethereum.map((entry) => (
            <tr key={entry.id}>
              <Td>{entry.createdAt}</Td>
              <Td>{entry.cryptoCurrencyAmount}</Td>
              <Td>{entry.cryptoCurrencyToken.name}</Td>
              <Td>{entry.cryptoCurrencyToken.symbol}</Td>
              <Td>{entry.direction}</Td>
              <Td>{entry.fromAddress}</Td>
              <Td>{entry.toAddress}</Td>
              <Td>{entry.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table>
        <thead>
          <SubTitle>Tezos</SubTitle>
          <tr>
            <Th>Created At</Th>
            <Th>Crypto Currency Amount</Th>
            <Th>Token Name</Th>
            <Th>Token Symbol</Th>
            <Th>Direction</Th>
            <Th>From Address</Th>
            <Th>To Address</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {data.tezos.map((entry) => (
            <tr key={entry.id}>
              <Td>{entry.createdAt}</Td>
              <Td>{entry.cryptoCurrencyAmount}</Td>
              <Td>{entry.cryptoCurrencyToken.name}</Td>
              <Td>{entry.cryptoCurrencyToken.symbol}</Td>
              <Td>{entry.direction}</Td>
              <Td>{entry.fromAddress}</Td>
              <Td>{entry.toAddress}</Td>
              <Td>{entry.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table>
        <thead>
          <SubTitle>Polygon</SubTitle>
          <tr>
            <Th>Created At</Th>
            <Th>Crypto Currency Amount</Th>
            <Th>Token Name</Th>
            <Th>Token Symbol</Th>
            <Th>Direction</Th>
            <Th>From Address</Th>
            <Th>To Address</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {data.polygon.map((entry) => (
            <tr key={entry.id}>
              <Td>{entry.createdAt}</Td>
              <Td>{entry.cryptoCurrencyAmount}</Td>
              <Td>{entry.cryptoCurrencyToken.name}</Td>
              <Td>{entry.cryptoCurrencyToken.symbol}</Td>
              <Td>{entry.direction}</Td>
              <Td>{entry.fromAddress}</Td>
              <Td>{entry.toAddress}</Td>
              <Td>{entry.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionsList;
