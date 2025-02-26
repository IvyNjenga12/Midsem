// Step 1: Personalized Greeting (3 Marks)
document.getElementById("greetButton").onclick = function() {
    var userName = prompt("Please enter your first name:");
    if (userName === null || userName === "") {
        userName = "Guest";
    }
    alert("Welcome to EatNow cafe, " + userName + "!");
};

// Step 3: Display Menu Items in Console (5 Marks)
var menuItems = ["Grilled Chicken", "Pasta Carbonara", "Caesar Salad", "Margherita Pizza", "Chocolate Cake"];

function displayMenu() {
    console.log("Menu:");
    menuItems.forEach(function(item, index) {
        console.log((index + 1) + ". " + item);
    });
}

document.getElementById("menuButton").onclick = function() {
    displayMenu();
};

// Step 4: Adding a New Dish (3 Marks)
document.getElementById("addDishButton").onclick = function() {
    var newDish = prompt("Suggest a new dish to add to the menu:");
    if (newDish !== null && newDish !== "") {
        menuItems.push(newDish);
        displayMenu();
    } else {
        console.log("No new dish added. Please enter a valid dish name.");
    }
};
