let loggedIn = true; // Task 1 and 2
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn) {
  console.log("Here are the products in your cart:");
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
  }
} else {
  console.log("Please log in to view your cart.");
}
