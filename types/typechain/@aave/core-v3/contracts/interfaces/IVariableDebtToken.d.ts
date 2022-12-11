import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IVariableDebtTokenInterface extends utils.Interface {
    functions: {
        "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
        "burn(address,uint256,uint256)": FunctionFragment;
        "getPreviousIndex(address)": FunctionFragment;
        "getScaledUserBalanceAndSupply(address)": FunctionFragment;
        "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "scaledBalanceOf(address)": FunctionFragment;
        "scaledTotalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "UNDERLYING_ASSET_ADDRESS" | "burn" | "getPreviousIndex" | "getScaledUserBalanceAndSupply" | "initialize" | "mint" | "scaledBalanceOf" | "scaledTotalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getScaledUserBalanceAndSupply", values: [PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "scaledBalanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "scaledTotalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScaledUserBalanceAndSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledTotalSupply", data: BytesLike): Result;
    events: {
        "Burn(address,address,uint256,uint256,uint256)": EventFragment;
        "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
        "Mint(address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}
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
export interface IVariableDebtToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVariableDebtTokenInterface;
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
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(pool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
    burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    initialize(pool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        initialize(pool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Burn(address,address,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): BurnEventFilter;
        Burn(from?: PromiseOrValue<string> | null, target?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): BurnEventFilter;
        "Initialized(address,address,address,uint8,string,string,bytes)"(underlyingAsset?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        Initialized(underlyingAsset?: PromiseOrValue<string> | null, pool?: PromiseOrValue<string> | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        "Mint(address,address,uint256,uint256,uint256)"(caller?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): MintEventFilter;
        Mint(caller?: PromiseOrValue<string> | null, onBehalfOf?: PromiseOrValue<string> | null, value?: null, balanceIncrease?: null, index?: null): MintEventFilter;
    };
    estimateGas: {
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(pool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(from: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getPreviousIndex(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScaledUserBalanceAndSupply(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(pool: PromiseOrValue<string>, underlyingAsset: PromiseOrValue<string>, incentivesController: PromiseOrValue<string>, debtTokenDecimals: PromiseOrValue<BigNumberish>, debtTokenName: PromiseOrValue<string>, debtTokenSymbol: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mint(user: PromiseOrValue<string>, onBehalfOf: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scaledBalanceOf(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
