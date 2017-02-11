// program = calculate total price of phone purchase
// keep purchasing phones (using a loop) until i run out of money in my bank account
// keep buying accessories for my phone as long as the purchase amount is less than spending threshold


const TAX_RATE = 0.07;
const PHONE_PRICE = 199.99;
const ACCESSORY_PRICE = 10.99;
const SPENDING_THRESHOLD = 400;

var bank_balance = prompt("What is your bank account balance?");
var amount = 0;


function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money
while (amount < bank_balance-PHONE_PRICE) {
	// buy a new phone
	amount += PHONE_PRICE;
	console.log("Phone: " + amount.toFixed(2));

	// buy accessories
	if (amount < SPENDING_THRESHOLD) {
		amount += ACCESSORY_PRICE;
		console.log("Phone + accessory: " + amount.toFixed(2));
	}
}

// calculate tax
amount += calculateTax(amount);


if (amount > bank_balance) {
	console.log("You can't afford this price!");
} else {
	console.log("Your purchase: " + formatAmount(amount) + ". Thank you!");
}