import { TweedBackendSDK } from "@paytweed/backend-sdk";
import nftService from "./nft.service";

type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : never;

export const defaultBlockchainIds = ["tezosGhost"];

class TweedService {
  private _client: AsyncReturnType<typeof TweedBackendSDK.setup> | undefined =
    undefined;
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "YOUR-API-KEY",
      apiSecret: "YOUR-API-SECRET",
      defaultBlockchainIds: ["tezosGhost"],
      callbacks: {
        getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId),
      },
    });
    return this._client;
  }
}

export default new TweedService();
