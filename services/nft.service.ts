class NftService {
  _getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  _getNftPrice() {
    return Math.trunc(this._getRandomArbitrary(1000000, 9999999));
  }

  getById(id: string) {
    return {
      nftId: id,
      priceInCrypto: 1000000,
      fiatCurrencyId: "USD",
      tokenUri: "1",
      contractAddress: "KT1DfymMp3qD5Pd5ujPjp7UsQbppY9yY1Hbf",
      chain: "tezosGhost",
      title: "NFT_TITLE",
      description: "NFT_DESCRIPTION",
    };
  }
}

export default new NftService();
