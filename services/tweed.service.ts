import { TweedBackendSDK } from "@paytweed/backend-sdk";
import nftService from "./nft.service";
import { defaultBlockchainIds } from './constants';

type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : never;


class TweedService {
  private _client: AsyncReturnType<typeof TweedBackendSDK.setup> | undefined =
    undefined;
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "WUjkeKW5uNZV54q7LKxqGJF5Dl8BbTYp",
      apiSecret: "60YzL7LJs5NbWQyy-xaRAndOQ7Xhd0mM4sztdSN1p6AA7Db2y3IIL22lMrSmXfnd",
      defaultBlockchainIds: defaultBlockchainIds,
      callbacks: {
        getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId),
      },
    });
    return this._client;
  }
}

export default new TweedService();
