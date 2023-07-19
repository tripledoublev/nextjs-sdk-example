class NftService {
  _getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  _getNftPrice() {
    return Math.trunc(this._getRandomArbitrary(100, 9999));
  }

  getById(id: string) {
    return {
      nftId: id,
      priceInCents: this._getNftPrice(),
      fiatCurrencyId: "USD",
      tokenUri: "NFT_TOKEN_URI",
      contractAddress: "0x80BB55333968136cda2Ed28f2D63B74D521CAA73",
      chain: "ethereumGoerli",
      title: "NFT_TITLE",
      description: "NFT_DESCRIPTION",
      abi: "mint(address,string)",
    };
  }
}

export default new NftService();
