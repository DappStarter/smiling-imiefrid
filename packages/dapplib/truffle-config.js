require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pizza pudding grace crime olympic six'; 
let testAccounts = [
"0x0f6191b941612c24cf534cb6aa2835f07c2637449b207fb789df7e00306d5888",
"0xb098eb59f66e6fdf468c0b284b0cebf0ea833effe40ae96b6fcd581521ee6c48",
"0xa0a71950b580c9f43ee8ec1ca63b1806bd5ca4d46f18fd09b1d694360c3b1929",
"0x2b535c458a687ffb632c839b5be349a4e09930e1f6fdb2cdf951614444d5d467",
"0x7e2a1fa5809b2f923835f7ad12312b12c92ff468962d9086d259e4354c5bc820",
"0xbbed57dc0752fda2bb8b313bcfbc5fdabde674acbaa9e66ffbaa6e73f719b41e",
"0xdcdc10a18d2464de8cc04d1fb96f067889a2eb5552d53807aefa8ca8c47d8daf",
"0x465b80f1757e4acb961fcc2804d06c49f497381e7ac1a1840efce3e259bef5c7",
"0x2bf4188126eb4b8c52323fcc9b4e564875a01c478cb95a963c63208e7fc50cdb",
"0xc8c2b4c0b66dab16ceb14d7b68982cacb04bfd37863ac1c21d866db43016368a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
