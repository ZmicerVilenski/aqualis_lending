"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAaveDistributionManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint128",
                        name: "emissionPerSecond",
                        type: "uint128",
                    },
                    {
                        internalType: "uint256",
                        name: "totalStaked",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "underlyingAsset",
                        type: "address",
                    },
                ],
                internalType: "struct DistributionTypes.AssetConfigInput[]",
                name: "assetsConfigInput",
                type: "tuple[]",
            },
        ],
        name: "configureAssets",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IAaveDistributionManager__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAaveDistributionManager__factory = IAaveDistributionManager__factory;
IAaveDistributionManager__factory.abi = _abi;
