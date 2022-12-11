import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { UiIncentiveDataProviderV3, UiIncentiveDataProviderV3Interface } from "../../../../../@aave/periphery-v3/contracts/misc/UiIncentiveDataProviderV3";
type UiIncentiveDataProviderV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UiIncentiveDataProviderV3__factory extends ContractFactory {
    constructor(...args: UiIncentiveDataProviderV3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UiIncentiveDataProviderV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UiIncentiveDataProviderV3;
    connect(signer: Signer): UiIncentiveDataProviderV3__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50613f01806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634763753614610046578063799bdcf514610070578063976fafc514610090575b600080fd5b6100596100543660046134f3565b6100b0565b60405161006792919061397d565b60405180910390f35b61008361007e3660046134f3565b6100d1565b60405161006791906139ab565b6100a361009e3660046139be565b6100e4565b60405161006791906139db565b6060806100bc846100f5565b6100c68585611af4565b915091509250929050565b60606100dd8383611af4565b9392505050565b60606100ef826100f5565b92915050565b606060008273ffffffffffffffffffffffffffffffffffffffff1663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610144573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016891906139fe565b905060008173ffffffffffffffffffffffffffffffffffffffff1663d1946dbc6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156101b7573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526101fd9190810190613ac3565b90506000815167ffffffffffffffff81111561021b5761021b613a1b565b60405190808252806020026020018201604052801561025457816020015b610241613417565b8152602001906001900390816102395790505b50905060005b8251811015611aeb57600082828151811061027757610277613b75565b6020026020010151905083828151811061029357610293613b75565b6020026020010151816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060008573ffffffffffffffffffffffffffffffffffffffff166335ea6a7586858151811061030257610302613b75565b60200260200101516040518263ffffffff1660e01b8152600401610342919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6101e060405180830381865afa158015610360573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103849190613c2d565b9050600081610100015173ffffffffffffffffffffffffffffffffffffffff166375d264136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fc91906139fe565b9050606073ffffffffffffffffffffffffffffffffffffffff821615610af4576101008301516040517f6657732f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600091841690636657732f90602401600060405180830381865afa158015610491573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104d79190810190613ac3565b9050805167ffffffffffffffff8111156104f3576104f3613a1b565b6040519080825280602002602001820160405280156105b657816020015b6105a360405180610160016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff168152602001600060ff1681525090565b8152602001906001900390816105115790505b50915060005b8151811015610af15761065760405180610160016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff168152602001600060ff1681525090565b82828151811061066957610669613b75565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff9081169183018290526101008801516040517f7eff4ba800000000000000000000000000000000000000000000000000000000815290821660048201526024810192909252861690637eff4ba890604401608060405180830381865afa1580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c9190613d50565b60c08501526080840152606083015260a08201526101008601516040517f9efd6f7200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690639efd6f7290602401602060405180830381865afa1580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190613d86565b60ff16610120820152602080820151604080517f313ce567000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263313ce567926004808401938290030181865afa15801561083d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108619190613d86565b81610100019060ff16908160ff1681525050806020015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156108c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109089190810190613da9565b815260208101516040517f2a17bf6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690632a17bf6090602401602060405180830381865afa15801561097c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a091906139fe565b73ffffffffffffffffffffffffffffffffffffffff16604080830182905280517f313ce567000000000000000000000000000000000000000000000000000000008152905163313ce567916004808201926020929091908290030181865afa158015610a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a349190613d86565b81610140019060ff16908160ff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab99190613e52565b60e082015283518190859084908110610ad457610ad4613b75565b60200260200101819052505080610aea90613e6b565b90506105bc565b50505b604051806060016040528084610100015173ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152508460200181905250600083610140015173ffffffffffffffffffffffffffffffffffffffff166375d264136040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbe91906139fe565b6101408501516040517f6657732f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291925060009190831690636657732f90602401600060405180830381865afa158015610c37573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c7d9190810190613ac3565b9050606073ffffffffffffffffffffffffffffffffffffffff8316156112b757815167ffffffffffffffff811115610cb757610cb7613a1b565b604051908082528060200260200182016040528015610d7a57816020015b610d6760405180610160016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff168152602001600060ff1681525090565b815260200190600190039081610cd55790505b50905060005b82518110156112b557610e1b60405180610160016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff168152602001600060ff1681525090565b838281518110610e2d57610e2d613b75565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff9081169183018290526101408a01516040517f7eff4ba800000000000000000000000000000000000000000000000000000000815290821660048201526024810192909252861690637eff4ba890604401608060405180830381865afa158015610ebc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee09190613d50565b60c08501526080840152606083015260a08201526101408801516040517f9efd6f7200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690639efd6f7290602401602060405180830381865afa158015610f67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8b9190613d86565b60ff16610120820152602080820151604080517f313ce567000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263313ce567926004808401938290030181865afa158015611001573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110259190613d86565b81610100019060ff16908160ff1681525050806020015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015611086573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526110cc9190810190613da9565b815260208101516040517f2a17bf6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690632a17bf6090602401602060405180830381865afa158015611140573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116491906139fe565b73ffffffffffffffffffffffffffffffffffffffff16604080830182905280517f313ce567000000000000000000000000000000000000000000000000000000008152905163313ce567916004808201926020929091908290030181865afa1580156111d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f89190613d86565b81610140019060ff16908160ff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127d9190613e52565b60e08201528251819084908490811061129857611298613b75565b602002602001018190525050806112ae90613e6b565b9050610d80565b505b604051806060016040528087610140015173ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001828152508760400181905250600086610120015173ffffffffffffffffffffffffffffffffffffffff166375d264136040518163ffffffff1660e01b8152600401602060405180830381865afa15801561135d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138191906139fe565b6101208801516040517f6657732f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291925060009190831690636657732f90602401600060405180830381865afa1580156113fa573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526114409190810190613ac3565b9050606073ffffffffffffffffffffffffffffffffffffffff831615611a7a57815167ffffffffffffffff81111561147a5761147a613a1b565b60405190808252806020026020018201604052801561153d57816020015b61152a60405180610160016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff168152602001600060ff1681525090565b8152602001906001900390816114985790505b50905060005b8251811015611a78576115de60405180610160016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff168152602001600060ff1681525090565b8382815181106115f0576115f0613b75565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff9081169183018290526101208d01516040517f7eff4ba800000000000000000000000000000000000000000000000000000000815290821660048201526024810192909252861690637eff4ba890604401608060405180830381865afa15801561167f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a39190613d50565b60c08501526080840152606083015260a08201526101208b01516040517f9efd6f7200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690639efd6f7290602401602060405180830381865afa15801561172a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174e9190613d86565b60ff16610120820152602080820151604080517f313ce567000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169263313ce567926004808401938290030181865afa1580156117c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e89190613d86565b81610100019060ff16908160ff1681525050806020015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015611849573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261188f9190810190613da9565b815260208101516040517f2a17bf6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690632a17bf6090602401602060405180830381865afa158015611903573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192791906139fe565b73ffffffffffffffffffffffffffffffffffffffff16604080830182905280517f313ce567000000000000000000000000000000000000000000000000000000008152905163313ce567916004808201926020929091908290030181865afa158015611997573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119bb9190613d86565b81610140019060ff16908160ff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a409190613e52565b60e082015282518190849084908110611a5b57611a5b613b75565b60200260200101819052505080611a7190613e6b565b9050611543565b505b60405180606001604052808a610120015173ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001828152508a60600181905250505050505050505050508080611ae390613e6b565b91505061025a565b50949350505050565b606060008373ffffffffffffffffffffffffffffffffffffffff1663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6791906139fe565b905060008173ffffffffffffffffffffffffffffffffffffffff1663d1946dbc6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611bb6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611bfc9190810190613ac3565b9050600073ffffffffffffffffffffffffffffffffffffffff8516611c22576000611c25565b81515b67ffffffffffffffff811115611c3d57611c3d613a1b565b604051908082528060200260200182016040528015611c7657816020015b611c63613417565b815260200190600190039081611c5b5790505b50905060005b825181101561340d5760008473ffffffffffffffffffffffffffffffffffffffff166335ea6a75858481518110611cb557611cb5613b75565b60200260200101516040518263ffffffff1660e01b8152600401611cf5919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6101e060405180830381865afa158015611d13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d379190613c2d565b9050838281518110611d4b57611d4b613b75565b6020026020010151838381518110611d6557611d65613b75565b60200260200101516000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600081610100015173ffffffffffffffffffffffffffffffffffffffff166375d264136040518163ffffffff1660e01b8152600401602060405180830381865afa158015611df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1991906139fe565b905073ffffffffffffffffffffffffffffffffffffffff8116156124ee576101008201516040517f6657732f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600091831690636657732f90602401600060405180830381865afa158015611eac573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611ef29190810190613ac3565b90506000815167ffffffffffffffff811115611f1057611f10613a1b565b604051908082528060200260200182016040528015611f9e57816020015b60408051610100810182526060808252600060208084018290529383018190529082018190526080820181905260a0820181905260c0820181905260e082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201910181611f2e5790505b50905060005b825181101561247d576040805161010081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081019190915283828151811061200057612000613b75565b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff908116604080840182905261010089015190517f533f542a0000000000000000000000000000000000000000000000000000000081528f84166004820152908316602482015260448101919091529086169063533f542a90606401602060405180830381865afa158015612098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120bc9190613e52565b608082015260408082015190517fb022418c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8e8116600483015291821660248201529086169063b022418c90604401602060405180830381865afa15801561213b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215f9190613e52565b816060018181525050806040015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156121b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121db9190613d86565b8160e0019060ff16908160ff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561223b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526122819190810190613da9565b815260408082015190517f2a17bf6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690632a17bf6090602401602060405180830381865afa1580156122f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061231991906139fe565b73ffffffffffffffffffffffffffffffffffffffff166020808301829052604080517f313ce567000000000000000000000000000000000000000000000000000000008152905163313ce567926004808401939192918290030181865afa158015612388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ac9190613d86565b60ff1660c0820152602080820151604080517f50d25bcd000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216926350d25bcd926004808401938290030181865afa158015612421573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124459190613e52565b60a08201528251819084908490811061246057612460613b75565b6020026020010181905250508061247690613e6b565b9050611fa4565b50604051806060016040528085610100015173ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001828152508686815181106124dc576124dc613b75565b60200260200101516020018190525050505b600082610140015173ffffffffffffffffffffffffffffffffffffffff166375d264136040518163ffffffff1660e01b8152600401602060405180830381865afa158015612540573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061256491906139fe565b905073ffffffffffffffffffffffffffffffffffffffff811615612c6e576101408301516040517f6657732f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600091831690636657732f90602401600060405180830381865afa1580156125f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261263d9190810190613ac3565b90506000815167ffffffffffffffff81111561265b5761265b613a1b565b6040519080825280602002602001820160405280156126e957816020015b60408051610100810182526060808252600060208084018290529383018190529082018190526080820181905260a0820181905260c0820181905260e082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816126795790505b50905060005b8251811015612bfd576040805161010081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e081019190915283828151811061274b5761274b613b75565b6020026020010151816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508473ffffffffffffffffffffffffffffffffffffffff1663533f542a8e89610140015184604001516040518463ffffffff1660e01b81526004016127fb9392919073ffffffffffffffffffffffffffffffffffffffff93841681529183166020830152909116604082015260600190565b602060405180830381865afa158015612818573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061283c9190613e52565b608082015260408082015190517fb022418c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8f8116600483015291821660248201529086169063b022418c90604401602060405180830381865afa1580156128bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128df9190613e52565b816060018181525050806040015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015612937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061295b9190613d86565b8160e0019060ff16908160ff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156129bb573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052612a019190810190613da9565b815260408082015190517f2a17bf6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690632a17bf6090602401602060405180830381865afa158015612a75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a9991906139fe565b73ffffffffffffffffffffffffffffffffffffffff166020808301829052604080517f313ce567000000000000000000000000000000000000000000000000000000008152905163313ce567926004808401939192918290030181865afa158015612b08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b2c9190613d86565b60ff1660c0820152602080820151604080517f50d25bcd000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216926350d25bcd926004808401938290030181865afa158015612ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bc59190613e52565b60a082015282518190849084908110612be057612be0613b75565b60200260200101819052505080612bf690613e6b565b90506126ef565b50604051806060016040528086610140015173ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200182815250878781518110612c5c57612c5c613b75565b60200260200101516040018190525050505b600083610120015173ffffffffffffffffffffffffffffffffffffffff166375d264136040518163ffffffff1660e01b8152600401602060405180830381865afa158015612cc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ce491906139fe565b905073ffffffffffffffffffffffffffffffffffffffff8116156133f6576101208401516040517f6657732f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600091831690636657732f90602401600060405180830381865afa158015612d77573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052612dbd9190810190613ac3565b90506000815167ffffffffffffffff811115612ddb57612ddb613a1b565b604051908082528060200260200182016040528015612e6957816020015b60408051610100810182526060808252600060208084018290529383018190529082018190526080820181905260a0820181905260c0820181905260e082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201910181612df95790505b50905060005b8251811015613385576040805161010081018252606080825260006020830181905292820183905281018290526080810182905260a0810182905260c0810182905260e0810191909152838281518110612ecb57612ecb613b75565b6020026020010151816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508473ffffffffffffffffffffffffffffffffffffffff1663533f542a8f8a610120015184604001516040518463ffffffff1660e01b8152600401612f7b9392919073ffffffffffffffffffffffffffffffffffffffff93841681529183166020830152909116604082015260600190565b602060405180830381865afa158015612f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fbc9190613e52565b8160800181815250508473ffffffffffffffffffffffffffffffffffffffff1663b022418c8f83604001516040518363ffffffff1660e01b815260040161302692919073ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b602060405180830381865afa158015613043573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130679190613e52565b816060018181525050806040015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156130bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130e39190613d86565b8160e0019060ff16908160ff1681525050806040015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015613143573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526131899190810190613da9565b815260408082015190517f2a17bf6000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015290861690632a17bf6090602401602060405180830381865afa1580156131fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061322191906139fe565b73ffffffffffffffffffffffffffffffffffffffff166020808301829052604080517f313ce567000000000000000000000000000000000000000000000000000000008152905163313ce567926004808401939192918290030181865afa158015613290573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132b49190613d86565b60ff1660c0820152602080820151604080517f50d25bcd000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216926350d25bcd926004808401938290030181865afa158015613329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061334d9190613e52565b60a08201528251819084908490811061336857613368613b75565b6020026020010181905250508061337e90613e6b565b9050612e6f565b50604051806060016040528087610120015173ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001828152508888815181106133e4576133e4613b75565b60200260200101516060018190525050505b50505050808061340590613e6b565b915050611c7c565b5095945050505050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200161348f6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b81526040805160608082018352600080835260208084018290528385018390528086019390935283518083018552818152928301528183015291015290565b73ffffffffffffffffffffffffffffffffffffffff811681146134f057600080fd5b50565b6000806040838503121561350657600080fd5b8235613511816134ce565b91506020830135613521816134ce565b809150509250929050565b60005b8381101561354757818101518382015260200161352f565b83811115613556576000848401525b50505050565b6000815180845261357481602086016020860161352c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000606080840173ffffffffffffffffffffffffffffffffffffffff8085511686526020818187015116818801526040915081860151848389015283815180865260809550858a019150858160051b8b0101848401935060005b828110156136f7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808c8303018452845161016081518185526136458286018261355c565b9150508782015161366d8986018273ffffffffffffffffffffffffffffffffffffffff169052565b508882015173ffffffffffffffffffffffffffffffffffffffff16848a01528a8201518b850152898201518a85015260a0808301519085015260c0808301519085015260e080830151908501526101008083015160ff9081169186019190915261012080840151821690860152610140928301511691909301529385019392850192600101613600565b509a9950505050505050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156137b05782840389528151608073ffffffffffffffffffffffffffffffffffffffff8251168652868201518188880152613764828801826135a6565b9150506040808301518783038289015261377e83826135a6565b925050506060808301519250868203818801525061379c81836135a6565b9a87019a9550505090840190600101613724565b5091979650505050505050565b6000606080840173ffffffffffffffffffffffffffffffffffffffff80855116865260208181870151168188015260408087015185828a015284815180875260809650868b019150868160051b8c0101858401935060005b828110156138c3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808d83030184528451610100815181855261385a8286018261355c565b91505089898301511689850152898883015116888501528b8201518c8501528a8201518b85015260a080830151818601525060c0808301516138a08287018260ff169052565b505060e09182015160ff1693909101929092529386019392860192600101613815565b509b9a5050505050505050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156137b05782840389528151608073ffffffffffffffffffffffffffffffffffffffff8251168652868201518188880152613931828801826137bd565b9150506040808301518783038289015261394b83826137bd565b925050506060808301519250868203818801525061396981836137bd565b9a87019a95505050908401906001016138f1565b6040815260006139906040830185613706565b82810360208401526139a281856138d3565b95945050505050565b6020815260006100dd60208301846138d3565b6000602082840312156139d057600080fd5b81356100dd816134ce565b6020815260006100dd6020830184613706565b80516139f9816134ce565b919050565b600060208284031215613a1057600080fd5b81516100dd816134ce565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715613a6e57613a6e613a1b565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613abb57613abb613a1b565b604052919050565b60006020808385031215613ad657600080fd5b825167ffffffffffffffff80821115613aee57600080fd5b818501915085601f830112613b0257600080fd5b815181811115613b1457613b14613a1b565b8060051b9150613b25848301613a74565b8181529183018401918481019088841115613b3f57600080fd5b938501935b83851015613b695784519250613b59836134ce565b8282529385019390850190613b44565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215613bb657600080fd5b6040516020810181811067ffffffffffffffff82111715613bd957613bd9613a1b565b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff811681146139f957600080fd5b805164ffffffffff811681146139f957600080fd5b805161ffff811681146139f957600080fd5b60006101e08284031215613c4057600080fd5b613c48613a4a565b613c528484613ba4565b8152613c6060208401613be6565b6020820152613c7160408401613be6565b6040820152613c8260608401613be6565b6060820152613c9360808401613be6565b6080820152613ca460a08401613be6565b60a0820152613cb560c08401613c06565b60c0820152613cc660e08401613c1b565b60e0820152610100613cd98185016139ee565b90820152610120613ceb8482016139ee565b90820152610140613cfd8482016139ee565b90820152610160613d0f8482016139ee565b90820152610180613d21848201613be6565b908201526101a0613d33848201613be6565b908201526101c0613d45848201613be6565b908201529392505050565b60008060008060808587031215613d6657600080fd5b505082516020840151604085015160609095015191969095509092509050565b600060208284031215613d9857600080fd5b815160ff811681146100dd57600080fd5b600060208284031215613dbb57600080fd5b815167ffffffffffffffff80821115613dd357600080fd5b818401915084601f830112613de757600080fd5b815181811115613df957613df9613a1b565b613e2a60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613a74565b9150808252856020828501011115613e4157600080fd5b611aeb81602084016020860161352c565b600060208284031215613e6457600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613ec4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea264697066735822122078953394098802ad5b3c224b389bc8c14f360127f918ad8d64d07d4ef5667cfa64736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): UiIncentiveDataProviderV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UiIncentiveDataProviderV3;
}
export {};
