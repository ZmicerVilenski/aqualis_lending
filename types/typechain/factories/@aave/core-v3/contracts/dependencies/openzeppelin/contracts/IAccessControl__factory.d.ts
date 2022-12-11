import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAccessControl, IAccessControlInterface } from "../../../../../../../@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IAccessControl";
export declare class IAccessControl__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IAccessControlInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccessControl;
}