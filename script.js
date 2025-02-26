let userName = "Guest"; // Default user name
let menuItems = ["Grilled Chicken", "Pasta Carbonara", "Caesar Salad", "Margherita Pizza", "Chocolate Cake"];

function inputUserDetails() {
    let nameInput = prompt("Please enter your first name:");

    // Validate input: If empty, default to "Guest"
    userName = nameInput && nameInput.trim() !== "" ? nameInput : "Guest";

    // Display welcome message
    alert(`Welcome to EatNow Cafe, ${userName}!`);
}

function viewMenu() {
    console.clear();
    console.log("Menu:");
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

function addDish() {
    let newDish = prompt("Suggest a new dish to add to the menu:");

    if (newDish && newDish.trim() !== "") {
        menuItems.push(newDish);
        console.clear();
        console.log("Updated Menu:");
        menuItems.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } else {
        console.log("No new dish added. Please enter a valid dish name.");
    }
}
