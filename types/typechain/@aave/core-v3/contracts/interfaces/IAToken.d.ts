import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IATokenInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "RESERVE_TREASURY_ADDRESS()": FunctionFragment;
        "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(address,address,uint256,uint256)": FunctionFragment;
        "getPreviousIndex(address)": FunctionFragment;
        "getScaledUserBalanceAndSupply(address)": FunctionFragment;
        "handleRepayment(address,uint256)": FunctionFragment;
        "initialize(address,address,address,address,uint8,string,string,bytes)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "mintToTreasury(uint256,uint256)": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "rescueTokens(address,address,uint256)": FunctionFragment;
        "scaledBalanceOf(address)": FunctionFragment;
        "scaledTotalSupply()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOnLiquidation(address,address,uint256)": FunctionFragment;
        "transferUnderlyingTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "RESERVE_TREASURY_ADDRESS" | "UNDERLYING_ASSET_ADDRESS" | "allowance" | "approve" | "balanceOf" | "burn" | "getPreviousIndex" | "getScaledUserBalanceAndSupply" | "handleRepayment" | "initialize" | "mint" | "mintToTreasury" | "nonces" | "permit" | "rescueTokens" | "scaledBalanceOf" | "scaledTotalSupply" | "totalSupply" | "transfer" | "transferFrom" | "transferOnLiquidation" | "transferUnderlyingTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESERVE_TREASURY_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getScaledUserBalanceAndSupply", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "handleRepayment", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
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
    encodeFunctionData(functionFragment: "mintToTreasury", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "scaledBalanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "scaledTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOnLiquidation", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferUnderlyingTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESERVE_TREASURY_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScaledUserBalanceAndSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleRepayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOnLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferUnderlyingTo", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "BalanceTransfer(address,address,uint256,uint256)": EventFragment;
        "Burn(address,address,uint256,uint256,uint256)": EventFragment;
        "Initialized(address,address,address,address,uint8,string,string,bytes)": EventFragment;
        "Mint(address,address,uint256,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BalanceTransfer"): EventFragment;
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
export interface BalanceTransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
    index: BigNumber;
}
export type BalanceTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BalanceTransferEventObject>;
export type BalanceTransferEventFilter = TypedEventFilter<BalanceTransferEvent>;
export interface BurnEventObject {
    from: string;
    target: string;
    value: BigNumber;
    balanceIncrease: BigNumber;
    index: BigNumber;
}
export type BurnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface InitializedEventObject {
    underlyingAsset: string;
    pool: string;
    treasury: string;
    incentivesController: string;
    aTokenDecimals: number;
    aTokenName: string;
    aTokenSymbol: string;
    params: string;
}
export type InitializedEvent = TypedEvent<[
    string,
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
    caller: string;
    onBehalfOf: string;
    value: BigNumber;
    balanceIncrease: BigNumber;
    index: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    string,
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
export interface IAToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IATokenInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        RESERVE_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(from: PromiseOrValue<string>, receiverOfUnderlying: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        handleRepayment(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(pool: PromiseOrValue<string>, treasury: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, aTokenDecimals: PromiseOrValue<BigNumberish>, aTokenName: PromiseOrValue<string>, aTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(caller: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintToTreasury(amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOnLiquidation(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferUnderlyingTo(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    RESERVE_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<string>;
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(from: PromiseOrValue<string>, receiverOfUnderlying: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    handleRepayment(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(pool: PromiseOrValue<string>, treasury: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, aTokenDecimals: PromiseOrValue<BigNumberish>, aTokenName: PromiseOrValue<string>, aTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(caller: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintToTreasury(amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOnLiquidation(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferUnderlyingTo(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        RESERVE_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<string>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: PromiseOrValue<string>, receiverOfUnderlying: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        handleRepayment(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(pool: PromiseOrValue<string>, treasury: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, aTokenDecimals: PromiseOrValue<BigNumberish>, aTokenName: PromiseOrValue<string>, aTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mint(caller: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        mintToTreasury(amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOnLiquidation(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferUnderlyingTo(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "BalanceTransfer(address,address,uint256,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null, index?: null): BalanceTransferEventFilter;
        BalanceTransfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null, index?: null): BalanceTransferEventFilter;
        "Burn(address,address,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): BurnEventFilter;
        Burn(from?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): BurnEventFilter;
        "Initialized(address,address,address,address,uint8,string,string,bytes)"(underlyingAsset?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, treasury?: null, incentivesController?: null, aTokenDecimals?: null, aTokenName?: null, aTokenSymbol?: null, params?: null): InitializedEventFilter;
        Initialized(underlyingAsset?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, treasury?: null, incentivesController?: null, aTokenDecimals?: null, aTokenName?: null, aTokenSymbol?: null, params?: null): InitializedEventFilter;
        "Mint(address,address,uint256,uint256,uint256)"(caller?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): MintEventFilter;
        Mint(caller?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): MintEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        RESERVE_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: PromiseOrValue<string>, receiverOfUnderlying: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        handleRepayment(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(pool: PromiseOrValue<string>, treasury: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, aTokenDecimals: PromiseOrValue<BigNumberish>, aTokenName: PromiseOrValue<string>, aTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(caller: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintToTreasury(amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOnLiquidation(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferUnderlyingTo(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESERVE_TREASURY_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(from: PromiseOrValue<string>, receiverOfUnderlying: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleRepayment(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(pool: PromiseOrValue<string>, treasury: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, aTokenDecimals: PromiseOrValue<BigNumberish>, aTokenName: PromiseOrValue<string>, aTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(caller: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintToTreasury(amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nonces(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOnLiquidation(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferUnderlyingTo(user: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}