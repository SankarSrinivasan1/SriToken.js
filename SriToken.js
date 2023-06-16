// SriToken.js

const Web3 = require('web3');

class SriToken {

  constructor(tokenContractAddress, evmNetworkName, webAppWalletAddress) {

    this.tokenContractAddress = tokenContractAddress;

    this.evmNetworkName = evmNetworkName;

    this.webAppWalletAddress = webAppWalletAddress;

    this.web3 = new Web3(new Web3.providers.HttpProvider(`https://${evmNetworkName}.infura.io/v3/YOUR_INFURA_PROJECT_ID`));

    this.tokenContract = new this.web3.eth.Contract(TOKEN_ABI, tokenContractAddress);

  }

  async issueSignupBonus(userAddress) {

    const signupBonusAmount = 10;

    await this.transferTokens(userAddress, signupBonusAmount);

  }

  async issueDailyLoginBonus(userAddress) {

    const dailyLoginBonusAmount = 1;

    await this.transferTokens(userAddress, dailyLoginBonusAmount);

  }

  async issuePaidUserBonus(userAddress, amountPaid) {

    const paidUserBonusAmount = amountPaid;

    await this.transferTokens(userAddress, paidUserBonusAmount);

  }

  async sendMonthlyTokens() {

    const allUserAddresses = await this.getAllUserAddresses();

    const monthlyTokenAmount = 1;

    for (const userAddress of allUserAddresses) {

      await this.transferTokens(userAddress, monthlyTokenAmount);

      await this.sendEmailNotification(userAddress);

    }

  }

  async transferTokens(toAddress, amount) {

    const data = this.tokenContract.methods.transfer(toAddress, amount).encodeABI();

    const gasPrice = await this.web3.eth.getGasPrice();

    const nonce = await this.web3.eth.getTransactionCount(this.webAppWalletAddress);

    const gasLimit = 50000;

    const rawTransaction = {

      from: this.webAppWalletAddress,

      to: this.tokenContractAddress,

      value: '0',

      data: data,

      gasPrice: this.web3.utils.toHex(gasPrice),

      gasLimit: this.web3.utils.toHex(gasLimit),

      nonce: this.web3.utils.toHex(nonce)

    };

    const signedTransaction = await this.web3.eth.accounts.signTransaction(rawTransaction, 'YOUR_PRIVATE_KEY');

    const transactionReceipt = await this.web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

    console.log(`Tokens transferred to ${toAddress}. Transaction hash: ${transactionReceipt.transactionHash}`);

  }

  async getAllUserAddresses() {

    // Implement logic to fetch all user addresses from your web app's database or user management system

    // Example: const users = await db.query('SELECT address FROM users');

    // Return an array of user addresses

    return ['0xuser1', '0xuser2', '0xuser3'];

  }

  async sendEmailNotification(userAddress) {

    console.log(`Sending email notification to ${userAddress}...`);

    // Use an email sending library or service to send the email

    // Example: emailService.sendEmail(userAddress, 'Monthly token transfer', 'Congratulations! You have received your monthly tokens.');

  }

}

module.exports = SriToken;

