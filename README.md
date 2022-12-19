# Aqualis V3 Deployments

0. _.env_ file configuration:

   `
   MARKETID="Test"\
   MARKET_NAME="Aqualis"\
   OWNER=\
   PRIVATE_KEY=\
   INFURA_ID=\
   ETHERSCAN_API_KEY=\
   MNEMONIC=\
   DETERMINISTIC_DEPLOYMENT="true"\

   `

1. Install Node.JS dependencies:

   ```
   npm i
   ```

2. Deploy

   ```
   npx hardhat node
   ```

   New terminal:

   ```
   npx hardhat deploy
   ```

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
