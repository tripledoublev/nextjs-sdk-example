import { SubTitle, Table, Td, Th } from "@/public/style";
import { TokenTransaction } from "@paytweed/frontend-sdk-react";

const chains = ["tezosGhost", "polygonMumbai", "ethereumGoerli"];

interface Data {
  [k: string]: TokenTransaction[];
}

const TransactionsList: React.FC<{ data: Data }> = ({ data }) => {
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
                <Td>{entry.value}</Td>
                <Td>{entry.tokenMetadata.tokenName}</Td>
                <Td>{entry.tokenMetadata.tokenSymbol}</Td>
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
