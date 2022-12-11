import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace DistributionTypes {
    type AssetConfigInputStruct = {
        emissionPerSecond: PromiseOrValue<BigNumberish>;
        totalStaked: PromiseOrValue<BigNumberish>;
        underlyingAsset: PromiseOrValue<string>;
    };
    type AssetConfigInputStructOutput = [BigNumber, BigNumber, string] & {
        emissionPerSecond: BigNumber;
        totalStaked: BigNumber;
        underlyingAsset: string;
    };
}
export interface IAaveDistributionManagerInterface extends utils.Interface {
    functions: {
        "configureAssets((uint128,uint256,address)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "configureAssets"): FunctionFragment;
    encodeFunctionData(functionFragment: "configureAssets", values: [DistributionTypes.AssetConfigInputStruct[]]): string;
    decodeFunctionResult(functionFragment: "configureAssets", data: BytesLike): Result;
    events: {};
}
export interface IAaveDistributionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAaveDistributionManagerInterface;
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
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        configureAssets(assetsConfigInput: DistributionTypes.AssetConfigInputStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}