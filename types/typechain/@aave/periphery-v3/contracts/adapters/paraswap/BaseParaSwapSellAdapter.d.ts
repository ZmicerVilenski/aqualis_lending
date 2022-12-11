import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface BaseParaSwapSellAdapterInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "AUGUSTUS_REGISTRY()": FunctionFragment;
        "MAX_SLIPPAGE_PERCENT()": FunctionFragment;
        "ORACLE()": FunctionFragment;
        "POOL()": FunctionFragment;
        "executeOperation(address,uint256,uint256,address,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rescueTokens(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "AUGUSTUS_REGISTRY" | "MAX_SLIPPAGE_PERCENT" | "ORACLE" | "POOL" | "executeOperation" | "owner" | "renounceOwnership" | "rescueTokens" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "AUGUSTUS_REGISTRY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_SLIPPAGE_PERCENT", values?: undefined): string;
    encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeOperation", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AUGUSTUS_REGISTRY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_SLIPPAGE_PERCENT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Bought(address,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Swapped(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Bought"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swapped"): EventFragment;
}
export interface BoughtEventObject {
    fromAsset: string;
    toAsset: string;
    amountSold: BigNumber;
    receivedAmount: BigNumber;
}
export type BoughtEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BoughtEventObject>;
export type BoughtEventFilter = TypedEventFilter<BoughtEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SwappedEventObject {
    fromAsset: string;
    toAsset: string;
    fromAmount: BigNumber;
    receivedAmount: BigNumber;
}
export type SwappedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], SwappedEventObject>;
export type SwappedEventFilter = TypedEventFilter<SwappedEvent>;
export interface BaseParaSwapSellAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseParaSwapSellAdapterInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<[string]>;
        MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;
        ORACLE(overrides?: CallOverrides): Promise<[string]>;
        POOL(overrides?: CallOverrides): Promise<[string]>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, initiator: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rescueTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<string>;
    MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
    ORACLE(overrides?: CallOverrides): Promise<string>;
    POOL(overrides?: CallOverrides): Promise<string>;
    executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, initiator: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rescueTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<string>;
        MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
        ORACLE(overrides?: CallOverrides): Promise<string>;
        POOL(overrides?: CallOverrides): Promise<string>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, initiator: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rescueTokens(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Bought(address,address,uint256,uint256)"(fromAsset?: PromiseOrValue<string> | null, toAsset?: PromiseOrValue<string> | null, amountSold?: null, receivedAmount?: null): BoughtEventFilter;
        Bought(fromAsset?: PromiseOrValue<string> | null, toAsset?: PromiseOrValue<string> | null, amountSold?: null, receivedAmount?: null): BoughtEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Swapped(address,address,uint256,uint256)"(fromAsset?: PromiseOrValue<string> | null, toAsset?: PromiseOrValue<string> | null, fromAmount?: null, receivedAmount?: null): SwappedEventFilter;
        Swapped(fromAsset?: PromiseOrValue<string> | null, toAsset?: PromiseOrValue<string> | null, fromAmount?: null, receivedAmount?: null): SwappedEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
        ORACLE(overrides?: CallOverrides): Promise<BigNumber>;
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, initiator: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rescueTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AUGUSTUS_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_SLIPPAGE_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeOperation(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, premium: PromiseOrValue<BigNumberish>, initiator: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rescueTokens(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
