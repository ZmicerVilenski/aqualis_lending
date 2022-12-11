"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservesSetupHelper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract PoolConfigurator",
                name: "configurator",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "asset",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "baseLTV",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liquidationThreshold",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liquidationBonus",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "reserveFactor",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "borrowCap",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "supplyCap",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "stableBorrowingEnabled",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "borrowingEnabled",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "flashLoanEnabled",
                        type: "bool",
                    },
                ],
                internalType: "struct ReservesSetupHelper.ConfigureReserveInput[]",
                name: "inputParams",
                type: "tuple[]",
            },
        ],
        name: "configureReserves",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610c3e806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806323bb109314610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461009a575b600080fd5b61006461005f366004610aaa565b6100ad565b005b6100646107e4565b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100646100a8366004610b33565b6108d4565b60005473ffffffffffffffffffffffffffffffffffffffff163314610133576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60005b818110156107de578373ffffffffffffffffffffffffffffffffffffffff16637c4e560b84848481811061016c5761016c610b57565b610183926020610140909202019081019150610b33565b85858581811061019557610195610b57565b90506101400201602001358686868181106101b2576101b2610b57565b90506101400201604001358787878181106101cf576101cf610b57565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9096166004870152602486019490945250604484019190915260606101409092020101356064820152608401600060405180830381600087803b15801561025657600080fd5b505af115801561026a573d6000803e3d6000fd5b5050505082828281811061028057610280610b57565b9050610140020161010001602081019061029a9190610b86565b15610531578373ffffffffffffffffffffffffffffffffffffffff1663682cf2648484848181106102cd576102cd610b57565b6102e4926020610140909202019081019150610b33565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015260016024820152604401600060405180830381600087803b15801561035157600080fd5b505af1158015610365573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff1663d14a098384848481811061039757610397610b57565b6103ae926020610140909202019081019150610b33565b8585858181106103c0576103c0610b57565b9050610140020160a001356040518363ffffffff1660e01b815260040161040992919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b15801561042357600080fd5b505af1158015610437573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16638a751a6084848481811061046957610469610b57565b610480926020610140909202019081019150610b33565b85858581811061049257610492610b57565b9050610140020160e00160208101906104ab9190610b86565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015215156024820152604401600060405180830381600087803b15801561051857600080fd5b505af115801561052c573d6000803e3d6000fd5b505050505b8373ffffffffffffffffffffffffffffffffffffffff1663f213ef0e84848481811061055f5761055f610b57565b610576926020610140909202019081019150610b33565b85858581811061058857610588610b57565b905061014002016101200160208101906105a29190610b86565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015215156024820152604401600060405180830381600087803b15801561060f57600080fd5b505af1158015610623573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff1663571f03e584848481811061065557610655610b57565b61066c926020610140909202019081019150610b33565b85858581811061067e5761067e610b57565b9050610140020160c001356040518363ffffffff1660e01b81526004016106c792919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156106e157600080fd5b505af11580156106f5573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16634b4e675384848481811061072757610727610b57565b61073e926020610140909202019081019150610b33565b85858581811061075057610750610b57565b90506101400201608001356040518363ffffffff1660e01b815260040161079992919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156107b357600080fd5b505af11580156107c7573d6000803e3d6000fd5b5050505080806107d690610ba8565b915050610136565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161012a565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610955576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161012a565b73ffffffffffffffffffffffffffffffffffffffff81166109f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161012a565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff81168114610aa757600080fd5b50565b600080600060408486031215610abf57600080fd5b8335610aca81610a85565b9250602084013567ffffffffffffffff80821115610ae757600080fd5b818601915086601f830112610afb57600080fd5b813581811115610b0a57600080fd5b87602061014083028501011115610b2057600080fd5b6020830194508093505050509250925092565b600060208284031215610b4557600080fd5b8135610b5081610a85565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610b9857600080fd5b81358015158114610b5057600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c01577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea264697066735822122058053fd1fc104a8740d7431fe7a26b997b6f9bca1689ef8261bfc672746f32b364736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class ReservesSetupHelper__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReservesSetupHelper__factory = ReservesSetupHelper__factory;
ReservesSetupHelper__factory.bytecode = _bytecode;
ReservesSetupHelper__factory.abi = _abi;
