require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stomach cruise pulse comic hard light army gentle'; 
let testAccounts = [
"0x017fb60bf905126d432a4615b5b117c063765e964baa89b8efdc52e0dd33bfe9",
"0xd3e43688abe79f3447bec6ccdbbb9052e7274cfb81dfc15884c1a0ae906a5980",
"0xe840c8eadf4313072cd92238c2d31ca157841978750918919d39abc28bb75800",
"0x5ce4a21039f1aca0c3f1b674e617ae7a7d9b83cd0b3f354f397ca18748273221",
"0x61e300c15e525f8dd7e450397d73821e23867eaf318426fa19a1bf6bfaa6421f",
"0x2ab3ebad364de4cefa863596850c32a28d22a63808119b0c0da40a16a51d56ad",
"0x34a8a0b131ebe30756279ee93417808ed53d5c254596353999abd0b3c723babc",
"0x91cf5469fdf867fd474b167dd450173a25401afc4b63b0061a17ded4b7e800d3",
"0x51284e62134e0ad95665e197dba647262c3aaa2e5e55abb8f0f14dd6fb863ceb",
"0x0994f9750e4de0d49ad21abc02a4d9b09a127239d67d079d95f1cf7c39e848d2"
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
            version: '^0.8.0'
        }
    }
};

