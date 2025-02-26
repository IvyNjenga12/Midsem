let userName = "Guest";
let menuItems = ["Nyama Choma", "Ugali & Sukuma", "Chapati & Beans", "Tilapia Fry", "Mutura"];

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
        menuText += `${index + 1}. ${item}\n`; // Formatting menu list for alert
        console.log(`${index + 1}. ${item}`);  // Printing to console in numbered format
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
        console.log(`${index + 1}. ${item}`); // Print updated menu to console
    });

    alert(updatedMenu);
});
