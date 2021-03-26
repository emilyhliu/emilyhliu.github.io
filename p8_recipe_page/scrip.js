const recipe = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "author": "John Smith",
    "cookTime": "PT1H",
    "datePublished": "2009-05-08",
    "description": "This is a homemade recipe for any avocado lovers. Easily cooked in 30 mins, bringing a creamy pasta that everyone will love! ",
    "image": "image/pasta.jpg",
    "recipeIngredient": [
      "\n Ingredients",
      "\n Pasta",
      "\n 1 - 2 Avocado",
      "\n 1/2 cup of milk",
      "\n 1/4 cup of heavy cream",
      "\n 1/2 onion",
      "\n 2 cloves of garlic",
      "\n 2 - 3 mushrooms",
      "\n 200g sausage",
      "\n 100g cheese",
      "\n 50g butter",
    ],

    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/Comment",
      "userInteractionCount": "140"
    },
    "name": "Avocado Pasta",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "240 calories",
      "fatContent": "9 grams fat"
    },
    "prepTime": "Prep Time: 30 minutes",
    "recipeInstructions": [
    "\n Instructions",
    "\n 1. Add avocado, milk and heacy cream into the mixer. Season with salt and pepper and mix well" ,
    "\n 2. In the pot, start cooking the pasta (add some salt into the water to flavor it)",
    "\n 3. Heat the pan and add butter. After the butter is melted, add in the garlic and onion, stir until half cooked. Then add the mushroom and sausage, fry until cooked. Season with salt and pepper.",
    "\n 4. Add the mixed avocado sause and cooked pasta into the pan. Mix well",
    "\n 5. Top with some shredded cheese and serve!",
    ],

    "recipeYield": "Servings: 1-2",
    "suitableForDiet": "https://schema.org/LowFatDiet"
  }
  
  const titleElement = document.getElementById("title");
  
  titleElement.innerText = recipe.name;

  
  document.getElementById("description").innerText = recipe.description;

  document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;

  document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;

  document.getElementById("prepTime").innerText = recipe.prepTime;

  document.getElementById("recipeInstructions").innerText = recipe.recipeInstructions;

  document.getElementById("recipeYield").innerText = recipe.recipeYield;