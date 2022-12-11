import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IPoolDataProviderInterface extends utils.Interface {
    functions: {
        "getATokenTotalSupply(address)": FunctionFragment;
        "getReserveData(address)": FunctionFragment;
        "getTotalDebt(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getATokenTotalSupply" | "getReserveData" | "getTotalDebt"): FunctionFragment;
    encodeFunctionData(functionFragment: "getATokenTotalSupply", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getTotalDebt", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getATokenTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalDebt", data: BytesLike): Result;
    events: {};
}
export interface IPoolDataProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolDataProviderInterface;
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
        getATokenTotalSupply(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            unbacked: BigNumber;
            accruedToTreasuryScaled: BigNumber;
            totalAToken: BigNumber;
            totalStableDebt: BigNumber;
            totalVariableDebt: BigNumber;
            liquidityRate: BigNumber;
            variableBorrowRate: BigNumber;
            stableBorrowRate: BigNumber;
            averageStableBorrowRate: BigNumber;
            liquidityIndex: BigNumber;
            variableBorrowIndex: BigNumber;
            lastUpdateTimestamp: number;
        }>;
        getTotalDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getATokenTotalSupply(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        unbacked: BigNumber;
        accruedToTreasuryScaled: BigNumber;
        totalAToken: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
    }>;
    getTotalDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getATokenTotalSupply(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            unbacked: BigNumber;
            accruedToTreasuryScaled: BigNumber;
            totalAToken: BigNumber;
            totalStableDebt: BigNumber;
            totalVariableDebt: BigNumber;
            liquidityRate: BigNumber;
            variableBorrowRate: BigNumber;
            stableBorrowRate: BigNumber;
            averageStableBorrowRate: BigNumber;
            liquidityIndex: BigNumber;
            variableBorrowIndex: BigNumber;
            lastUpdateTimestamp: number;
        }>;
        getTotalDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getATokenTotalSupply(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getATokenTotalSupply(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}