// Task 1

let balance = 0;

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`You've successfully deposited $${amount}. Your new balance is $${balance}.`);
  } else {
    console.log("Please enter a valid amount to deposit.");
  }
}

//Task 2
function withdraw(amount) {
    if (amount > 0) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`You've successfully withdrawn $${amount}. Your new balance is $${balance}.`);
      } else {
        console.log("Insufficient funds. Cannot complete the withdrawal.");
      }
    } else {
      console.log("Please enter a valid amount to withdraw.");
    }
  }

//Task 3
function checkBalance() {
    console.log(`Your current balance is $${balance}.`);
  }


// Example usage:
deposit(100);   // Deposit $100
withdraw(50);   // Withdraw $50
checkBalance(); // Check balance: Should be $50