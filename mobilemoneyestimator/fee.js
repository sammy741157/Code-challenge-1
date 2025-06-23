//Mobile transaction fee estimator
function calculateFee(amount) {
const input = prompt("Unatuma Ngaapi? (KES):");
const amountToSend = Number(input);
// Validate input
if (isNaN(amountToSend) || amountToSend <= 0) {
    console.error("Please enter a valid number.");
    return;
}
if (amountToSend <=0) {
    console.error("Input should be more than 0");
    return;
};
let transactionFee = amountToSend * 0.015;
//Conditions
if(transactionFee < 10) {
    transactionFee = 10;
} else if (transactionFee > 70) {
    transactionFee = 70;
}
transactionFee = Math.round(transactionFee * 100) / 100;
const totalAmount = amountToSend + transactionFee;
console.log(`Sending KES ${amountToSend}:`);
console.log(`Transaction fee: KES ${transactionFee}`);
console.log(`Total amount to be debited: KES ${totalAmount}`);
console.log("Send Money Securely!");
}

calculateFee();