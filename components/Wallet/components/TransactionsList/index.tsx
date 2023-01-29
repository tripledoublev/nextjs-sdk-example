import { SubTitle, Table, Td, Th } from "@/public/style";
const chains = ["tezos", "polygon", "ethereum"];
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

const TransactionsList: React.FC<{ data: Data; chain: string }> = ({
  data,
}) => {
  return (
    <>
      {chains.map((chain) => (
        <Table>
          <thead>
            <SubTitle>{chain}</SubTitle>
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
            {data[chain].map((entry) => (
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
      ))}
    </>
  );
};

export default TransactionsList;
