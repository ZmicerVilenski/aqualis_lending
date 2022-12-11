import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface PoolAddressesProviderRegistryInterface extends utils.Interface {
    functions: {
        "getAddressesProviderAddressById(uint256)": FunctionFragment;
        "getAddressesProviderIdByAddress(address)": FunctionFragment;
        "getAddressesProvidersList()": FunctionFragment;
        "owner()": FunctionFragment;
        "registerAddressesProvider(address,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unregisterAddressesProvider(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAddressesProviderAddressById" | "getAddressesProviderIdByAddress" | "getAddressesProvidersList" | "owner" | "registerAddressesProvider" | "renounceOwnership" | "transferOwnership" | "unregisterAddressesProvider"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAddressesProviderAddressById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAddressesProviderIdByAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAddressesProvidersList", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerAddressesProvider", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unregisterAddressesProvider", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getAddressesProviderAddressById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressesProviderIdByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressesProvidersList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterAddressesProvider", data: BytesLike): Result;
    events: {
        "AddressesProviderRegistered(address,uint256)": EventFragment;
        "AddressesProviderUnregistered(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressesProviderRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressesProviderUnregistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface AddressesProviderRegisteredEventObject {
    addressesProvider: string;
    id: BigNumber;
}
export type AddressesProviderRegisteredEvent = TypedEvent<[
    string,
    BigNumber
], AddressesProviderRegisteredEventObject>;
export type AddressesProviderRegisteredEventFilter = TypedEventFilter<AddressesProviderRegisteredEvent>;
export interface AddressesProviderUnregisteredEventObject {
    addressesProvider: string;
    id: BigNumber;
}
export type AddressesProviderUnregisteredEvent = TypedEvent<[
    string,
    BigNumber
], AddressesProviderUnregisteredEventObject>;
export type AddressesProviderUnregisteredEventFilter = TypedEventFilter<AddressesProviderUnregisteredEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PoolAddressesProviderRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolAddressesProviderRegistryInterface;
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
        getAddressesProviderAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getAddressesProviderIdByAddress(addressesProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAddressesProvidersList(overrides?: CallOverrides): Promise<[string[]]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        registerAddressesProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unregisterAddressesProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAddressesProviderAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getAddressesProviderIdByAddress(addressesProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;
    owner(overrides?: CallOverrides): Promise<string>;
    registerAddressesProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unregisterAddressesProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAddressesProviderAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getAddressesProviderIdByAddress(addressesProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;
        owner(overrides?: CallOverrides): Promise<string>;
        registerAddressesProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unregisterAddressesProvider(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressesProviderRegistered(address,uint256)"(addressesProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressesProviderRegisteredEventFilter;
        AddressesProviderRegistered(addressesProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressesProviderRegisteredEventFilter;
        "AddressesProviderUnregistered(address,uint256)"(addressesProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressesProviderUnregisteredEventFilter;
        AddressesProviderUnregistered(addressesProvider?: PromiseOrValue<string> | null, id?: PromiseOrValue<BigNumberish> | null): AddressesProviderUnregisteredEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        getAddressesProviderAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressesProviderIdByAddress(addressesProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAddressesProvidersList(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        registerAddressesProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unregisterAddressesProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddressesProviderAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressesProviderIdByAddress(addressesProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddressesProvidersList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAddressesProvider(provider: PromiseOrValue<string>, id: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unregisterAddressesProvider(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}