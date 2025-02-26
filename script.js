let userName = "Guest";
let menuItems = ["Githeri", "Pilau Beef", "Pilau Chicken", "Masala Chips", "Chicken Wings"];

function inputUserDetails() {
    let nameInput = prompt("Please enter your first name:");
    userName = nameInput && nameInput.trim() !== "" ? nameInput : "Guest";
    alert(`Welcome to EatNow Cafe, ${userName}!`);
}

function viewMenu() {
    let menuContainer = document.getElementById("menuContainer");
    let menuList = document.getElementById("menuList");

    // Toggle menu visibility
    if (menuContainer.style.display === "none") {
        menuContainer.style.display = "block";
    } else {
        menuContainer.style.display = "none";
        return;
    }

    // Clear previous menu before updating
    menuList.innerHTML = "";
    
    // Populate menu
    menuItems.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        menuList.appendChild(listItem);
    });
}

function addDish() {
    let newDish = prompt("Suggest a new dish to add to the menu:");
    
    if (newDish && newDish.trim() !== "") {
        menuItems.push(newDish);
        viewMenu(); // Refresh menu
    } else {
        console.log("No new dish added. Please enter a valid dish name.");
    }
}
