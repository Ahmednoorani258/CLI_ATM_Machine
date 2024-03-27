
import inquirer from "inquirer"



let pin = 1234;
let balance = 100000 ;

let pininput = await inquirer.prompt(
            {
                name: "pin",
                type: "number",
                message: "Pls enter your pin {PIN : 1234}"
            }
    )
    

    if(pininput.pin !== pin){

        console.log('InCorrect Pin ,Card declined!');

    }else{
        

        let chooseopt = await inquirer.prompt(
                {
                    name:"Operation",
                    type: "list",
                    message: "Pls Select the option:",
                    choices: ["Balance Inquiry","Transfer","With draw","Fast Cash","Exit"]
                }
        )
        // console.log(chooseopt);

        if(chooseopt.Operation === "Balance Inquiry"){
            console.log(`Your Balance is: ${balance}`);
            
        }else if(chooseopt.Operation === "Transfer"){

            let accNum = await inquirer.prompt([{
                name: "accountNumber",
                type: "number",
                message: "Enter Account Number"
            }])
            let amount = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter the Amount"
            }])
            if(amount.amount > balance){

                console.log(`\nInsufficient Balance ,Pls Try again`);
                console.log(`Your current balance is: ${balance}`);
        
            }else{

                console.log(`Successfully Transfered ${amount.amount} To Account Number:${accNum.accountNumber}`);
                
            }



        }else if(chooseopt.Operation === "With draw"){

            let Withdrawval = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter The Amount."
            }])
            if(Withdrawval.amount > balance){

                console.log(`\nInsufficient Balance ,Pls Try again`);
                console.log(`Your current balance is: ${balance}`);
            }else{
            balance -= Withdrawval.amount;
            console.log(`Successfully Withdraw ${Withdrawval.amount}`);
            console.log(`Your Current Balance is ${balance}`);
            }
        
        }else if(chooseopt.Operation === "Fast Cash"){

            let fastCash = await inquirer.prompt([{
                name: "amounts",
                type: "list",
                message: "Select The Amount:",
                choices: [5000,10000,15000,20000,25000]
            }])
            if(fastCash.amounts === 5000){

                balance -= 5000
                console.log(`Successfully Withdraw ${fastCash.amounts}`);
                console.log(`Your Current Balance is ${balance}`);

            }else if(fastCash.amounts === 10000){

                balance -= 10000
                console.log(`Successfully Withdraw ${fastCash.amounts}`);
                console.log(`Your Current Balance is ${balance}`);
            }else if(fastCash.amounts === 15000){

                balance -= 15000
                console.log(`Successfully Withdraw ${fastCash.amounts}`);
                console.log(`Your Current Balance is ${balance}`);

            }else if(fastCash.amounts === 20000){

                balance -= 20000
                console.log(`Successfully Withdraw ${fastCash.amounts}`);
                console.log(`Your Current Balance is ${balance}`);

            }else if(fastCash.amounts === 25000){

                balance -= 25000
                console.log(`Successfully Withdraw ${fastCash.amounts}`);
                console.log(`Your Current Balance is ${balance}`);

            }else {

                console.log(`Error 404 Pls try again`);
                
            }
        }else if(chooseopt.Operation === "Exit"){

            console.log(`Thank you for using this ATM`);
            
        }
    
        
    }

  