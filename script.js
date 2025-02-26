// Step 1: Personalized Greeting (3 Marks)
document.getElementById("greetButton").onclick = function() {
    var userName = prompt("Please enter your first name:");
    if (userName === null || userName === "") {
        userName = "Guest";
    }
    alert("Welcome to EatNow cafe, " + userName + "!");
};

// Step 3: Display Menu Items in Browser (5 Marks)
var menuItems = ["Githeri", "Pilau Beef", "Pilau Chicken", "Masala Chips", "Chicken wings"];

function addMenuItem(item) {
    var menuList = document.getElementById("menuList");
    var listItem = document.createElement("li");
    listItem.textContent = (menuItems.length) + ". " + item;
    menuList.appendChild(listItem);
}

function initializeMenu() {
    menuItems.forEach(function(item) {
        addMenuItem(item);
    });
}

// Step 4: Adding a New Dish (3 Marks)
document.getElementById("addDishButton").onclick = function() {
    var newDish = prompt("Suggest a new dish to add to the menu:");
    if (newDish !== null && newDish !== "") {
        menuItems.push(newDish);
        addMenuItem(newDish);
    } else {
        alert("No new dish added. Please enter a valid dish name.");
    }
};

// Initial menu display
initializeMenu();
