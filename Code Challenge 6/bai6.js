// Phung Canh Tuan_21108861
// Function to calculate the tip
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

// Test the function with a bill value of 100
var billValue = 100;
var tipValue = calcTip(billValue);
console.log("The tip for a bill of $${billValue} is $${tipValue}");

// Create an array of bill values
var bills = [125, 555, 44];

// Create an array of tip values calculated from the 'calcTip' function
var tips = bills.map(calcTip);

// Create an array of total values (bill + tip)
var total = bills.map(bill => bill + calcTip(bill));

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);