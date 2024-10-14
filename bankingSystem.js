let balance = 0;

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`You've successfully deposited $${amount}. Your new balance is $${balance}.`);
  } else {
    console.log("Please enter a valid amount to deposit.");
  }
}

// Example usage:
deposit(100); // Deposit $100
deposit(50);  // Deposit $50
deposit(-20); // Invalid deposit, won't be added