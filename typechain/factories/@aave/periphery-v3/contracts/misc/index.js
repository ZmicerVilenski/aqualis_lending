"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrappedTokenGatewayV3__factory = exports.WalletBalanceProvider__factory = exports.UiPoolDataProviderV3__factory = exports.UiIncentiveDataProviderV3__factory = exports.interfaces = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.interfaces = __importStar(require("./interfaces"));
var UiIncentiveDataProviderV3__factory_1 = require("./UiIncentiveDataProviderV3__factory");
Object.defineProperty(exports, "UiIncentiveDataProviderV3__factory", { enumerable: true, get: function () { return UiIncentiveDataProviderV3__factory_1.UiIncentiveDataProviderV3__factory; } });
var UiPoolDataProviderV3__factory_1 = require("./UiPoolDataProviderV3__factory");
Object.defineProperty(exports, "UiPoolDataProviderV3__factory", { enumerable: true, get: function () { return UiPoolDataProviderV3__factory_1.UiPoolDataProviderV3__factory; } });
var WalletBalanceProvider__factory_1 = require("./WalletBalanceProvider__factory");
Object.defineProperty(exports, "WalletBalanceProvider__factory", { enumerable: true, get: function () { return WalletBalanceProvider__factory_1.WalletBalanceProvider__factory; } });
var WrappedTokenGatewayV3__factory_1 = require("./WrappedTokenGatewayV3__factory");
Object.defineProperty(exports, "WrappedTokenGatewayV3__factory", { enumerable: true, get: function () { return WrappedTokenGatewayV3__factory_1.WrappedTokenGatewayV3__factory; } });
