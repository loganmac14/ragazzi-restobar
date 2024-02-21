const menuItems = [
    // Lunch Antipasti
    {
        category: "lunch-antipasti",
        name: "Nonna's Handmade Focaccia",
        price: "$8",
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
        name: "Caesar",
        price: "$13",
        description: "Smoky bacon, toasted homemade croutons, classic Caesar dressing and Parmigiano"
    },
    {
        category: "lunch-antipasti",
        name: "Polpette",
        price: "$18",
        description: "Three homemade meatballs stuffed with pork, veal, beef and ricotta cheese, finished in our homemade pomodoro sauce, topped with Parmigiano and served with two crostini"
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
        price: "$17 GF",
        description: "Fresh herbs in your choice of white wine or pomodoro sauce"
    },
    {
        category: "lunch-antipasti",
        name: "Antipasto Board",
        price: "$26",
        description: "Cacciatore salami, prosciutto, Parmigiano, pecorino, olives and Italian medley"
    },
    {
        category: "lunch-antipasti",
        name: "Bruschetta",
        price: "$13 V",
        description: "4 pieces of grilled crostini with fresh tomatoes, basil and olive oil"
    },
    {
        category: "lunch-antipasti",
        name: "Shrimp & Scallop Sambuca",
        price: "$22",
        description: "Jumbo shrimp and scallops, tomatoes and peppers on a skillet with flaming Sambuca"
    },
    {
        category: "lunch-antipasti",
        name: "Salad Add-ons",
        price: "",
        description: "Chicken $6, shrimp (3 for $9), or scallops (3 for $9)"
    },

    // Lunch Pasta & Risotto
    {
        category: "lunch-pasta-risotto",
        name: "",
        price: "",
        description: "Gluten free options available"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Linguine Pescatore",
        price: "$33",
        description: "Shrimps, scallops, and mussels in a pomodoro sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Penne alla Vodka",
        price: "$20",
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
        name: "Penne Fantasia (Spicy)",
        price: "$21 V",
        description: "Grilled sausage, peas and peppers served in a rosé"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Tagliatelle alla Bolognese",
        price: "$22",
        description: "Beef, pork and veal in a homemade Italian-style meat sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Linguine with Meatballs",
        price: "$21",
        description: "Homemade meatballs in a pomodoro sauce with Parmigiano"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Lobster Tagliatelle",
        price: "$34",
        description: "5oz Lobster tail, cherry tomatoes, garlic, fennel and brandy in a cream sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Risotto di Mare",
        price: "$32 GF",
        description: "Shrimps, scallops and mussels in a pomodoro sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Nonna's Homemade Gnocchi",
        price: "$24 V",
        description: "Choice of rosé, tomato or meat sauce"
    },
    {
        category: "lunch-pasta-risotto",
        name: "Spaghetti Carbonara",
        price: "$24",
        description: "Guanciale, pecorino cheese and egg yolk"
    },
    // Lunch Entree
    {
        category: "lunch-entree",
        name: "Nonna's Lasagna",
        price: "$25",
        description: "Classic homemade three-meat lasagna topped with bechamel sauce and served with Caesar salad"
    },
    {
        category: "lunch-entree",
        name: "Chicken or Veal Parmigiana",
        price: "$31",
        description: "Breaded cutlets, mozzarella cheese and pomodoro sauce with a side of tagliatelle in a rosé sauce"
    },
    {
        category: "lunch-entree",
        name: "Pesce e Fritto",
        price: "$27",
        description: "Ragazzi-style fish and chips, basil and white wine battered haddock served with homemade frittes"
    },

    // Lunch Sandwich
    {
        category: "lunch-sandwich",
        name: "",
        price: "",
        description: "Available 11am - 4pm, with choice of side of frittes, soup or salad"
    },
    {
        category: "lunch-sandwich",
        name: "Panini Italiano",
        price: "$17",
        description: "Prosciutto, salami, roasted peppers, provolone, arugula and garlic aioli served on focaccia"
    },
    {
        category: "lunch-sandwich",
        name: "Panini Caprese",
        price: "$16",
        description: "Bocconcini cheese, arugula, balsamic reduction, tomatoes and herb butter served on focaccia"
    },
    {
        category: "lunch-sandwich",
        name: "Amalfi Chicken Panini",
        price: "$17",
        description: "Chicken, tomatoes, pancetta, arugula, provolone and garlic aioli served on focaccia"
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
    {
        category: "lunch-pizza",
        name: "Pizza Ragazzi",
        price: "$20",
        description: "Pomodoro sauce, fior di latte cheese, sausage, green olives, feta cheese, fresh basil and peppers"
    },

    // Lunch Sides
    {
        category: "lunch-sides",
        name: "Frittes with Parmigiano and Thyme",
        price: "$9",
        description: ""
    },
    {
        category: "lunch-sides",
        name: "5oz Nova Scotia Lobster Tail",
        price: "$15",
        description: ""
    },
    // Lunch Gluten-Free
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
        name: "Chocolate Almond Torte",
        price: "$12",
        description: "Two layers of moist chocolate almond torte (made with gluten-free flour) cradling a creamy almond filling and topped with a smooth chocolate almond mousse. You won't believe it's gluten-free!"
    },
    {
        category: "lunch-dolce",
        name: "Tiramisu Cake",
        price: "$12",
        description: 'The name means "pick me up" and it certainly will! Espresso drenched cake layers enhanced with a mouth watering mascarpone cheese mousse, topped with a dusting of cocoa sugar. Mama Mia!'
    },
    {
        category: "lunch-dolce",
        name: "Coffee Crunch Bar",
        price: "$12",
        description: "We give you a crunchy milk chocolate and coffee base, followed by a coffee no-bake cheesecake filled with COFFEE CRISP pieces. The third layer is a chocolate glaze, more COFFEE CRISP and milk chocolate drizzle."
    },
    {
        category: "lunch-dolce",
        name: "After-Dinner Delight Cheeseboard",
        price: "$19",
        description: "Served with specialty cheeses. Ask your server for more information"
    },
    {
        category: "lunch-dolce",
        name: "Affogato",
        price: "$12",
        description: "Vanilla gelato, espresso and biscotti"
    },
    {
        category: "lunch-dolce",
        name: "Cheesecake of the Moment",
        price: "$12",
        description: "Big enough to warrant its own area code; the Tower of Power is a jumbo-sized New York style cheesecake enhance with a subtle vanilla flavour"
    },
    // Lunch Specialty Coffee
    {
        category: "lunch-specialty-coffee",
        name: "Ragazzi Coffee",
        price: "$11",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Spanish Coffee",
        price: "$11",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Irish Coffee",
        price: "$11",
        description: ""
    },
    {
        category: "lunch-specialty-coffee",
        name: "Monte Cristo Coffee",
        price: "$11",
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
    {
        category: "lunch-specialty-coffee",
        name: "Ports & Cognacs",
        price: "",
        description: "Ask your server for details"
    },
    // Dinner Antipasti
    {
        category: "dinner-antipasti",
        name: "Nonna's Handmade Focaccia",
        price: "$9",
        description: "Served with Tuscan bomba oil"
    },
    {
        category: "dinner-antipasti",
        name: "Caprese Salad",
        price: "$18 V",
        description: "Fresh mozzarella cheese, fresh ripe tomatoes and Sicilian olives in Tuscan bomba oil with balsamic glaze"
    },
    {
        category: "dinner-antipasti",
        name: "Caesar Salad",
        price: "$14",
        description: "Smoky bacon, toasted homemade croutons, classic Caesar dressing and Parmigiano"
    },
    {
        category: "dinner-antipasti",
        name: "Calamari Fritti",
        price: "$19",
        description: "Flash-fried, tossed with herbs with pomodoro sauce"
    },
    {
        category: "dinner-antipasti",
        name: "Mussels",
        price: "$18",
        description: "Fresh herbs in your choice of white wine or pomodoro sauce"
    },
    {
        category: "dinner-antipasti",
        name: "Antipasto Board",
        price: "$31",
        description: "Cacciatore salami, spicy salami, prosciutto, capocollo, fior di latte, aged Parmigiano, asiago, Italian pickled vegetable medley, served with three crostini"
    },
    {
        category: "dinner-antipasti",
        name: "Polpette",
        price: "$20",
        description: "Three homemade meatballs stuffed with pork, veal, beef and ricotta cheese, finished in our homemade pomodoro sauce, topped with Parmigiano and served with two crostini"
    },
    {
        category: "dinner-antipasti",
        name: "Bruschetta",
        price: "$16 V",
        description: "Four pieces of grilled crostini with fresh tomatoes, basil and olive oil"
    },
    {
        category: "dinner-antipasti",
        name: "Shrimp & Scallop Sambuca",
        price: "$26",
        description: "Three jumbo shrimps and two scallops, roasted cherry tomatoes and roasted green peppers on a skillet with flaming Sambuca"
    },
    {
        category: "dinner-antipasti",
        name: "Salad Add-ons",
        price: "",
        description: "Chicken $6, shrimp (3 for $9), or scallops (3 for $9)"
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
        price: "$36",
        description: "Two shrimps, two scallops, and mussels in a pomodoro sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne alla Vodka",
        price: "$26",
        description: "Onions, garlic, Parmigiano, and pancetta in a rosé cream sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne Florentina",
        price: "$27 V",
        description: "Traditional Italian pesto, mushrooms, peas and cherry tomatoes in a bechamel crema sauce (add chicken for $5)"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Tagliatelle alla Bolognese",
        price: "$27",
        description: "Beef, pork and veal in a homemade Italian-style meat sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Linguine with Meatballs",
        price: "$27",
        description: "Two homemade meatballs in a pomodoro sauce with Parmigiano"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Risotto Funghi",
        price: "$28 GF",
        description: "Porcini, portobello and cremini mushrooms finished with Parmigiano"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne Fantasia",
        price: "$27",
        description: "Penne with grilled sausage, peas and peppers, served with a rosé sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Spaghetti Carbonara",
        price: "$26",
        description: "Guanciale, Pecorino cheese and egg yolk"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Nonna's Homemade Gnocchi",
        price: "$27 V",
        description: "Choice of rosé, tomato or meat sauce"
    },
    {
        category: "dinner-pasta-risotto",
        name: "Penne al Forno",
        price: "$27",
        description: "Ragazzi-style mac’n’cheese with pancetta and peas in a béchamel cream sauce"
    },

    // Dinner Entree
    {
        category: "dinner-entree",
        name: "Nonna's Lasagna",
        price: "$27",
        description: "Classic homemade three-meat lasagna topped with bechamel sauce and served with a choice of salad"
    },
    {
        category: "dinner-entree",
        name: "Chicken or Veal Parmigiana",
        price: "$35",
        description: "Breaded cutlets, mozzarella cheese and pomodoro sauce with a side of tagliatelle in a rosé sauce"
    },
    {
        category: "dinner-entree",
        name: "Surf n Turf",
        price: "$49",
        description: "10oz AAA striploin in a red wine mushroom sauce and a 5oz lobster tail Seasonal vegetable add-ons: sauteed mushrooms ($5), 3 shrimps ($9)"
    },
    {
        category: "dinner-entree",
        name: "Seafood Platter",
        price: "$50",
        description: "Cold seafood: six oysters, five shrimps, lobster tail, with a half bowl of warm mussels in your choice of white wine or pomodoro sauce, served with four warm crostini"
    },
    {
        category: "dinner-entree",
        name: "Pesce e Fritto (Italian Style Fish and Chips)",
        price: "$27",
        description: "Ragazzi style fish and chips, basil and white wine battered, served with homemade frites"
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
        name: "Pizza Margherita",
        price: "$18",
        description: "Pomodoro sauce and fior di latte cheese with fresh basil and sliced tomatoes"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Diavola",
        price: "$24",
        description: "Pomodoro sauce, fior di latte cheese, pancetta and spicy salami"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Vegetariana",
        price: "$20 V",
        description: "Pomodoro sauce, fior di latte cheese, peppers, mushrooms, peas, onions and green olives"
    },
    {
        category: "dinner-pizza",
        name: "Pizza Ragazzi",
        price: "$24",
        description: "Pomodoro sauce, fior di latte cheese, grilled sausage, green olives, feta cheese, fresh basil and peppers"
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
        name: "Chocolate Almond Torte",
        price: "$12",
        description: "Two layers of moist chocolate almond torte (made with gluten-free flour) cradling a creamy almond filling and topped with a smooth chocolate almond mousse. You won't believe it's gluten-free!"
    },
    {
        category: "dinner-dolce",
        name: "Tiramisu Cake",
        price: "$12",
        description: 'The name means "pick me up" and it certainly will! Espresso drenched cake layers enhanced with a mouth watering mascarpone cheese mousse, topped with a dusting of cocoa sugar. Mama Mia!'
    },
    {
        category: "dinner-dolce",
        name: "Coffee Crunch Bar",
        price: "$12",
        description: "We give you a crunchy milk chocolate and coffee base, followed by a coffee no-bake cheesecake filled with COFFEE CRISP pieces. The third layer is a chocolate glaze, more COFFEE CRISP and milk chocolate drizzle."
    },
    {
        category: "dinner-dolce",
        name: "After-Dinner Delight Cheeseboard",
        price: "$19",
        description: "Served with specialty cheeses. Ask your server for more information"
    },
    {
        category: "dinner-dolce",
        name: "Affogato",
        price: "$12",
        description: "Vanilla gelato, espresso and biscotti"
    },
    {
        category: "dinner-dolce",
        name: "Cheesecake of the Moment",
        price: "$12",
        description: "Big enough to warrant its own area code; the Tower of Power is a jumbo-sized New York style cheesecake enhance with a subtle vanilla flavour"
    },
    // Dinner Specialty Coffee
    {
        category: "dinner-specialty-coffee",
        name: "Ragazzi Coffee",
        price: "$11",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Spanish Coffee",
        price: "$11",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Irish Coffee",
        price: "$11",
        description: ""
    },
    {
        category: "dinner-specialty-coffee",
        name: "Monte Cristo Coffee",
        price: "$11",
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
    {
        category: "dinner-specialty-coffee",
        name: "Ports & Cognacs",
        price: "",
        description: "Ask your server for details"
    },
    // Drinks Cocktails
    {
        category: "drinks-cocktails",
        name: "Alla Laura Espresso Martini",
        price: "$15",
        description: "Grey Goose Vodka, Kahlua, Espresso"
    },
    {
        category: "drinks-cocktails",
        name: "La Bella Sangria",
        price: "$15",
        description: "(White or Red) Pinot Grigio or Cabernet"
    },
    {
        category: "drinks-cocktails",
        name: "Negroni Petricola",
        price: "$16",
        description: "Bombay Gin, Vermouth, Campari"
    },
    {
        category: "drinks-cocktails",
        name: "Blueberry Passione",
        price: "$15",
        description: "Barrelling Tide Vodka, Barrelling Tide Blueberry Liqueur, Lemon, Soda, Blueberries, Mint"
    },
    {
        category: "drinks-cocktails",
        name: "Gin Gin Mule",
        price: "$15",
        description: "Bombay Gin, Ginger Beer"
    },
    {
        category: "drinks-cocktails",
        name: "La Ferrari Aperol Spritz",
        price: "$15",
        description: "Aperol, Champagne"
    },
    {
        category: "drinks-cocktails",
        name: "Limoncello Mojito",
        price: "$15",
        description: "Limoncello, Rum, Simple Syrup, Mint"
    },
    {
        category: "drinks-cocktails",
        name: "Bloody Caesar Alla Tony",
        price: "$15",
        description: "Ragazzi-Style Caesar, Celery, Lemon, Olives, Sausage, Beans"
    },
    {
        category: "drinks-cocktails",
        name: "Ragazzi Strawberry Mango Daiquiri",
        price: "$15",
        description: "Strawberry, Mango, Rum, Simple Syrup, and Lots of Love"
    },
    {
        category: "drinks-cocktails",
        name: "La Cosmo Ragazzi",
        price: "$15",
        description: "Ciroc Peach Vodka, Cointreau"
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
        name: "Pinot Grigio",
        price: "$14 / $16 / $50",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Chardonnay",
        price: "$14 / $16 / $51",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Rose",
        price: "$11 / $13 / $47",
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
        name: "Prosecco",
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
        name: "Valley SB Sauvignon Blanc",
        price: "$58",
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
        name: "Moselland Ars Vitis Riesling",
        price: "$82",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Straccali PG Pinot Grigio",
        price: "$61",
        description: ""
    },
    {
        category: "drinks-white",
        name: "Alois Lagedar Chardonnay",
        price: "$125",
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
        name: "Cabernet Sauvignon",
        price: "$14 / $16 / $52",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Pinot Noir",
        price: "$13 / $16 / $49",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Chianti",
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
        name: "Carpineto Toscana Cabernet Sauvignon",
        price: "$80",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Tedeschi Amarone",
        price: "$120",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Tommasi Ripasso",
        price: "$62",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Antinori Rosso Di Montalcino",
        price: "$82",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Allegrini Valpolicella",
        price: "$58",
        description: ""
    },
    {
        category: "drinks-red",
        name: "Brunello Di Montalcino Il Poggione",
        price: "$145",
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
        name: "Barolo Leondardo's Pick",
        price: "$130",
        description: ""
    },
    // Drinks Champagne
    {
        category: "drinks-champagne",
        name: "Veuve Clicquot",
        price: "$175",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "Dom Perignon",
        price: "$490",
        description: ""
    },
    {
        category: "drinks-champagne",
        name: "Möet & Chandon Imperial",
        price: "$225",
        description: ""
    },

    // Drinks Cognac
    {
        category: "drinks-cognac",
        name: "Hennessy VSOP",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-cognac",
        name: "Remy Martin VSOP",
        price: "$19",
        description: ""
    },
    {
        category: "drinks-cognac",
        name: "Hennessy XO",
        price: "$35",
        description: ""
    },

    // Drinks Single Malts
    {
        category: "drinks-single-malts",
        name: "Lagavulin 16 Years",
        price: "$21",
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
        name: "The Macallan Gold",
        price: "$18",
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
        price: "$14",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "Glenfiddich 12 Years",
        price: "$14",
        description: ""
    },
    {
        category: "drinks-single-malts",
        name: "The Balvenie 12 Years",
        price: "$15",
        description: ""
    },
    // Drinks Rum
    {
        category: "drinks-rum",
        name: "Sea Fever",
        price: "$10",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "El Dorado 12 Years",
        price: "$15",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "El Dorado 15 Years",
        price: "$18",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "Havana Reserva Club",
        price: "$10",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "Diplomatico",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-rum",
        name: "Ron Zacapa 23 Years",
        price: "$18",
        description: ""
    },

    // Drinks Tequila
    {
        category: "drinks-tequila",
        name: "Patron Anejo",
        price: "$24",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Patron Silver",
        price: "$21",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Don Julio Reposado",
        price: "$16",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Casamigos",
        price: "$16",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "1800 Reposado",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-tequila",
        name: "Hornitos",
        price: "$10",
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
        price: "$11",
        description: ""
    },
    {
        category: "drinks-scotch",
        name: "Black Label",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-scotch",
        name: "Gold Label Reserve",
        price: "$15",
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
        name: "Hendrick's",
        price: "$13",
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
        name: "Buffalo Trace",
        price: "$12",
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
        name: "Belvedere",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Ciroc Blue",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Tito's",
        price: "$12",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Ciroc Peach",
        price: "$13",
        description: ""
    },
    {
        category: "drinks-vodka",
        name: "Skeleton Vodka",
        price: "$15",
        description: ""
    },
    // Drinks Beer
    {
        category: "drinks-beer",
        name: "Corona",
        price: "$9",
        description: ""
    },
    {
        category: "drinks-beer",
        name: "Birra Moretti",
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
        price: "$8",
        description: ""
    },
    // Drinks Beverages
    {
        category: "drinks-beverages",
        name: "San Pellegrino (500ml)",
        price: "$6",
        description: ""
    },
    {
        category: "drinks-beverages",
        name: "Aqua Panna (500ml)",
        price: "$6",
        description: ""
    },
    {
        category: "drinks-beverages",
        name: "Pop",
        price: "$4",
        description: ""
    },
    {
        category: "drinks-beverages",
        name: "Aranciata/Fanta",
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
        name: "Cappuccino",
        price: "$5",
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
