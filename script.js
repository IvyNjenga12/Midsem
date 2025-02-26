// Step 1: Personalized Greeting (3 Marks)
document.getElementById("greetButton").onclick = function() {
    var userName = prompt("Please enter your first name:");
    if (userName === null || userName === "") {
        userName = "Guest";
    }
    alert("Welcome to EatNow cafe, " + userName + "!");
};

// Step 3: Display Menu Items in Browser (5 Marks)
var menuItems = ["Grilled Chicken", "Pasta Carbonara", "Caesar Salad", "Margherita Pizza", "Chocolate Cake"];

function displayMenu() {
    var menuList = document.getElementById("menuList");
    menuList.innerHTML = ""; // Clear the existing menu
    menuItems.forEach(function(item, index) {
        var listItem = document.createElement("li");
        listItem.textContent = (index + 1) + ". " + item;
        menuList.appendChild(listItem);
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

// Debugging: Ensure the script is loaded
console.log("Script loaded successfully.");
