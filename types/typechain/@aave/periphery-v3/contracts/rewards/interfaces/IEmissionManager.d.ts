import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export declare namespace RewardsDataTypes {
    type RewardsConfigInputStruct = {
        emissionPerSecond: PromiseOrValue<BigNumberish>;
        totalSupply: PromiseOrValue<BigNumberish>;
        distributionEnd: PromiseOrValue<BigNumberish>;
        asset: PromiseOrValue<string>;
        reward: PromiseOrValue<string>;
        transferStrategy: PromiseOrValue<string>;
        rewardOracle: PromiseOrValue<string>;
    };
    type RewardsConfigInputStructOutput = [
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string
    ] & {
        emissionPerSecond: BigNumber;
        totalSupply: BigNumber;
        distributionEnd: number;
        asset: string;
        reward: string;
        transferStrategy: string;
        rewardOracle: string;
    };
}
export interface IEmissionManagerInterface extends utils.Interface {
    functions: {
        "configureAssets((uint88,uint256,uint32,address,address,address,address)[])": FunctionFragment;
        "getEmissionAdmin(address)": FunctionFragment;
        "getRewardsController()": FunctionFragment;
        "setClaimer(address,address)": FunctionFragment;
        "setDistributionEnd(address,address,uint32)": FunctionFragment;
        "setEmissionAdmin(address,address)": FunctionFragment;
        "setEmissionPerSecond(address,address[],uint88[])": FunctionFragment;
        "setRewardOracle(address,address)": FunctionFragment;
        "setRewardsController(address)": FunctionFragment;
        "setTransferStrategy(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "configureAssets" | "getEmissionAdmin" | "getRewardsController" | "setClaimer" | "setDistributionEnd" | "setEmissionAdmin" | "setEmissionPerSecond" | "setRewardOracle" | "setRewardsController" | "setTransferStrategy"): FunctionFragment;
    encodeFunctionData(functionFragment: "configureAssets", values: [RewardsDataTypes.RewardsConfigInputStruct[]]): string;
    encodeFunctionData(functionFragment: "getEmissionAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsController", values?: undefined): string;
    encodeFunctionData(functionFragment: "setClaimer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDistributionEnd", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setEmissionAdmin", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setEmissionPerSecond", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setRewardOracle", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRewardsController", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTransferStrategy", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "configureAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEmissionAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDistributionEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmissionAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmissionPerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardsController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransferStrategy", data: BytesLike): Result;
    events: {
        "EmissionAdminUpdated(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EmissionAdminUpdated"): EventFragment;
}
export interface EmissionAdminUpdatedEventObject {
    reward: string;
    oldAdmin: string;
    newAdmin: string;
}
export type EmissionAdminUpdatedEvent = TypedEvent<[
    string,
    string,
    string
], EmissionAdminUpdatedEventObject>;
export type EmissionAdminUpdatedEventFilter = TypedEventFilter<EmissionAdminUpdatedEvent>;
export interface IEmissionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEmissionManagerInterface;
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
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getEmissionAdmin(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getRewardsController(overrides?: CallOverrides): Promise<[string]>;
        setClaimer(user: PromiseOrValue<string>, claimer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmissionAdmin(reward: PromiseOrValue<string>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRewardsController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getEmissionAdmin(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getRewardsController(overrides?: CallOverrides): Promise<string>;
    setClaimer(user: PromiseOrValue<string>, claimer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmissionAdmin(reward: PromiseOrValue<string>, admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRewardsController(controller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: CallOverrides): Promise<void>;
        getEmissionAdmin(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getRewardsController(overrides?: CallOverrides): Promise<string>;
        setClaimer(user: PromiseOrValue<string>, claimer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEmissionAdmin(reward: PromiseOrValue<string>, admin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRewardsController(controller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EmissionAdminUpdated(address,address,address)"(reward?: PromiseOrValue<string> | null, oldAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): EmissionAdminUpdatedEventFilter;
        EmissionAdminUpdated(reward?: PromiseOrValue<string> | null, oldAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): EmissionAdminUpdatedEventFilter;
    };
    estimateGas: {
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getEmissionAdmin(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsController(overrides?: CallOverrides): Promise<BigNumber>;
        setClaimer(user: PromiseOrValue<string>, claimer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmissionAdmin(reward: PromiseOrValue<string>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRewardsController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getEmissionAdmin(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsController(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClaimer(user: PromiseOrValue<string>, claimer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmissionAdmin(reward: PromiseOrValue<string>, admin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRewardsController(controller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}