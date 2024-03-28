import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function rainbow(arr, time) {
    let text = chalkAnimation.rainbow(arr);
    await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
    text.stop();
}
async function radar(arr, time) {
    let text = chalkAnimation.karaoke(arr);
    await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
    text.stop();
}
await rainbow(`Welcome to Noorani's CLI_ATM`, 2000);
await radar(`\n\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`, 5000);
let pin = 1234;
let balance = await inquirer.prompt([{
        name: "amount",
        type: 'number',
        message: chalk.green("\nEnter the balance of demo account")
    }]);
let info = `\nDEMO ACCOUNT BALANCE : ${chalk.cyan(balance.amount)} PKR`;
console.log(chalk.yellowBright(info));
let pininput = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.greenBright("\nPls enter your pin {PIN : 1234}")
});
if (pininput.pin !== pin) {
    console.log(chalk.redBright(`\nInCorrect Pin ,Card declined! \n Pls try again`));
}
else {
    while (true) {
        let chooseopt = await inquirer.prompt({
            name: "Operation",
            type: "list",
            message: chalk.greenBright("\nPls Select the option:"),
            choices: ["Balance Inquiry", "Transfer", "With draw", "Fast Cash", "Exit"]
        });
        if (chooseopt.Operation === "Balance Inquiry") {
            console.log(chalk.magentaBright.bold `Your Balance is: ${chalk.yellow(balance.amount)}`);
        }
        else if (chooseopt.Operation === "Transfer") {
            let accNum = await inquirer.prompt([{
                    name: "accountNumber",
                    type: "number",
                    message: chalk.green("Enter Account Number")
                }]);
            let amount = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: chalk.green("Enter the Amount")
                }]);
            if (amount.amount > balance.amount) {
                console.log(chalk.redBright(`\nInsufficient Balance ,Pls Try again`));
                console.log(chalk.yellowBright(`Your current balance is: ${chalk.cyan(balance.amount)}`));
            }
            else {
                console.log(chalk.yellowBright(`Successfully Transfered ${chalk.cyan(amount.amount)} To Account Number:${chalk.cyan(accNum.accountNumber)}`));
            }
        }
        else if (chooseopt.Operation === "With draw") {
            let Withdrawval = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: chalk.greenBright("Enter The Amount.")
                }]);
            if (Withdrawval.amount > balance.amount) {
                console.log(chalk.redBright(`\nInsufficient Balance ,Pls Try again`));
                console.log(chalk.red(`Your current balance is: ${chalk.cyanBright(balance.amount)}`));
            }
            else if (Withdrawval.amount > 25000) {
                console.log(chalk.redBright(`You cant withdram more than atm limit \n pls try again \n Max limit: ${chalk.cyanBright(25000)}`));
            }
            else {
                balance.amount -= Withdrawval.amount;
                console.log(`Successfully Withdraw ${Withdrawval.amount}`);
                console.log(`Your Current Balance is ${balance.amount}`);
            }
        }
        else if (chooseopt.Operation === "Fast Cash") {
            let fastCash = await inquirer.prompt([{
                    name: "amounts",
                    type: "list",
                    message: chalk.greenBright("Select The Amount:"),
                    choices: [5000, 10000, 15000, 20000, 25000]
                }]);
            if (fastCash.amounts === 5000) {
                if (fastCash.amounts > balance.amount) {
                    console.log(chalk.red(`Insufficinet balance,Try again! \n Your current balance is ${chalk.yellow(balance.amount)}`));
                }
                else {
                    balance.amount -= 5000;
                    console.log(chalk.magenta(`Successfully Withdraw ${chalk.yellow(fastCash.amounts)}`));
                    console.log(chalk.magenta(`Your Current Balance is ${chalk.yellow(balance.amount)}`));
                }
            }
            else if (fastCash.amounts === 5000) {
                if (fastCash.amounts > balance.amount) {
                    console.log(chalk.red(`Insufficinet balance,Try again! \n Your current balance is ${chalk.yellow(balance.amount)}`));
                }
                else {
                    balance.amount -= 5000;
                    console.log(chalk.magenta(`Successfully Withdraw ${chalk.yellow(fastCash.amounts)}`));
                    console.log(chalk.magenta(`Your Current Balance is ${chalk.yellow(balance.amount)}`));
                }
            }
            else if (fastCash.amounts === 10000) {
                if (fastCash.amounts > balance.amount) {
                    console.log(chalk.red(`Insufficinet balance,Try again! \n Your current balance is ${chalk.yellow(balance.amount)}`));
                }
                else {
                    balance.amount -= 15000;
                    console.log(chalk.magenta(`Successfully Withdraw ${chalk.yellow(fastCash.amounts)}`));
                    console.log(chalk.magenta(`Your Current Balance is ${chalk.yellow(balance.amount)}`));
                }
            }
            else if (fastCash.amounts === 20000) {
                if (fastCash.amounts > balance.amount) {
                    console.log(chalk.red(`Insufficinet balance,Try again! \n Your current balance is ${chalk.yellow(balance.amount)}`));
                }
                else {
                    balance.amount -= 20000;
                    console.log(chalk.magenta(`Successfully Withdraw ${chalk.yellow(fastCash.amounts)}`));
                    console.log(chalk.magenta(`Your Current Balance is ${chalk.yellow(balance.amount)}`));
                }
            }
            else if (fastCash.amounts === 25000) {
                if (fastCash.amounts > balance.amount) {
                    console.log(chalk.red(`Insufficinet balance,Try again! \n Your current balance is ${chalk.yellow(balance.amount)}`));
                }
                else {
                    balance.amount -= 25000;
                    console.log(chalk.magenta(`Successfully Withdraw ${chalk.yellow(fastCash.amounts)}`));
                    console.log(chalk.magenta(`Your Current Balance is ${chalk.yellow(balance.amount)}`));
                }
            }
            else {
                console.log(chalk.red(`Error 404 Pls try again`));
            }
        }
        else if (chooseopt.Operation === "Exit") {
            await rainbow(`\nThank you for using this ATM`, 3000);
            break;
        }
    }
}
