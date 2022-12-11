import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
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
export interface RewardsControllerInterface extends utils.Interface {
    functions: {
        "EMISSION_MANAGER()": FunctionFragment;
        "REVISION()": FunctionFragment;
        "claimAllRewards(address[],address)": FunctionFragment;
        "claimAllRewardsOnBehalf(address[],address,address)": FunctionFragment;
        "claimAllRewardsToSelf(address[])": FunctionFragment;
        "claimRewards(address[],uint256,address,address)": FunctionFragment;
        "claimRewardsOnBehalf(address[],uint256,address,address,address)": FunctionFragment;
        "claimRewardsToSelf(address[],uint256,address)": FunctionFragment;
        "configureAssets((uint88,uint256,uint32,address,address,address,address)[])": FunctionFragment;
        "getAllUserRewards(address[],address)": FunctionFragment;
        "getAssetDecimals(address)": FunctionFragment;
        "getAssetIndex(address,address)": FunctionFragment;
        "getClaimer(address)": FunctionFragment;
        "getDistributionEnd(address,address)": FunctionFragment;
        "getRewardOracle(address)": FunctionFragment;
        "getRewardsByAsset(address)": FunctionFragment;
        "getRewardsData(address,address)": FunctionFragment;
        "getRewardsList()": FunctionFragment;
        "getTransferStrategy(address)": FunctionFragment;
        "getUserAccruedRewards(address,address)": FunctionFragment;
        "getUserAssetIndex(address,address,address)": FunctionFragment;
        "getUserRewards(address[],address,address)": FunctionFragment;
        "handleAction(address,uint256,uint256)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "setClaimer(address,address)": FunctionFragment;
        "setDistributionEnd(address,address,uint32)": FunctionFragment;
        "setEmissionPerSecond(address,address[],uint88[])": FunctionFragment;
        "setRewardOracle(address,address)": FunctionFragment;
        "setTransferStrategy(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "EMISSION_MANAGER" | "REVISION" | "claimAllRewards" | "claimAllRewardsOnBehalf" | "claimAllRewardsToSelf" | "claimRewards" | "claimRewardsOnBehalf" | "claimRewardsToSelf" | "configureAssets" | "getAllUserRewards" | "getAssetDecimals" | "getAssetIndex" | "getClaimer" | "getDistributionEnd" | "getRewardOracle" | "getRewardsByAsset" | "getRewardsData" | "getRewardsList" | "getTransferStrategy" | "getUserAccruedRewards" | "getUserAssetIndex" | "getUserRewards" | "handleAction" | "initialize" | "setClaimer" | "setDistributionEnd" | "setEmissionPerSecond" | "setRewardOracle" | "setTransferStrategy"): FunctionFragment;
    encodeFunctionData(functionFragment: "EMISSION_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimAllRewards", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimAllRewardsOnBehalf", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "claimAllRewardsToSelf", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "claimRewardsOnBehalf", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "claimRewardsToSelf", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "configureAssets", values: [RewardsDataTypes.RewardsConfigInputStruct[]]): string;
    encodeFunctionData(functionFragment: "getAllUserRewards", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAssetDecimals", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAssetIndex", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getClaimer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDistributionEnd", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardOracle", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsByAsset", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRewardsList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransferStrategy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserAccruedRewards", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserAssetIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getUserRewards", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "handleAction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setClaimer", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDistributionEnd", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setEmissionPerSecond", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setRewardOracle", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTransferStrategy", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "EMISSION_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllRewardsOnBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllRewardsToSelf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsOnBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsToSelf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllUserRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDistributionEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsByAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransferStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAssetIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDistributionEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmissionPerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTransferStrategy", data: BytesLike): Result;
    events: {
        "Accrued(address,address,address,uint256,uint256,uint256)": EventFragment;
        "AssetConfigUpdated(address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "ClaimerSet(address,address)": EventFragment;
        "RewardOracleUpdated(address,address)": EventFragment;
        "RewardsClaimed(address,address,address,address,uint256)": EventFragment;
        "TransferStrategyInstalled(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Accrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AssetConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardOracleUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferStrategyInstalled"): EventFragment;
}
export interface AccruedEventObject {
    asset: string;
    reward: string;
    user: string;
    assetIndex: BigNumber;
    userIndex: BigNumber;
    rewardsAccrued: BigNumber;
}
export type AccruedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], AccruedEventObject>;
export type AccruedEventFilter = TypedEventFilter<AccruedEvent>;
export interface AssetConfigUpdatedEventObject {
    asset: string;
    reward: string;
    oldEmission: BigNumber;
    newEmission: BigNumber;
    oldDistributionEnd: BigNumber;
    newDistributionEnd: BigNumber;
    assetIndex: BigNumber;
}
export type AssetConfigUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], AssetConfigUpdatedEventObject>;
export type AssetConfigUpdatedEventFilter = TypedEventFilter<AssetConfigUpdatedEvent>;
export interface ClaimerSetEventObject {
    user: string;
    claimer: string;
}
export type ClaimerSetEvent = TypedEvent<[
    string,
    string
], ClaimerSetEventObject>;
export type ClaimerSetEventFilter = TypedEventFilter<ClaimerSetEvent>;
export interface RewardOracleUpdatedEventObject {
    reward: string;
    rewardOracle: string;
}
export type RewardOracleUpdatedEvent = TypedEvent<[
    string,
    string
], RewardOracleUpdatedEventObject>;
export type RewardOracleUpdatedEventFilter = TypedEventFilter<RewardOracleUpdatedEvent>;
export interface RewardsClaimedEventObject {
    user: string;
    reward: string;
    to: string;
    claimer: string;
    amount: BigNumber;
}
export type RewardsClaimedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], RewardsClaimedEventObject>;
export type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;
export interface TransferStrategyInstalledEventObject {
    reward: string;
    transferStrategy: string;
}
export type TransferStrategyInstalledEvent = TypedEvent<[
    string,
    string
], TransferStrategyInstalledEventObject>;
export type TransferStrategyInstalledEventFilter = TypedEventFilter<TransferStrategyInstalledEvent>;
export interface RewardsController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardsControllerInterface;
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
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        claimAllRewards(assets: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimAllRewardsOnBehalf(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimAllRewardsToSelf(assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimRewards(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimRewardsOnBehalf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimRewardsToSelf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            rewardsList: string[];
            unclaimedAmounts: BigNumber[];
        }>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getClaimer(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRewardOracle(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getRewardsList(overrides?: CallOverrides): Promise<[string[]]>;
        getTransferStrategy(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        handleAction(user: PromiseOrValue<string>, totalSupply: PromiseOrValue<BigNumberish>, userBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setClaimer(user: PromiseOrValue<string>, caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;
    claimAllRewards(assets: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimAllRewardsOnBehalf(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimAllRewardsToSelf(assets: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRewards(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRewardsOnBehalf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimRewardsToSelf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, reward: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[]
    ] & {
        rewardsList: string[];
        unclaimedAmounts: BigNumber[];
    }>;
    getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getClaimer(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRewardOracle(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getRewardsList(overrides?: CallOverrides): Promise<string[]>;
    getTransferStrategy(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    handleAction(user: PromiseOrValue<string>, totalSupply: PromiseOrValue<BigNumberish>, userBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(arg0: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setClaimer(user: PromiseOrValue<string>, caller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;
        REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        claimAllRewards(assets: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            rewardsList: string[];
            claimedAmounts: BigNumber[];
        }>;
        claimAllRewardsOnBehalf(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            rewardsList: string[];
            claimedAmounts: BigNumber[];
        }>;
        claimAllRewardsToSelf(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            rewardsList: string[];
            claimedAmounts: BigNumber[];
        }>;
        claimRewards(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewardsOnBehalf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewardsToSelf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: CallOverrides): Promise<void>;
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            rewardsList: string[];
            unclaimedAmounts: BigNumber[];
        }>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getClaimer(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardOracle(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getRewardsList(overrides?: CallOverrides): Promise<string[]>;
        getTransferStrategy(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        handleAction(user: PromiseOrValue<string>, totalSupply: PromiseOrValue<BigNumberish>, userBalance: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setClaimer(user: PromiseOrValue<string>, caller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Accrued(address,address,address,uint256,uint256,uint256)"(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, assetIndex?: null, userIndex?: null, rewardsAccrued?: null): AccruedEventFilter;
        Accrued(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, assetIndex?: null, userIndex?: null, rewardsAccrued?: null): AccruedEventFilter;
        "AssetConfigUpdated(address,address,uint256,uint256,uint256,uint256,uint256)"(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, oldEmission?: null, newEmission?: null, oldDistributionEnd?: null, newDistributionEnd?: null, assetIndex?: null): AssetConfigUpdatedEventFilter;
        AssetConfigUpdated(asset?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, oldEmission?: null, newEmission?: null, oldDistributionEnd?: null, newDistributionEnd?: null, assetIndex?: null): AssetConfigUpdatedEventFilter;
        "ClaimerSet(address,address)"(user?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null): ClaimerSetEventFilter;
        ClaimerSet(user?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null): ClaimerSetEventFilter;
        "RewardOracleUpdated(address,address)"(reward?: PromiseOrValue<string> | null, rewardOracle?: PromiseOrValue<string> | null): RewardOracleUpdatedEventFilter;
        RewardOracleUpdated(reward?: PromiseOrValue<string> | null, rewardOracle?: PromiseOrValue<string> | null): RewardOracleUpdatedEventFilter;
        "RewardsClaimed(address,address,address,address,uint256)"(user?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, claimer?: null, amount?: null): RewardsClaimedEventFilter;
        RewardsClaimed(user?: PromiseOrValue<string> | null, reward?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, claimer?: null, amount?: null): RewardsClaimedEventFilter;
        "TransferStrategyInstalled(address,address)"(reward?: PromiseOrValue<string> | null, transferStrategy?: PromiseOrValue<string> | null): TransferStrategyInstalledEventFilter;
        TransferStrategyInstalled(reward?: PromiseOrValue<string> | null, transferStrategy?: PromiseOrValue<string> | null): TransferStrategyInstalledEventFilter;
    };
    estimateGas: {
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        claimAllRewards(assets: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimAllRewardsOnBehalf(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimAllRewardsToSelf(assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRewards(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRewardsOnBehalf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimRewardsToSelf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimer(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardOracle(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsList(overrides?: CallOverrides): Promise<BigNumber>;
        getTransferStrategy(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        handleAction(user: PromiseOrValue<string>, totalSupply: PromiseOrValue<BigNumberish>, userBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setClaimer(user: PromiseOrValue<string>, caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        EMISSION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimAllRewards(assets: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimAllRewardsOnBehalf(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimAllRewardsToSelf(assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRewards(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardsOnBehalf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, user: PromiseOrValue<string>, to: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimRewardsToSelf(assets: PromiseOrValue<string>[], amount: PromiseOrValue<BigNumberish>, reward: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        configureAssets(config: RewardsDataTypes.RewardsConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAllUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetDecimals(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetIndex(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimer(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardOracle(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsByAsset(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsData(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransferStrategy(reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAccruedRewards(user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAssetIndex(user: PromiseOrValue<string>, asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserRewards(assets: PromiseOrValue<string>[], user: PromiseOrValue<string>, reward: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleAction(user: PromiseOrValue<string>, totalSupply: PromiseOrValue<BigNumberish>, userBalance: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(arg0: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setClaimer(user: PromiseOrValue<string>, caller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDistributionEnd(asset: PromiseOrValue<string>, reward: PromiseOrValue<string>, newDistributionEnd: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEmissionPerSecond(asset: PromiseOrValue<string>, rewards: PromiseOrValue<string>[], newEmissionsPerSecond: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRewardOracle(reward: PromiseOrValue<string>, rewardOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTransferStrategy(reward: PromiseOrValue<string>, transferStrategy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
