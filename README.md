# SriToken.js
### SriToken.js is a JavaScript library that simplifies the integration of EVM (Ethereum Virtual Machine) tokens into web applications. It provides a convenient interface to interact with token contracts, issue signup bonuses, daily login bonuses, automate token transfers, and enhance user engagement within your web app.

## Features
- Seamless integration of EVM tokens into web applications
- Issuing signup bonuses to new user accounts
- Providing daily login bonuses to incentivize user engagement
- Granting bonuses to paid users based on their payments
- Automated monthly token distributions to user wallets
- Email notifications for monthly token transfers
- Simplified interaction with token contracts using web3.js

## Installation
To install SriToken.js and its dependencies, follow these steps:

#### Prerequisites
- Node.js: Ensure that you have Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org) and follow the installation instructions for your operating system.

#### SriToken.js Package Installation
- Create a new directory for your project (if you haven't already) and navigate into it using the command line.
- Initialize a new Node.js project by running the following command:
```shell
 npm init -y
```
- Install the required dependencies, including web3.js:
```shell
 npm install web3
```

#### SriToken.js Integration
- Create a new file named `SriToken.js` in your project directory.
- Copy the SriToken.js code (with the web3.js implementation) into the `SriToken.js` file.
- Modify the code to include your specific token contract address, EVM network name, and web app wallet address.
- Save the file.

## Usage
To use SriToken.js in your web application, follow these steps:
1. Import SriToken.js into your project:
   ```javascript
   const SriToken = require('path/SriToken.js');
   ```

2. Create an instance of the `SriToken` class, providing the necessary parameters:
   ```javascript
   const tokenContractAddress = '0xabcdef1234567890'; // Replace with your token contract address
   const evmNetworkName = 'mainnet'; // Replace with your EVM network name
   const webAppWalletAddress = '0xwebappwallet'; // Replace with your web app's wallet address
   const sriToken = new SriToken(tokenContractAddress, evmNetworkName, webAppWalletAddress);
   ```

3. Use the `sriToken` instance to leverage the available features, such as issuing bonuses and performing token transfers. For example:
   ```javascript
   // Issue signup bonus to a new user
   const newUserAddress = '0xnewuser';
   sriToken.issueSignupBonus(newUserAddress);

   // Issue daily login bonus to a user
   const userAddress = '0xuser1';
   sriToken.issueDailyLoginBonus(userAddress);

   // Issue bonus to a paid user based on payment amount
   const paidUserAddress = '0xpaiduser';
   const paymentAmount = 100; // Amount in dollars
   sriToken.issuePaidUserBonus(paidUserAddress, paymentAmount);

   // Send monthly tokens to all user wallets and send email notifications
   sriToken.sendMonthlyTokens();
   ```

4. Customize the library according to your specific requirements, such as modifying bonus amounts or adding additional functionality.
5. Implement logic to fetch all user wallet addresses and email sending.

**Note:** Ensure that you have the necessary permissions and access to interact with the token contract on the specified EVM network. Also, make sure to configure your web3 provider to connect to the desired Ethereum network.
*****

In this code, we've imported the Web3 library, initialized a web3 instance, and created a contract instance using the token contract's ABI (replace TOKEN_ABI with the actual ABI of your token contract). We've also made changes to the transferTokens function to use the web3.eth.sendSignedTransaction method to transfer tokens and handle transaction signing.

Make sure to replace `'YOUR_INFURA_PROJECT_ID'` with your actual Infura project ID and `'YOUR_PRIVATE_KEY'` with the private key of your web app's wallet address.

To fetch all user addresses, you'll need to implement the logic to retrieve the addresses from your web app's database or user management system. Modify the `getAllUserAddresses` function accordingly.

The `sendEmailNotification` function is a placeholder for sending email notifications to users. You can integrate it with your preferred email service or library to send customized email notifications.

Remember to update the `tokenContractAddress`, `evmNetworkName`, and `webAppWalletAddress` parameters when creating an instance of the `SriToken` class with the appropriate values.

With this code, you should be able to interact with your token contract using the web3.js library and implement the desired token features in your web app. This code assumes you have the necessary dependencies installed and have set up the web3 provider and connectivity to the desired Ethereum network.

## Contributing

Contributions to SriToken.js are welcome! If you encounter any issues, have suggestions, or would like to add new features, please open an issue or submit a pull request in this GitHub repository.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the library as per the terms of the MIT License.

## Tips
If you're looking for an alternative to Infura for connecting to the Ethereum network, you can consider using other Ethereum node providers. Here are a few popular alternatives:
1. Alchemy (https://www.alchemy.com/): Alchemy offers a powerful and reliable infrastructure for Ethereum API services. They provide developer-friendly features and robust node infrastructure.
2. QuickNode (https://www.quicknode.com/): QuickNode offers Ethereum and other blockchain node services with a focus on speed and scalability. They provide dedicated and shared nodes across various networks.
3. Moralis (https://moralis.io/): Moralis is a blockchain development platform that offers an all-in-one solution for building decentralized applications. They provide scalable node infrastructure and other development tools.
4. Infura-like self-hosted solution: Instead of relying on a third-party provider, you can set up and manage your own Ethereum node infrastructure. Tools like Geth (Go Ethereum) and Parity Ethereum allow you to run your own Ethereum nodes and connect to them directly.

Each provider may have its own free and pricing plans, features, and limitations. It's important to evaluate and choose the provider that best fits your specific requirements in terms of reliability, performance, cost, and ease of integration.

## Disclaimer
Please note that SriToken.js is provided as-is without any warranty. The library's usage and integration with your web application are at your own risk. It is recommended to thoroughly test and review the code before deploying it in a production environment. The authors and contributors of SriToken.js shall not be held liable for any damages or losses arising from the use of this library.

SriToken.js empowers web developers to effortlessly incorporate EVM tokens into their web applications. With its user-friendly interface and convenient features, you can enhance user engagement, automate token distributions, and incentivize user actions within your web app. Get started with SriToken.js today and unlock the potential of tokenization in your web application!

If you have any questions or need assistance, feel free to reach out Sankar Srinivasan petra.srini@gmail.com

Happy tokenizing!
