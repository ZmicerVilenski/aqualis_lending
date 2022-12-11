import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface MockStableDebtTokenInterface extends utils.Interface {
    functions: {
        "DEBT_TOKEN_REVISION()": FunctionFragment;
        "DELEGATION_WITH_SIG_TYPEHASH()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "EIP712_REVISION()": FunctionFragment;
        "POOL()": FunctionFragment;
        "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "approveDelegation(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "delegationWithSig(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "getAverageStableRate()": FunctionFragment;
        "getIncentivesController()": FunctionFragment;
        "getSupplyData()": FunctionFragment;
        "getTotalSupplyAndAvgRate()": FunctionFragment;
        "getTotalSupplyLastUpdated()": FunctionFragment;
        "getUserLastUpdated(address)": FunctionFragment;
        "getUserStableRate(address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "principalBalanceOf(address)": FunctionFragment;
        "setIncentivesController(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEBT_TOKEN_REVISION" | "DELEGATION_WITH_SIG_TYPEHASH" | "DOMAIN_SEPARATOR" | "EIP712_REVISION" | "POOL" | "UNDERLYING_ASSET_ADDRESS" | "allowance" | "approve" | "approveDelegation" | "balanceOf" | "borrowAllowance" | "burn" | "decimals" | "decreaseAllowance" | "delegationWithSig" | "getAverageStableRate" | "getIncentivesController" | "getSupplyData" | "getTotalSupplyAndAvgRate" | "getTotalSupplyLastUpdated" | "getUserLastUpdated" | "getUserStableRate" | "increaseAllowance" | "initialize" | "mint" | "name" | "nonces" | "principalBalanceOf" | "setIncentivesController" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEBT_TOKEN_REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATION_WITH_SIG_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "EIP712_REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "approveDelegation", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "delegationWithSig", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getAverageStableRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIncentivesController", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupplyData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupplyAndAvgRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupplyLastUpdated", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserLastUpdated", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserStableRate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "mint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "principalBalanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIncentivesController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "DEBT_TOKEN_REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATION_WITH_SIG_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EIP712_REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationWithSig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAverageStableRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncentivesController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyAndAvgRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserStableRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "principalBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIncentivesController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "BorrowAllowanceDelegated(address,address,address,uint256)": EventFragment;
        "Burn(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
        "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BorrowAllowanceDelegatedEventObject {
    fromUser: string;
    toUser: string;
    asset: string;
    amount: BigNumber;
}
export type BorrowAllowanceDelegatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], BorrowAllowanceDelegatedEventObject>;
export type BorrowAllowanceDelegatedEventFilter = TypedEventFilter<BorrowAllowanceDelegatedEvent>;
export interface BurnEventObject {
    from: string;
    amount: BigNumber;
    currentBalance: BigNumber;
    balanceIncrease: BigNumber;
    avgStableRate: BigNumber;
    newTotalSupply: BigNumber;
}
export type BurnEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface InitializedEventObject {
    underlyingAsset: string;
    pool: string;
    incentivesController: string;
    debtTokenDecimals: number;
    debtTokenName: string;
    debtTokenSymbol: string;
    params: string;
}
export type InitializedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string,
    string,
    string
], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MintEventObject {
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    currentBalance: BigNumber;
    balanceIncrease: BigNumber;
    newRate: BigNumber;
    avgStableRate: BigNumber;
    newTotalSupply: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface MockStableDebtToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockStableDebtTokenInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<[string]>;
        POOL(overrides?: CallOverrides): Promise<[string]>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAverageStableRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getIncentivesController(overrides?: CallOverrides): Promise<[string]>;
        getSupplyData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, number]>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<[number]>;
        getUserLastUpdated(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        getUserStableRate(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(initializingPool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        principalBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setIncentivesController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
    DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    EIP712_REVISION(overrides?: CallOverrides): Promise<string>;
    POOL(overrides?: CallOverrides): Promise<string>;
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
    allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;
    getIncentivesController(overrides?: CallOverrides): Promise<string>;
    getSupplyData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, number]>;
    getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<number>;
    getUserLastUpdated(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    getUserStableRate(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(initializingPool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    principalBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    setIncentivesController(controller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<string>;
        POOL(overrides?: CallOverrides): Promise<string>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;
        getIncentivesController(overrides?: CallOverrides): Promise<string>;
        getSupplyData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, number]>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<number>;
        getUserLastUpdated(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        getUserStableRate(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(initializingPool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber, BigNumber]>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        principalBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setIncentivesController(controller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "BorrowAllowanceDelegated(address,address,address,uint256)"(fromUser?: PromiseOrValue<string> | null, toUser?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
        BorrowAllowanceDelegated(fromUser?: PromiseOrValue<string> | null, toUser?: PromiseOrValue<string> | null, asset?: PromiseOrValue<string> | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
        "Burn(address,uint256,uint256,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, amount?: null, currentBalance?: null, balanceIncrease?: null, avgStableRate?: null, newTotalSupply?: null): BurnEventFilter;
        Burn(from?: PromiseOrValue<string> | null, amount?: null, currentBalance?: null, balanceIncrease?: null, avgStableRate?: null, newTotalSupply?: null): BurnEventFilter;
        "Initialized(address,address,address,uint8,string,string,bytes)"(underlyingAsset?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        Initialized(underlyingAsset?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(user?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, currentBalance?: null, balanceIncrease?: null, newRate?: null, avgStableRate?: null, newTotalSupply?: null): MintEventFilter;
        Mint(user?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, currentBalance?: null, balanceIncrease?: null, newRate?: null, avgStableRate?: null, newTotalSupply?: null): MintEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;
        getIncentivesController(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyData(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<BigNumber>;
        getUserLastUpdated(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserStableRate(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(initializingPool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        principalBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setIncentivesController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEBT_TOKEN_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DELEGATION_WITH_SIG_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EIP712_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveDelegation(delegatee: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAllowance(fromUser: PromiseOrValue<string>, toUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegationWithSig(delegator: PromiseOrValue<string>, delegatee: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAverageStableRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIncentivesController(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserLastUpdated(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserStableRate(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(initializingPool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        principalBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setIncentivesController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
