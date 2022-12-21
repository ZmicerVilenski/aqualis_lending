# Aqualis V3 Deployments

0. _.env_ file configuration:

   `
   MARKETID="Test"\
   MARKET_NAME="Aqualis"\
   OWNER=0x...\
   PRIVATE_KEY=0x...\
   INFURA_ID=0c...\
   INFURA_KEY=0c...\
   ALCHEMY_KEY=ZHL...\
   ETHERSCAN_API_KEY=UIRW...\
   MNEMONIC="abcd..."\
   DETERMINISTIC_DEPLOYMENT="false"\

   `

1. Install Node.JS dependencies:

   ```
   npm i
   ```

2. Fill in the configuration files:

- /helpers/constants.js
- /helpers/hardhat-config-helpers.js
- /helpers/
- /helpers/markets/ a set of reserve assets is specified here

3. Deploy

   ```
   npx hardhat node
   ```

   New terminal:

   ```
   npx hardhat deploy
   npx hardhat deploy --network gorli
   ```

4. Configuring Deployed Contracts:

- ACLManager - access control list to segregate powers and/or benefits that can be allocated to different entities on the protocol. The roles and holders are managed in the ACLManager.sol, which keeps track of the individual roles and its holders. List of functions here (https://docs.aave.com/developers/core-contracts/aclmanager)
- PoolAddressesProvider - The main addresses register of the protocol, containing address of core protocol contracts and ACL admin. It acts as factory of proxies and admin of those. The owner of this contract has the right to set/update implementation of the upgradable contracts. The latest contract addresses should be retrieved from this contract by making the appropriate calls. (https://docs.aave.com/developers/core-contracts/pooladdressesprovider)
- PoolAddressesProviderRegistry - Contains a list of active PoolAddressProvider addresses, for different markets. It is used for indexing all protocol’s markets. (https://docs.aave.com/developers/core-contracts/pooladdressesproviderregistry)
- PriceOracleSentinel - validates if operations are allowed depending on the PriceOracle health. Once the PriceOracle gets up after an outage/downtime, users can make their positions healthy during a grace period. (https://docs.aave.com/developers/core-contracts/priceoraclesentinel)
- PoolConfigurator - Provider configuration methods for the Pool contract. The write methods of this contract can only be called by addresses with corresponding permission-ed system roles that are managed by ACLManager. (https://docs.aave.com/developers/core-contracts/poolconfigurator)
- AqualisOracle - Contract to get asset prices, manage price sources and update the fallback oracle. (https://docs.aave.com/developers/core-contracts/aaveoracle)
- RewardsController - This contract is responsible for configuring the different rewards and the claim process. (https://docs.aave.com/developers/periphery-contracts/rewardscontroller)

## Project Structure

| Path                  | Description                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| deploy/               | Main deployment scripts dir location                                                                                            |
| ├─ 00-core/           | Core deployment, only needed to run once per network.                                                                           |
| ├─ 01-periphery_pre/  | Periphery contracts deployment, only need to run once per network.                                                              |
| ├─ 02-market/         | Market deployment scripts, depends of Core and Periphery deployment.                                                            |
| ├─ 03-periphery_post/ | Periphery contracts deployment after market is deployed.                                                                        |
| deployments/          | Artifacts location of the deployments, contains the addresses, the abi, solidity input metadata and the constructor parameters. |
| markets/              | Directory to configure Aqualis markets                                                                                          |
| tasks/                | Hardhat tasks to setup and review market configs                                                                                |
| helpers/              | Utility helpers to manage configs and deployments                                                                               |

## Problems in Goerly network:

.\deploy\01_periphery_pre\01_treasury.js - srt 29 - contract AqualisEcosystemReserveV2 ("Treasury-Implementation") {contract creation code storage out of gas} (https://goerli.etherscan.io/tx/0x39dceaad8250a882f1b2ba00eced47ff185a77c4513b2d820f469627e4e631b4)
