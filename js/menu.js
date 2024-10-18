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
    {
        category: "lunch-vegan",
        name: "Vegan Bowl",
        price: "$22",
        description: "Rice, roasted carrots, cauliflower, kidney beans, chickpeas and peas, finished with a creamy, herby Tahini dressing"
    },
    // Lunch Dolce
    {
        category: "lunch-dolce",
        name: "Torta al Cioccolato with Pecans",
        price: "$14",
        description: ""
    },
    {
        category: "lunch-dolce",
        name: "Carrot Cake with Cream Cheese",
        price: "$14",
        description: ''
    },
    {
        category: "lunch-dolce",
        name: "Tiramisu Cake",
        price: "$14",
        description: ""
    },
    {
        category: "lunch-dolce",
        name: "Skor Brownie",
        price: "$14",
        description: ""
    },
    {
        category: "lunch-dolce",
        name: "Vanilla Ice Cream",
        price: "$5",
        description: ""
    },
    {
        category: "lunch-dolce",
        name: "Affogato",
        price: "$5",
        description: ""
    },
    {
        category: "lunch-dolce",
        name: "A Dessert Trio",
        price: "$25",
        description: "Skor brownie, torta al cioccolato and crème brûlée"
    },
    {
        category: "lunch-dolce",
        name: "Cheeseboard",
        price: "$27",
        description: ""
    },
    // Lunch Specialty Coffee
    {
        category: "lunch-specialty-coffee",
        name: "Ragazzi Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Spanish Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Irish Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Monte Cristo Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Flavoured Coffee",
        price: "$6",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Blueberry Tea",
        price: "$17",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Latte Macchiato",
        price: "$6",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Espresso",
        price: "$4",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Cappuccino",
        price: "$5",
        description: ""
    },
    // Dinner Antipasti
    {
        category: "dinner-antipasti",
        name: "Nonna's Handmade Focaccia",
        price: "$10",
        description: "Served with Tuscan bomba oil"
    },
    {
        category: "dinner-antipasti",
        name: "Caprese Salad",
        price: "$19 V",
        description: "Fresh mozzarella cheese, fresh ripe tomatoes and Sicilian olives in Tuscan bomba oil with balsamic glaze"
    },
    {
        category: "dinner-antipasti",
        name: "Caesar Salad",
        price: "$15",
        description: "Smoky bacon, toasted homemade croutons, classic Caesar dressing and Parmigiano"
    },
    {
        category: "dinner-antipasti",
        name: "Polpette",
        price: "$21",
        description: "Three homemade meatballs stuffed with pork, veal, beef and ricotta cheese, finished in our homemade pomodoro sauce, topped with Parmigiano and served with two crostini"
    },
    {
        category: "dinner-antipasti",
        name: "Calamari Fritti",
        price: "$21",
        description: "Flash-fried, tossed with herbs with pomodoro sauce"
    },
    {
        category: "dinner-antipasti",
        name: "Mussels",
        price: "$19",
        description: "Fresh herbs in your choice of white wine or pomodoro sauce"
    },
    {
        category: "dinner-antipasti",
        name: "Antipasto Board",
        price: "$33",
        description: "Cacciatore salami, spicy salami, prosciutto, capocollo, fior di latte, aged Parmigiano, asiago, Italian pickled vegetable medley, served with three crostini"
    },
    {
        category: "dinner-antipasti",
        name: "Bruschetta",
        price: "$18 V",
        description: "Four pieces of grilled crostini with fresh tomatoes, basil and olive oil"
    },
    {
        category: "dinner-antipasti",
        name: "Shrimp & Scallop Sambuca",
        price: "$28",
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
        price: "$38",
        description: "Two shrimps, two scallops, and mussels in a pomodoro sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne alla Vodka",
        price: "$28",
        description: "Onions, garlic, Parmigiano, and pancetta in a rosé cream sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne Florentina",
        price: "$28 V",
        description: "Traditional Italian pesto, mushrooms, peas and cherry tomatoes in a bechamel crema sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Linguine Vongole",
        price: "$32",
        description: "Little neck clams, roasted cherry tomatoes and fresh herbs in a garlic olive oil and white wine sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Tagliatelle alla Bolognese",
        price: "$28",
        description: "Beef, pork and veal in a homemade Italian-style meat sauce on egg noodle pasta"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Linguine with Meatballs",
        price: "$29",
        description: "Three homemade meatballs in a pomodoro sauce with Parmigiano"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Risotto Funghi",
        price: "$29 GF",
        description: "Porcini, portobello and cremini mushrooms finished with 12-year-aged Parmigiano"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Risotto ai Frutti di Mare",
        price: "$40",
        description: "Two shrimps, two scallops, mussels and clams in a rosé sauce "
    },
    {
        category: "dinner-pasta-risotto",
        name: "Nonna's Homemade Gnocchi",
        price: "$28 V",
        description: "Choice of rosé, tomato, pesto cream or meat sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Spaghetti Carbonara",
        price: "$27",
        description: "Guanciale, Pecorino cheese and egg yolk"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Mini Cannelloni alla Riley e Massimo",
        price: "$31",
        description: "Four pieces of Ragazzi-style cannelloni stuffed with Bolognese sauce and bechamel crema sauce, oven-baked and topped with a rosé sauce and finished with Parmigiana"
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
        price: "$31",
        description: "Classic homemade three-meat lasagna topped with bechamel sauce and served with a choice of Caesar or house salad"
    },
    {
        category: "dinner-entree",
        name: "Veal or Halal Chicken Parmigiana",
        price: "$379",
        description: "Breaded cutlets, mozzarella cheese and pomodoro sauce with a side of tagliatelle in a rosé sauce"
    },
    {
        category: "dinner-entree",
        name: "Halibut",
        price: "$42",
        description: "Pan-seared halibut served with roasted cherry tomatoes in an olive garlic oil with a choice of seasonal vegetables and potatoes or a side of penne in a pomodoro sauce"
    },
    {
        category: "dinner-entree",
        name: "Bistecca di Carne",
        price: "$45",
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
        price: "$19",
        description: "Pomodoro sauce and fior di latte cheese with fresh basil and roasted cherry tomatoes"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Diavola",
        price: "$25",
        description: "Pomodoro sauce, fior di latte cheese, pancetta and spicy salami"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Vegetariana",
        price: "$22 V",
        description: "Pomodoro sauce, fior di latte cheese and seasonal vegetables"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Ragazzi",
        price: "$26",
        description: "Pesto sauce, fior di latte cheese, chicken and roasted cherry tomatoes finished with roasted garlic aioli"
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
    {
        category: "dinner-vegan",
        name: "Vegan Bowl",
        price: "$22",
        description: "Rice, roasted carrots, cauliflower, kidney beans, chickpeas and peas, finished with a creamy, herby Tahini dressing"
    },
    // Dinner Dolce
    {
        category: "dinner-dolce",
        name: "Torta al Cioccolato",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-dolce",
        name: "Carrot Cake",
        price: "$13",
        description: ''
    },
    {
        category: "dinner-dolce",
        name: "Tiramisu",
        price: "$14",
        description: ""
    },
    {
        category: "dinner-dolce",
        name: "Skor Brownie",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-dolce",
        name: "Cheesecake",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-dolce",
        name: "A Dessert Trio",
        price: "$25",
        description: "Skor brownie, torta al cioccolato, crème brûlée"
    },
    {
        category: "dinner-dolce",
        name: "Cheese Board",
        price: "$27",
        description: ""
    },
    // Dinner Specialty Coffee
    {
        category: "dinner-specialty-coffee",
        name: "Ragazzi Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Spanish Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Irish Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Monte Cristo Coffee",
        price: "$13",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Flavoured Coffee",
        price: "$6",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Blueberry Tea",
        price: "$17",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Latte Macchiato",
        price: "$6",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Espresso",
        price: "$4",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Cappuccino",
        price: "$5",
        description: ""
    },
    // Drinks Cocktails
    {
        category: "drinks-cocktails",
        name: "Alla Laura Espresso Martini",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-cocktails",
        name: "Sangria (Red or White Wine)",
        price: "$15 / $39 16 oz pitcher",
        description: ""
    },
    {
        category: "drinks-cocktails",
        name: "Negroni Ferrari",
        price: "$15",
        description: "Grey Goose, Vermouth, Campari"
    },
    {
        category: "drinks-cocktails",
        name: "Bloody Caesar Alla Tony",
        price: "$16",
        description: ""
    },
    {
        category: "drinks-cocktails",
        name: "Godfather",
        price: "$15",
        description: "Scotch Whisky and Amaretto, Lemon Peel"
    },
    {
        category: "drinks-cocktails",
        name: "Aperol Spritz",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-cocktails",
        name: "Blueberry Passione",
        price: "$15",
        description: "Vodka, Chambord, Lemon Soda, Blueberries, Mint"
    },
    {
        category: "drinks-cocktails",
        name: "Gin Gin Mule",
        price: "$15",
        description: "Hendricks, Ginger Beer"
    },
    {
        category: "drinks-cocktails",
        name: "Limoncello Mojito",
        price: "$15",
        description: "Luxardo Limoncello, Coldstream Rum, Simple Syrup, Mint"
    },
    {
        category: "drinks-cocktails",
        name: "Ragazzi Strawberry Mango Daiquiri",
        price: "$13",
        description: "Strawberry, Mango, Rum, Simple Syrup, and Lots of Love"
    },
    {
        category: "drinks-cocktails",
        name: "Hugo Spritz",
        price: "$16",
        description: "Prosecco, St. Germain, Simple Syrup"
    },
    
    // Drinks White
    {
        category: "drinks-white",
        name: "",
        price: "",
        description: "5oz / 8oz / Bottle"
    },
    {
        category: "drinks-white",
        name: "Masi Modello Pinot Grigio",
        price: "$14 / $16 / $50",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Rothschild Chardonnay",
        price: "$14 / $16 / $51",
        description: ""
    },
    {
        category: "drinks-white",
        name: "",
        price: "",
        description: "7oz / Bottle"
    },
    {
        category: "drinks-white",
        name: "Ruffino Prosecco",
        price: "$13 / $48",
        description: ""
    },
    {
        category: "drinks-white",
        name: "",
        price: "",
        description: "Bottle"
    },
    {
        category: "drinks-white",
        name: "Kim Crawford Sauvignon Blanc",
        price: "$54",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Masi Masianco Pinot Grigio",
        price: "$61",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Moselland Ars Vitis Riesling",
        price: "$75",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Laroche Les Chanoines Chablis",
        price: "$82",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Bogle Chardonnay",
        price: "$81",
        description: ""
    },
    // Drinks - Red
    {
        category: "drinks-red",
        name: "",
        price: "",
        description: "5oz / 8oz / Bottle"
    },
    {
        category: "drinks-red",
        name: "Morgan Bay Cellars Cabernet Sauvignon",
        price: "$14 / $16 / $52",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Rothschild Pinot Noir",
        price: "$13 / $16 / $49",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Ruffino Chianti",
        price: "$14 / $16 / $50",
        description: ""
    },
    {
        category: "drinks-red",
        name: "",
        price: "",
        description: "Bottle"
    },
    {
        category: "drinks-red",
        name: "Masi Campofiorin",
        price: "$27 (375mL) / $53 (750mL)",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Masi Valpolicella",
        price: "$51",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Cecchi Chianti Classico",
        price: "$61",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Bread & Butter Merlot",
        price: "$69",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Casisano Rosso Di Montalcino",
        price: "$79",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Carpineto Farnito Cabernet Sauvignon",
        price: "$70",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Tenuta Di Toscana Lucente",
        price: "$90",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Masi Costasera Amarone",
        price: "$105",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Fontanafredda Barolo",
        price: "$110",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Brunello Di Montalcino Banfi (2018)",
        price: "$135",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Brunello Di Montalcino Collemattoni (2018)",
        price: "$175",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Brunello Di Montalcino Biondi Santi (2018)",
        price: "$950",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Brunello Poggio Alle Mura Banfi (2018)",
        price: "$375",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Chateau Gillet Bordeaux",
        price: "$115",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Stags' Leap Cabernet Napa Valley",
        price: "$115",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Caymus Vineyards Cabernet",
        price: "$240",
        description: ""
    },
    
    {
        category: "drinks-red",
        name: "Amarone Santico (2018)",
        price: "$425",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Amarone Tedeschi (2019)",
        price: "$155",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Tignanello Antinori (2021)",
        price: "$425",
        description: ""
    },
    // Drinks Champagne
    {
        category: "drinks-champagne",
        name: "Möet & Chandon Imperial",
        price: "$130",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "Veuve Clicquot Brut",
        price: "$150",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "Veuve Clicquot Rose",
        price: "$175",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "",
        price: "",
        description: "Magnum Bottle (1.5 L)"
    },
    {
        category: "drinks-champagne",
        name: "Marques De Murrieta",
        price: "$390",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "Rosso Trevenezie Zenato (2023)",
        price: "$195",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "",
        price: "",
        description: "(Ask your server for exclusive wines)"
    },

    // Drinks Cognac
    {
        category: "drinks-cognac",
        name: "Hennessy VS",
        price: "$14",
        description: ""
    },
    {
        category: "drinks-cognac",
        name: "Hennessy VSOP",
        price: "$17",
        description: ""
    },
    {
        category: "drinks-cognac",
        name: "Hennessy XO",
        price: "$28",
        description: ""
    },
    {
        category: "drinks-cognac",
        name: "Remy Martin VSOP",
        price: "$18",
        description: ""
    },
    // Drinks Single Malts
    {
        category: "drinks-single-malts",
        name: "Lagavulin 16 Years",
        price: "$22",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "Oban 14 Years",
        price: "$20",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "The Singleton 12 Years",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "Anchentoshan 12 Years",
        price: "$11",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "The Balvenie 12 Years",
        price: "$14",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "Glenmorangie Original 10 Years",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "Bowmore 12 Years",
        price: "$15",
        description: ""
    },
    // Drinks Rum
    {
        category: "drinks-rum",
        name: "El Dorado 12 Years",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "El Dorado 15 Years",
        price: "$17",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "Havana Reserva Club 7 Years",
        price: "$10",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "Diplomatico",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "Bumbu",
        price: "$13",
        description: ""
    },
    
    // Drinks Tequila
    {
        category: "drinks-tequila",
        name: "Clase Azul Reposado",
        price: "$30",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Patron Anejo",
        price: "$24",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Patron Silver",
        price: "$20",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Jose Cuervo",
        price: "$9",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Don Julio Reposado",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Casamigos",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "1800 Reposado",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Gran Corralejo Anejo",
        price: "$35",
        description: ""
    },
    
    // Drinks Scotch
    {
        category: "drinks-scotch",
        name: "",
        price: "",
        description: "Johnnie Walker Blended"
    },
    {
        category: "drinks-scotch",
        name: "Red Label",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-scotch",
        name: "Black Label",
        price: "$14",
        description: ""
    },
    {
        category: "drinks-scotch",
        name: "Gold Label Reserve",
        price: "$16",
        description: ""
    },
    // Drinks Gin
    {
        category: "drinks-gin",
        name: "Ungava",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-gin",
        name: "Tanqueray",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-gin",
        name: "Bombay",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-gin",
        name: "Scapegrace",
        price: "$11",
        description: ""
    },
    {
        category: "drinks-gin",
        name: "Hendricks",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-gin",
        name: "Steinhart",
        price: "$10",
        description: ""
    },

    // Drinks Bourbon
    {
        category: "drinks-bourbon",
        name: "Basil Hayden",
        price: "$16",
        description: ""
    },
    {
        category: "drinks-bourbon",
        name: "Woodford Reserve",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-bourbon",
        name: "1792",
        price: "$14",
        description: ""
    },
    {
        category: "drinks-bourbon",
        name: "Bulleit",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-bourbon",
        name: "Buffalo",
        price: "$14",
        description: ""
    },
    {
        category: "drinks-bourbon",
        name: "Maker's Mark",
        price: "$10",
        description: ""
    },

    // Drinks Vodka
    {
        category: "drinks-vodka",
        name: "Grey Goose",
        price: "$11",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Ciroc Peach",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Ciroc Blue",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Tito's",
        price: "$11",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Belvedere",
        price: "$11",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Skeleton",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Ketel One",
        price: "$11",
        description: ""
    },
    // Drinks Grappa
    {
        category: "drinks-grappa",
        name: "Berta Tre Soli Tre (2016)",
        price: "$40",
        description: ""
    },
    {
        category: "drinks-grappa",
        name: "Tignanello Antinori",
        price: "$25",
        description: ""
    },
    {
        category: "drinks-grappa",
        name: "Bottega",
        price: "$13",
        description: ""
    },

    // Drinks Beer
    {
        category: "drinks-beer",
        name: "Peroni",
        price: "$9",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Corona",
        price: "$9",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Heineken",
        price: "$9",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Coors Light",
        price: "$8",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Budweiser",
        price: "$9",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Simply Spiked Lemonade",
        price: "$7",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Coldstream Iced Tea Peach",
        price: "$7",
        description: ""
    },
    // Drinks Beverages
    {
        category: "drinks-beverages",
        name: "San Pellegrino (500ml)",
        price: "$7",
        description: ""
    },
    {
        category: "drinks-beverages",
        name: "Aqua Panna (500ml)",
        price: "$7",
        description: ""
    },
    {
        category: "drinks-beverages",
        name: "Pops",
        price: "$5",
        description: ""
    },

    // Drinks Cafe
    {
        category: "drinks-cafe",
        name: "",
        price: "",
        description: "Served with biscotti"
    },
    {
        category: "drinks-cafe",
        name: "Espresso",
        price: "$4",
        description: ""
    },
    {
        category: "drinks-cafe",
        name: "Café Americano",
        price: "$5",
        description: ""
    },
    {
        category: "drinks-cafe",
        name: "Latte Macchiato",
        price: "$5",
        description: ""
    },
    
    {
        category: "drinks-cafe",
        name: "Cappuccino",
        price: "$5",
        description: ""
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
