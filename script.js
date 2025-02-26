let userName = "Guest";
let menuItems = ["Githeri", "Pilau Beef", "Pilau Chicken", "Masala Chips", "Chicken Wings"];

document.getElementById("btnEnterName").addEventListener("click", function () {
    let nameInput = prompt("Please enter your first name:");

    if (nameInput === "" || nameInput === null) {
        userName = "Guest";
    } else {
        userName = nameInput;
    }

    alert(`Welcome to EatNow Cafe, ${userName}!`);
});

document.getElementById("btnViewMenu").addEventListener("click", function () {
    let menuText = "Menu:\n";
    menuItems.forEach((item, index) => {
        menuText += `${index + 1}. ${item}\n`;
    });
    alert(menuText);
});

document.getElementById("btnAddDish").addEventListener("click", function () {
    let newDish = prompt("Suggest a new dish to add to the menu:");

    if (newDish === "" || newDish === null) {
        console.log("No new dish added. Please enter a valid dish name.");
        return;
    }

    menuItems.push(newDish);

    let updatedMenu = "Updated Menu:\n";
    menuItems.forEach((item, index) => {
        updatedMenu += `${index + 1}. ${item}\n`;
    });

    alert(updatedMenu);
});
