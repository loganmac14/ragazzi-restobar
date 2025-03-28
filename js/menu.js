const menuItems = [
    // Lunch Antipasti
    {
        category: "lunch-antipasti",
        name: "Nonna's Handmade Focaccia",
        price: "$10",
        description: "Served with Tuscan bomba oil"
    },
    {
        category: "lunch-antipasti",
        name: "Caprese Salad",
        price: "$15 V",
        description: "Fresh mozzarella cheese, fresh ripe tomatoes and Sicilian olives in Tuscan bomba oil with balsamic glaze"
    },
    {
        category: "lunch-antipasti",
        name: "Calamari Fritti",
        price: "$18",
        description: "Flash-fried, tossed with herbs with pomodoro sauce"
    },
    {
        category: "lunch-antipasti",
        name: "Mussels",
        price: "$17",
        description: "Fresh herbs in your choice of white wine or pomodoro sauce"
    },

    // Lunch Pizza
    {
        category: "lunch-pizza",
        name: "",
        price: "",
        description: "Gourmet Italian style 10 inch thin crust"
    },
    {
        category: "lunch-pizza",
        name: "",
        price: "",
        description: "Gluten-free crust available for an additional $4 (not made in house)"
    },
    {
        category: "lunch-pizza",
        name: "Pizza Margherita",
        price: "$17",
        description: "Pomodoro sauce and fior di latte cheese with fresh basil"
    },
    {
        category: "lunch-pizza",
        name: "Pizza Diavola",
        price: "$19",
        description: "Pomodoro sauce, fior di latte cheese, pancetta and spicy salami"
    },
    {
        category: "lunch-pizza",
        name: "Pizza Vegetariana",
        price: "$18 V",
        description: "Pomodoro sauce, fior di latte cheese and vegetables"
    },

    // Lunch Entree
    {
        category: "lunch-entree",
        name: "Add-ons",
        price: "",
        description: "Sauteed mushrooms $3, three shrimps $9"
    },
    {
        category: "lunch-entree",
        name: "Nonna's Lasagna",
        price: "$25",
        description: "Classic homemade three-meat lasagna topped with bechamel sauce and served with a choice of Caesar or house salad"
    },
    {
        category: "lunch-entree",
        name: "Veal or Halal Chicken Parmigiana",
        price: "$33",
        description: "Breaded cutlets, mozzarella cheese and pomodoro sauce with a side of tagliatelle in a rosé sauce"
    },

    // Lunch Pasta & Risotto
    {
        category: "lunch-pasta-risotto",
        name: "Linguine Pescatore",
        price: "$30",
        description: "Two shrimps, one scallop, and mussels in a pomodoro sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Penne alla Vodka",
        price: "$21",
        description: "Onions, garlic, Parmigiano, and pancetta in a rosé cream sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Penne Florentina",
        price: "$21 V",
        description: "Traditional Italian pesto, mushrooms, peas and cherry tomatoes in a bechamel crema sauce (add chicken for $5)"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Penne alla Boscaiola",
        price: "$27",
        description: "Sausage and mixed mushrooms in a pesto cream sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Tagliatelle alla Bolognese",
        price: "$23",
        description: "Beef, pork and veal in an Italian-style meat sauce on egg-noodle pasta"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Linguine with Meatballs",
        price: "$21",
        description: "Homemade meatballs in a pomodoro sauce with Parmigiano"
    },

    // Lunch Sandwich
    {
        category: "lunch-sandwich",
        name: "",
        price: "",
        description: "Available 11am - 4pm, with choice of side of frittes, Caesar or house salad"
    },
    {
        category: "lunch-sandwich",
        name: "",
        price: "",
        description: "Enjoy a box lunch to go with any panini and side plus cheesecake for $23!"
    },
    {
        category: "lunch-sandwich",
        name: "Panini Giardino",
        price: "$16 V",
        description: "Fior di latte, arugula, roasted peppers and a balsamic reduction served on focaccia"
    },
    {
        category: "lunch-sandwich",
        name: "Panini Ragazzi",
        price: "$20",
        description: "Chicken, tomatoes, pancetta, arugula, mozzarella and homemade aioli served on focaccia"
    },
    
    // Lunch Salad
    {
        category: "lunch-salad",
        name: "Chicken Caesar",
        price: "$18",
        description: ""
    },
    {
        category: "lunch-salad",
        name: "House Salad with Chicken",
        price: "$18",
        description: ""
    },
    {
        category: "lunch-salad",
        name: "Add-ons",
        price: "",
        description: "Three shrimps $9, three scallops $9"
    },
    
    // Lunch Gluten-Free
    {
        category: "lunch-gluten-free",
        name: "Penne Primavera",
        price: "$21",
        description: "Mushrooms, peppers, Pomodoro sauce"
    },
    {
        category: "lunch-gluten-free",
        name: "Risotto Di Mare",
        price: "$32",
        description: "Shrimps, scallops, mussels, Pomodoro sauce"
    },
    {
        category: "lunch-gluten-free",
        name: "Penne Primavera",
        price: "$21",
        description: "Mushrooms, peppers, Pomodoro sauce"
    },
    {
        category: "lunch-gluten-free",
        name: "Pizza Semplice",
        price: "$25",
        description: "Pomodoro sauce, mozzarella, mushrooms, peppers (GF crust not made in-house). Ask server for add-ons."
    },
    // Lunch Vegetarian
    {
        category: "lunch-vegetarian",
        name: "Mushroom Risotto",
        price: "$27",
        description: "Oyster, Porcini and Cremini mushrooms"
    },
    {
        category: "lunch-vegetarian",
        name: "Nonna's Homemade Gnocchi",
        price: "$24",
        description: "Choice of rosé, tomato, or pesto"
    },
    {
        category: "lunch-vegetarian",
        name: "Penne Florentina",
        price: "$23",
        description: "Traditional Italian pesto, mushrooms, cherry tomatoes, bechamel cream"
    },
    // Lunch Vegan
    {
        category: "lunch-vegan",
        name: "Grilled Eggplant Parmigiana",
        price: "$24",
        description: "Two slices eggplant, Pomodoro sauce, vegan mozzarella with side salad"
    },
    // Dinner Antipasti
    {
        category: "dinner-antipasti",
        name: "Nonna's Handmade Focaccia",
        price: "$11",
        description: "Served with Tuscan bomba oil"
    },
    {
        category: "dinner-antipasti",
        name: "Fantasia Salad",
        price: "$18",
        description: "Pickled beets, arugula, goat cheese and pecans"
    },
    {
        category: "dinner-antipasti",
        name: "Caprese Salad",
        price: "$20 V",
        description: "Fresh mozzarella cheese, fresh ripe tomatoes and Sicilian olives in Tuscan bomba oil with balsamic glaze"
    },
    {
        category: "dinner-antipasti",
        name: "Caesar Salad",
        price: "$16",
        description: "Smoky bacon, toasted homemade croutons, classic Caesar dressing and Parmigiano"
    },
    {
        category: "dinner-antipasti",
        name: "Polpette",
        price: "$22",
        description: "Three homemade meatballs stuffed with pork, veal, beef and ricotta cheese, finished in our homemade pomodoro sauce, topped with Parmigiano and served with two crostini"
    },
    {
        category: "dinner-antipasti",
        name: "Calamari Fritti",
        price: "$22",
        description: "Flash-fried, tossed with herbs with pomodoro sauce"
    },
    {
        category: "dinner-antipasti",
        name: "Mussels & Clams",
        price: "$21",
        description: "Fresh herbs in your choice of white wine or pomodoro sauce"
    },
    {
        category: "dinner-antipasti",
        name: "Antipasto Board",
        price: "$34",
        description: "Ask your server for details"
    },
    {
        category: "dinner-antipasti",
        name: "Bruschetta",
        price: "$19 V",
        description: "Four pieces of grilled crostini with fresh tomatoes, basil and olive oil"
    },
    {
        category: "dinner-antipasti",
        name: "Shrimp & Scallop Sambuca",
        price: "$29",
        description: "Three jumbo shrimps and two scallops, roasted cherry tomatoes and roasted green peppers on a skillet with flaming Sambuca"
    },
    {
        category: "dinner-antipasti",
        name: "Add-ons",
        price: "",
        description: "Chicken $7, shrimp (3 for $11), or scallops (3 for $11)"
    },

    // Dinner Pasta & Risotto
    {
        category: "dinner-pasta-risotto",
        name: "",
        price: "",
        description: "Gluten free options available"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Linguine Pescatore",
        price: "$39",
        description: "Two shrimps, two scallops, and mussels in a pomodoro sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne alla Vodka",
        price: "$29",
        description: "Onions, garlic, Parmigiano, and pancetta in a rosé cream sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne Florentina",
        price: "$29 V",
        description: "Traditional Italian pesto, mushrooms, peas and cherry tomatoes in a bechamel crema sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Linguine Vongole",
        price: "$33",
        description: "Little neck clams, roasted cherry tomatoes and fresh herbs in a garlic olive oil and white wine sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Tagliatelle alla Bolognese",
        price: "$29",
        description: "Beef, pork and veal in a homemade Italian-style meat sauce on egg noodle pasta"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Linguine with Meatballs",
        price: "$30",
        description: "Three homemade meatballs in a pomodoro sauce with Parmigiano"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Risotto Funghi",
        price: "$30 GF",
        description: "Porcini, portobello and cremini mushrooms finished with 12-year-aged Parmigiano"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Risotto ai Frutti di Mare",
        price: "$41",
        description: "Two shrimps, two scallops, mussels and clams in a rosé sauce "
    },
    {
        category: "dinner-pasta-risotto",
        name: "Nonna's Homemade Gnocchi",
        price: "$29 V",
        description: "Choice of rosé, tomato, pesto cream or meat sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Spaghetti Carbonara",
        price: "$28",
        description: "Guanciale, Pecorino cheese and egg yolk"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Rigatoni alla Julian",
        price: "$32",
        description: "Sausage, peas, cherry tomatoes in Alfredo sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Add-on",
        price: "",
        description: "Chicken $7"
    },

    // Dinner Entree
    
    {
        category: "dinner-entree",
        name: "Nonna's Lasagna",
        price: "$32",
        description: "Classic homemade three-meat lasagna topped with bechamel sauce and served with a choice of Caesar or house salad"
    },
    {
        category: "dinner-entree",
        name: "Veal or Halal Chicken Parmigiana",
        price: "$40",
        description: "Breaded cutlets, mozzarella cheese and pomodoro sauce with a side of tagliatelle in a rosé sauce"
    },
    {
        category: "dinner-entree",
        name: "Halibut",
        price: "$43",
        description: "Pan-seared halibut served with roasted cherry tomatoes in an olive garlic oil with a choice of seasonal vegetables and potatoes or a side of penne in a pomodoro sauce"
    },
    {
        category: "dinner-entree",
        name: "Bistecca di Carne",
        price: "$47",
        description: "14 oz AAA bone-in ribeye steak topped with our homemade peppercorn sauce with a side of Parmigiana and fresh herb frites"
    },
    {
        category: "dinner-entree",
        name: "Seafood Platter",
        price: "",
        description: "Ask your server for details"
    },
    {
        category: "dinner-entree",
        name: "Add-ons",
        price: "",
        description: "Shrimps $11, 5oz Nova Scotia lobster tail $14, Parmigiana & herb frites $14"
    },
    // Dinner Pizza
    {
        category: "dinner-pizza",
        name: "",
        price: "",
        description: "Gourmet Italian style 10 inch thin crust"
    },
    {
        category: "dinner-pizza",
        name: "",
        price: "",
        description: "Gluten-free crust available for an additional $4 (dough not made in-house)"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Margherita",
        price: "$20",
        description: "Pomodoro sauce and fior di latte cheese with fresh basil and roasted cherry tomatoes"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Diavola",
        price: "$26",
        description: "Pomodoro sauce, fior di latte cheese, pancetta and spicy salami"
    },
    {
        category: "dinner-pizza",
        name: "Pizza di Parma",
        price: "$25",
        description: "Pomodoro sauce, fior di latte cheese with shaved parmigiano, arugula and prosciutto"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Ragazzi",
        price: "$27",
        description: "Pesto sauce, fior di latte cheese, chicken and roasted cherry tomatoes finished with roasted garlic aioli"
    },
    {
        category: "dinner-pizza",
        name: "Vegetarian Options Available",
        price: "",
        description: ""
    },
    // Dinner Gluten-Free
    {
        category: "dinner-gluten-free",
        name: "Risotto Di Mare",
        price: "$32",
        description: "Shrimps, scallops, mussels, Pomodoro sauce"
    },
    {
        category: "dinner-gluten-free",
        name: "Penne Primavera",
        price: "$21",
        description: "Mushrooms, peppers, Pomodoro sauce"
    },
    {
        category: "dinner-gluten-free",
        name: "Pizza Semplice",
        price: "$25",
        description: "Pomodoro sauce, mozzarella, mushrooms, peppers (GF crust not made in-house). Ask server for add-ons."
    },
    // Dinner Vegetarian
    {
        category: "dinner-vegetarian",
        name: "Mushroom Risotto",
        price: "$27",
        description: "Oyster, Porcini and Cremini mushrooms"
    },
    {
        category: "dinner-vegetarian",
        name: "Nonna's Homemade Gnocchi",
        price: "$24",
        description: "Choice of rosé, tomato, or pesto"
    },
    {
        category: "dinner-vegetarian",
        name: "Penne Florentina",
        price: "$23",
        description: "Traditional Italian pesto, mushrooms, cherry tomatoes, bechamel cream"
    },
    // Dinner Vegan
    {
        category: "dinner-vegan",
        name: "Grilled Eggplant Parmigiana",
        price: "$24",
        description: "Two slices eggplant, Pomodoro sauce, vegan mozzarella with side salad"
    },
];

// Helper function to display menu items in a specified content container
function displayItems(items, menuContent) {
    menuContent.classList.add('hidden'); // Apply hidden class to start fade out

    setTimeout(() => {
        menuContent.innerHTML = '';

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');
            itemElement.innerHTML = `
                <h3>${item.name} ${item.price}</h3>
                <p>${item.description}</p>
            `;
            menuContent.appendChild(itemElement);
        });

        menuContent.classList.remove('hidden'); // Remove hidden class to fade in
    }, 300); // Adjust the duration as needed
}

// Helper function to set up menu categories and event listeners
function setupMenu(menuContainer, menuContent) {
    const categoryButtons = menuContainer.querySelectorAll('.category-button');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');
            const itemsToDisplay = menuItems.filter(item => item.category === selectedCategory);
            displayItems(itemsToDisplay, menuContent);
        });
    });

    // Display default category
    const defaultCategoryButton = categoryButtons[0]; // Assumes the first button is the default category
    defaultCategoryButton.click(); // Simulate a click to display default items
}

// Set up menu sections
const lunchMenuContainer = document.querySelector('#lunch .menu-container');
const lunchMenuContent = document.querySelector('#lunch .menu-content');
setupMenu(lunchMenuContainer, lunchMenuContent);

const dinnerMenuContainer = document.querySelector('#dinner .menu-container');
const dinnerMenuContent = document.querySelector('#dinner .menu-content');
setupMenu(dinnerMenuContainer, dinnerMenuContent);

const drinksMenuContainer = document.querySelector('#drinks .menu-container');
const drinksMenuContent = document.querySelector('#drinks .menu-content');
setupMenu(drinksMenuContainer, drinksMenuContent);

// JavaScript code

const lunchButton = document.getElementById('lunch-button');
const dinnerButton = document.getElementById('dinner-button');
const drinksButton = document.getElementById('drinks-button');

const lunchSection = document.getElementById('lunch');
const dinnerSection = document.getElementById('dinner');
const drinksSection = document.getElementById('drinks');

// Function to update button selection
function updateButtonSelection(selectedButton) {
    [lunchButton, dinnerButton, drinksButton].forEach(button => {
        if (button === selectedButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Function to fade in a section
function fadeIn(section) {
    section.style.display = 'block';
    section.style.opacity = '0';
    const interval = setInterval(() => {
        if (parseFloat(section.style.opacity) < 1) {
            section.style.opacity = (parseFloat(section.style.opacity) + 0.1).toString();
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// Function to fade out a section
function fadeOut(section) {
    section.style.opacity = '1';
    const interval = setInterval(() => {
        if (parseFloat(section.style.opacity) > 0) {
            section.style.opacity = (parseFloat(section.style.opacity) - 0.1).toString();
        } else {
            section.style.display = 'none';
            clearInterval(interval);
        }
    }, 30);
}

// Default: Only Lunch section is visible, and Lunch button is selected
lunchSection.style.display = 'block';
dinnerSection.style.display = 'none';
drinksSection.style.display = 'none';
updateButtonSelection(lunchButton);

// Add event listeners to the buttons
lunchButton.addEventListener('click', () => {
    fadeOut(dinnerSection);
    fadeOut(drinksSection);
    setTimeout(() => {
        fadeIn(lunchSection);
        updateButtonSelection(lunchButton);
    }, 300);
});

dinnerButton.addEventListener('click', () => {
    fadeOut(lunchSection);
    fadeOut(drinksSection);
    setTimeout(() => {
        fadeIn(dinnerSection);
        updateButtonSelection(dinnerButton);
    }, 300);
});

drinksButton.addEventListener('click', () => {
    fadeOut(lunchSection);
    fadeOut(dinnerSection);
    setTimeout(() => {
        fadeIn(drinksSection);
        updateButtonSelection(drinksButton);
    }, 300);
});
