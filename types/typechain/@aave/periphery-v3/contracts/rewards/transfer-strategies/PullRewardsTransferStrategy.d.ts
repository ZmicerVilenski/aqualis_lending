import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface PullRewardsTransferStrategyInterface extends utils.Interface {
    functions: {
        "emergencyWithdrawal(address,address,uint256)": FunctionFragment;
        "getIncentivesController()": FunctionFragment;
        "getRewardsAdmin()": FunctionFragment;
        "getRewardsVault()": FunctionFragment;
        "performTransfer(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "emergencyWithdrawal" | "getIncentivesController" | "getRewardsAdmin" | "getRewardsVault" | "performTransfer"): FunctionFragment;
    encodeFunctionData(functionFragment: "emergencyWithdrawal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getIncentivesController", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRewardsAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRewardsVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "performTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "emergencyWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncentivesController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performTransfer", data: BytesLike): Result;
    events: {
        "EmergencyWithdrawal(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EmergencyWithdrawal"): EventFragment;
}
export interface EmergencyWithdrawalEventObject {
    caller: string;
    token: string;
    to: string;
    amount: BigNumber;
}
export type EmergencyWithdrawalEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], EmergencyWithdrawalEventObject>;
export type EmergencyWithdrawalEventFilter = TypedEventFilter<EmergencyWithdrawalEvent>;
export interface PullRewardsTransferStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PullRewardsTransferStrategyInterface;
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
        emergencyWithdrawal(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getIncentivesController(overrides?: CallOverrides): Promise<[string]>;
        getRewardsAdmin(overrides?: CallOverrides): Promise<[string]>;
        getRewardsVault(overrides?: CallOverrides): Promise<[string]>;
        performTransfer(to: PromiseOrValue<string>, reward: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    emergencyWithdrawal(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getIncentivesController(overrides?: CallOverrides): Promise<string>;
    getRewardsAdmin(overrides?: CallOverrides): Promise<string>;
    getRewardsVault(overrides?: CallOverrides): Promise<string>;
    performTransfer(to: PromiseOrValue<string>, reward: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        emergencyWithdrawal(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getIncentivesController(overrides?: CallOverrides): Promise<string>;
        getRewardsAdmin(overrides?: CallOverrides): Promise<string>;
        getRewardsVault(overrides?: CallOverrides): Promise<string>;
        performTransfer(to: PromiseOrValue<string>, reward: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "EmergencyWithdrawal(address,address,address,uint256)"(caller?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): EmergencyWithdrawalEventFilter;
        EmergencyWithdrawal(caller?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): EmergencyWithdrawalEventFilter;
    };
    estimateGas: {
        emergencyWithdrawal(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIncentivesController(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsVault(overrides?: CallOverrides): Promise<BigNumber>;
        performTransfer(to: PromiseOrValue<string>, reward: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        emergencyWithdrawal(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIncentivesController(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        performTransfer(to: PromiseOrValue<string>, reward: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
