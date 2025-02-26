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
    let menuContainer = document.getElementById("menuContainer");
    menuContainer.innerHTML = "<h3>Available Dishes:</h3>"; // Reset and add header

    let menuList = document.createElement("ul"); // Create a list

    menuItems.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        menuList.appendChild(listItem);
    });

    menuContainer.appendChild(menuList); // Append the menu list to the container
}

function addDish() {
    let newDish = prompt("Suggest a new dish to add to the menu:");

    if (newDish && newDish.trim() !== "") {
        menuItems.push(newDish);
        viewMenu(); // Update the menu display
    } else {
        console.log("No new dish added. Please enter a valid dish name.");
    }
}
