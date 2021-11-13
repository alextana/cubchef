import Head from 'next/head'
import Container from 'components/Grid/Container/Container'
import RecipeList from 'components/Recipes/RecipeList'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import Heading from 'components/Typography/Heading'

export default function Home({ users }) {
  console.log(users)
  // temp recipes - readd it to props later
  const recipes = {
    recipes: [
      {
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 5,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 21,
        spoonacularScore: 13,
        healthScore: 0,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 223.49,
        extendedIngredients: [Array],
        id: 637766,
        title: 'Cherry Lime Mojito',
        readyInMinutes: 45,
        servings: 1,
        sourceUrl:
          'https://www.foodista.com/recipe/82DFQ4GB/cherry-lime-mojito',
        image: 'https://spoonacular.com/recipeImages/637766-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Cherry Lime Mojito is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 1 servings. This beverage has <b>184 calories</b>, <b>1g of protein</b>, and <b>0g of fat</b> per serving. For <b>$2.23 per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. 21 person were impressed by this recipe. This recipe from Foodista requires carbonated water, mint leaves, lime, and rum. With a spoonacular <b>score of 9%</b>, this dish is very bad (but still fixable). If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/sparkling-cherry-lime-mojito-punch-560452">Sparkling Cherry Lime Mojito Punch</a>, <a href="https://spoonacular.com/recipes/the-ultimate-mojito-the-sequel-the-cherry-mojito-560082">The Ultimate Mojito… The Sequel – The Cherry Mojito</a>, and <a href="https://spoonacular.com/recipes/crimson-tide-mojito-cherry-mojito-507159">Crimson Tide Mojito (Cherry Mojito)</a>.',
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [],
        instructions:
          'Place cherries, mint, sugar and lime in a tall glass.\n' +
          'Muddle ingredients together at the bottom of the glass.\n' +
          'Add a few ice cubes and pour in the rum.\n' +
          'Fill the glass the rest of the way with carbonated water and serve.',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/cherry-lime-mojito-637766',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: true,
        sustainable: false,
        weightWatcherSmartPoints: 28,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 992,
        spoonacularScore: 96,
        healthScore: 45,
        creditsText: 'Jen West',
        sourceName: 'Pink When',
        pricePerServing: 283.4,
        extendedIngredients: [Array],
        id: 715385,
        title: 'Slow Cooker Baked Potato Soup',
        readyInMinutes: 540,
        servings: 3,
        sourceUrl:
          'http://www.pinkwhen.com/slow-cooker-baked-potato-soup-recipe/',
        image: 'https://spoonacular.com/recipeImages/715385-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Slow Cooker Baked Potato Soup might be just the main course you are searching for. One serving contains <b>618 calories</b>, <b>25g of protein</b>, and <b>29g of fat</b>. For <b>$1.89 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. 991 person have made this recipe and would make it again. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. If you have water, onion, baking potatoes, and a few other ingredients on hand, you can make it. To use up the bacon bits you could follow this main course with the <a href="https://spoonacular.com/recipes/blueberry-buckle-51636">Blueberry Buckle</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-569219">Slow cooker baked potato soup</a>, <a href="https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-731389">Slow Cooker Baked Potato Soup</a>, and <a href="https://spoonacular.com/recipes/slow-cooker-loaded-baked-potato-soup-264744">Slow-Cooker Loaded Baked Potato Soup</a> for similar recipes.',
        cuisines: [],
        dishTypes: [Array],
        diets: [],
        occasions: [Array],
        instructions:
          '<p>Step 1: Coat the cubed potatoes with the flour and then place in the slow cooker.</p><p>Step 2: Add red onion, bouillon cubes, bacon bits, and pepper over the potatoes.</p><p><ins><ins><ins><iframe width="320" height="100" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" id="aswift_0" name="aswift_0" style="max-width: 100%; left: 0px; position: absolute; top: 0px;"></iframe></ins></ins></ins></p><p>Step 3: Pour water over the mixture and cook on low for 8 hours.</p><p>Step 4: Add half-and-half, stirring well, and cook for another 30 minutes to thicken.</p><p>Step 5: Ladle soup into bowls and serve topped with green onion tops, cheddar cheese, and sour cream.</p>',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/slow-cooker-baked-potato-soup-715385',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 7,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 11,
        spoonacularScore: 88,
        healthScore: 41,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 265.76,
        extendedIngredients: [Array],
        id: 643061,
        title: 'Flank Steak with Herbed Salsa',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl:
          'http://www.foodista.com/recipe/GJV558KY/flank-steak-with-herbed-salsa',
        image: 'https://spoonacular.com/recipeImages/643061-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Flank Steak with Herbed Salsa might be just the main course you are searching for. This caveman, gluten free, dairy free, and primal recipe serves 4 and costs <b>$2.69 per serving</b>. One serving contains <b>301 calories</b>, <b>25g of protein</b>, and <b>20g of fat</b>. It can be enjoyed any time, but it is especially good for <b>valentin day</b>. A few people made this recipe, and 11 would say it hit the spot. A mixture of tomatoes, extra virgin olive oil, scallions, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the juice of lemon you could follow this main course with the <a href="https://spoonacular.com/recipes/fruit-juice-pops-433326">Fruit Juice Pops</a> as a dessert. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is typical of Mexican cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is amazing. Similar recipes include <a href="https://spoonacular.com/recipes/herbed-flank-steak-with-tomatoes-81327">Herbed Flank Steak With Tomatoes</a>, <a href="https://spoonacular.com/recipes/southwest-flank-steak-with-salsa-81463">Southwest Flank Steak with Salsa</a>, and <a href="https://spoonacular.com/recipes/flank-steak-with-radish-salsa-44422">Flank Steak With Radish Salsa</a>.',
        cuisines: [Array],
        dishTypes: [Array],
        diets: [Array],
        occasions: [Array],
        instructions:
          '<ol><li>Preheat a grill pan or light a grill.</li><li>In a medium bowl, combine the tomatoes with the scallions, cilantro, Jalapeno, garlic and lemon  lime juice. Season the salsa with salt and freshly ground pepper.</li><li>Season with salt and pepper the flank steak.</li><li>Using a grill pan brush a shadow of oil on the bottom of it. Place the pan over high heat and when hot add the flank steak. Cook until nicely charred outside and medium rare inside. About 3 minutes per side.</li><li>Transfer the steak to a carving board and let rest for 5 minutes.</li><li>Thinly slice the steak across the grain and serve with the herbed salsa.</li></ol>',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/flank-steak-with-herbed-salsa-643061',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 11,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 6,
        spoonacularScore: 77,
        healthScore: 31,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 202.35,
        extendedIngredients: [Array],
        id: 658632,
        title: 'Roasted Pumpkin and Barley Risotto',
        readyInMinutes: 75,
        servings: 3,
        sourceUrl:
          'http://www.foodista.com/recipe/DBX24KMC/roasted-pumpkin-and-barley-risotto',
        image: 'https://spoonacular.com/recipeImages/658632-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Roasted Pumpkin and Barley Risotto takes about <b>1 hour and 15 minutes</b> from beginning to end. This main course has <b>419 calories</b>, <b>18g of protein</b>, and <b>9g of fat</b> per serving. For <b>$2.05 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. This recipe serves 3. A mixture of ginger, garlic, oregano, and a handful of other ingredients are all it takes to make this recipe so tasty. 7 people have made this recipe and would make it again. This recipe is typical of Mediterranean cuisine. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 82%</b>, which is excellent. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/barley-risotto-with-roasted-winter-vegetables-250205">Barley Risotto with Roasted Winter Vegetables</a>, <a href="https://spoonacular.com/recipes/barley-risotto-with-roasted-winter-vegetables-545512">Barley Risotto with Roasted Winter Vegetables</a>, and <a href="https://spoonacular.com/recipes/barley-risotto-with-roasted-winter-vegetables-942844">Barley Risotto with Roasted Winter Vegetables</a>.',
        cuisines: [Array],
        dishTypes: [Array],
        diets: [],
        occasions: [],
        instructions:
          '<ol><li>Cut the pumpkin, clean out the innards and place cut face down in a baking dish with a 1/4 inch of water.</li><li>Bake in a 400 degree oven for 45 minutes until the insides are soft and cooked.</li><li>Scoop out the cooked flesh and puree with the tiniest bit of milk to make a smooth puree.</li><li>Saute the onions and garlic in butter until translucent.</li><li>Add in the barley and toast for a couple of minutes.</li><li>Season with salt, pepper, cumin, thyme and oregano.</li><li>Add two cups of stock and cook until the liquid is almost absorbed.</li><li>Stir in the pumpkin puree.</li><li>Add the rest of the stock in half cup measures and stirring until it is fully absorbed.</li><li>Slowly, the barley will become creamy as the starch releases.</li><li>When you are done with all the stock, remove from heat and stir in the sour cream.</li><li>Serve immediately garnished with mint leaves and a drop of pumkiny-sour cream.</li></ol>',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/roasted-pumpkin-and-barley-risotto-658632',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 7,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 12,
        spoonacularScore: 45,
        healthScore: 6,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 61.12,
        extendedIngredients: [Array],
        id: 637458,
        title: 'Charlotte Potato Salad',
        readyInMinutes: 30,
        servings: 4,
        sourceUrl:
          'http://www.foodista.com/recipe/8MHQWYGF/charlotte-potato-salad',
        image: 'https://spoonacular.com/recipeImages/637458-556x370.jpg',
        imageType: 'jpg',
        summary: `Charlotte Potato Salad might be just the side dish you are searching for. One serving contains <b>242 calories</b>, <b>6g of protein</b>, and <b>18g of fat</b>. This recipe serves 4 and costs 61 cents per serving. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. 12 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>30 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. If you have bacon cubes, dijon mustard, spring onions, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 48%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/green-charlotte-salad-227918">Green Charlotte Salad</a>, <a href="https://spoonacular.com/recipes/charlottes-tortellini-salad-397965">Charlotte's Tortellini Salad</a>, and <a href="https://spoonacular.com/recipes/tiramisu-charlotte-149474">Tiramisu Charlotte</a> for similar recipes.`,
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [Array],
        instructions:
          '<ol><li>Boil the potatoes in salted water until they are just soft.</li><li>Drain and peel off the skin.</li><li>Whisk together lemon juice, mustard, pepper and salt until blended.</li><li>Then start to slowly beat in the olive oil.</li><li>Add in the spring onions.</li><li>Dry fry the bacon cubes over a low heat for 5 minutes.</li><li>Add the bacon cubes to the dressing.</li><li>Thickly slice the warm potatoes and add to a serving bowl.</li><li>Then pour the dressing over.</li><li>Toss to mix through.</li><li>Sprinkle the parsley over before serving.</li></ol>',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/charlotte-potato-salad-637458',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 10,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 39,
        spoonacularScore: 85,
        healthScore: 26,
        creditsText: 'Afrolems',
        license: 'CC BY 4.0',
        sourceName: 'Afrolems',
        pricePerServing: 263.46,
        extendedIngredients: [Array],
        id: 716344,
        title: 'Kenyan Pilau',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: 'http://www.afrolems.com/2014/08/19/kenyan-pilau-recipe/',
        image: 'https://spoonacular.com/recipeImages/716344-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Kenyan Pilau is a <b>gluten free and dairy free</b> main course. This recipe makes 4 servings with <b>464 calories</b>, <b>37g of protein</b>, and <b>5g of fat</b> each. For <b>$2.7 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Head to the store and pick up tomatoes, cumin seed powder, goat meat, and a few other things to make it today. To use up the rice you could follow this main course with the <a href="https://spoonacular.com/recipes/rice-pudding-245761">Rice Pudding</a> as a dessert. A couple people made this recipe, and 39 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 78%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/kenyan-curried-cabbage-11200">Kenyan Curried Cabbage</a>, <a href="https://spoonacular.com/recipes/kenyan-chicken-curry-21155">Kenyan Chicken Curry</a>, and <a href="https://spoonacular.com/recipes/a-taste-of-africa-kenyan-chicken-curry-101836">A Taste of Africa - Kenyan Chicken Curry</a> for similar recipes.',
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [],
        instructions:
          'Season and boil the meat and set aside.Chop and crush all the spices and set aside.Heat up the oil and sauté the onions till its golden brown. Add the meat and allow to brown a little then add the spices, and the rice and the chopped tomatoes.Add the shrimps and add 2 cups of water and reduce the heat and allow to steam.Consistently check it to make sure the water has dried and the rice is soft. Once the rice is soft, increase the heat and stir it to let all the spices be absorbed in the rice.Serve with Kachumbari or any other salad.',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/kenyan-pilau-716344',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 15,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 33,
        spoonacularScore: 65,
        healthScore: 13,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 296.32,
        extendedIngredients: [Array],
        id: 660382,
        title: 'Smoked Salmon Pasta',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl:
          'http://www.foodista.com/recipe/YFCWP7PB/smoked-salmon-pasta',
        image: 'https://spoonacular.com/recipeImages/660382-556x370.jpg',
        imageType: 'jpg',
        summary: `Smoked Salmon Pasta might be just the main course you are searching for. This recipe makes 4 servings with <b>474 calories</b>, <b>21g of protein</b>, and <b>22g of fat</b> each. For <b>$2.96 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. If you have milk, salmon, salt and pepper, and a few other ingredients on hand, you can make it. To use up the milk you could follow this main course with the <a href="https://spoonacular.com/recipes/milky-way-brownie-bites-540544">Milky Way Brownie Bites</a> as a dessert. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A couple people made this recipe, and 33 would say it hit the spot. It is a good option if you're following a <b>pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 68%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/smoked-salmon-pasta-247226">Smoked Salmon Pasta</a>, <a href="https://spoonacular.com/recipes/smoked-salmon-pasta-87836">Smoked Salmon Pasta</a>, and <a href="https://spoonacular.com/recipes/pasta-with-smoked-salmon-270708">Pasta with Smoked Salmon</a> for similar recipes.`,
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [],
        instructions:
          "<ol><li>In saucepan, melt butter over medium heat. </li><li>Saute onion and red pepper about 1 minute. </li><li>Add garlic and saute for another minute or two. Add smoked salmon and saute 2 minutes. </li><li>Bring the temperature up a notch and add cream, milk, salt, pepper, thyme, and half of the Parmesan cheese. </li><li>Reduce to low. </li><li>Stir gently about 5 minutes until it thickens a bit. Don't let it boil. </li><li>Remove from heat and keep warm. </li><li>Cook pasta following package instructions until al dente. </li><li>Pour sauce over pasta. Sprinkle with more Parmesan cheese to serve.</li></ol>",
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/smoked-salmon-pasta-660382',
      },
      {
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 18,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 32,
        spoonacularScore: 30,
        healthScore: 2,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 127.91,
        extendedIngredients: [Array],
        id: 641730,
        title: 'Dulce De Leche Cheesecake',
        readyInMinutes: 45,
        servings: 10,
        sourceUrl:
          'http://www.foodista.com/recipe/5LN8R7Z4/dulce-de-leche-cheesecake',
        image: 'https://spoonacular.com/recipeImages/641730-556x370.jpg',
        imageType: 'jpg',
        summary:
          'One serving contains <b>426 calories</b>, <b>8g of protein</b>, and <b>38g of fat</b>. This gluten free and vegetarian recipe serves 10 and costs <b>$1.28 per serving</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is liked by 31 foodies and cooks. Head to the store and pick up butter, cornstarch, dulce de leche, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so amazing. Try <a href="https://spoonacular.com/recipes/dulce-de-leche-cheesecake-161799">Dulce de Leche Cheesecake</a>, <a href="https://spoonacular.com/recipes/dulce-de-leche-cheesecake-348228">Dulce de Leche Cheesecake</a>, and <a href="https://spoonacular.com/recipes/dulce-de-leche-cheesecake-391923">Dulce de Leche Cheesecake</a> for similar recipes.',
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [],
        instructions:
          '<ol><li>Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.</li><li>Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth. Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.</li><li>Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.</li></ol>',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/dulce-de-leche-cheesecake-641730',
      },
      {
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 10,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 6,
        spoonacularScore: 73,
        healthScore: 18,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 123.98,
        extendedIngredients: [Array],
        id: 643241,
        title: 'Four-Berry Blast Fruit Smoothie',
        readyInMinutes: 10,
        servings: 4,
        sourceUrl:
          'http://www.foodista.com/recipe/445N2G3Y/four-berry-blast-fruit-smoothie',
        image: 'https://spoonacular.com/recipeImages/643241-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Four-Berry Blast Fruit Smoothie might be just the morn meal you are searching for. This gluten free and vegetarian recipe serves 4 and costs <b>$1.24 per serving</b>. One serving contains <b>264 calories</b>, <b>11g of protein</b>, and <b>11g of fat</b>. Only a few people made this recipe, and 5 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>10 minutes</b>. Head to the store and pick up milk, raspberries, lemonade concentrate, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 74%</b>. This score is solid. Similar recipes include <a href="https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-482626">Ginger Berry Fruit Smoothie</a>, <a href="https://spoonacular.com/recipes/berry-banana-fruit-smoothie-265532">Berry-Banana Fruit Smoothie</a>, and <a href="https://spoonacular.com/recipes/berry-blast-smoothies-397587">Berry Blast Smoothies</a>.',
        cuisines: [],
        dishTypes: [Array],
        diets: [Array],
        occasions: [],
        instructions:
          '<ol><li>Place first five items into a blender and pulse a few times. Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.</li></ol>',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/four-berry-blast-fruit-smoothie-643241',
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 94,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 11,
        spoonacularScore: 89,
        healthScore: 46,
        creditsText:
          'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 406.26,
        extendedIngredients: [Array],
        id: 653593,
        title: 'Old Fashioned Mac and Cheese #SundaySupper',
        readyInMinutes: 45,
        servings: 2,
        sourceUrl:
          'https://www.foodista.com/recipe/2PC6VL3L/old-fashioned-mac-and-cheese-sundaysupper',
        image: 'https://spoonacular.com/recipeImages/653593-556x370.jpg',
        imageType: 'jpg',
        summary:
          'You can never have too many American recipes, so give Old Fashioned Mac and Cheese #SundaySupper a try. One serving contains <b>2582 calories</b>, <b>105g of protein</b>, and <b>138g of fat</b>. This recipe serves 2 and costs $4.06 per serving. This recipe from Foodista requires pepper, flour, milk, and butter. It works well as a rather expensive main course. This recipe is liked by 11 foodies and cooks. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. With a spoonacular <b>score of 90%</b>, this dish is awesome. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/jalapeno-bacon-mac-n-cheese-sundaysupper-490175">Jalapeno & Bacon Mac n’ Cheese #SundaySupper</a>, <a href="https://spoonacular.com/recipes/white-queso-mac-and-cheese-for-two-sundaysupper-582595">White Queso Mac and Cheese for Two #SundaySupper</a>, and <a href="https://spoonacular.com/recipes/italian-mac-and-cheese-stuffed-peppers-sundaysupper-ggholiday2013-512019">Italian Mac and Cheese Stuffed Peppers #SundaySupper #GGHoliday2013</a>.',
        cuisines: [Array],
        dishTypes: [Array],
        diets: [],
        occasions: [],
        instructions:
          'Grate the cheese and set aside.\n' +
          'Cook macaroni as per manufacturers directions.\n' +
          'Melt 6 tbs butter in a medium sauce pan over medium low heat.\n' +
          'Slowly sprinkle flour over the melted butter and whisk into a thick paste, about 3 minutes.\n' +
          'Slowly pour one cup of milk into the flour and butter, whisking to break up any lumps. Add salt and pepper and mix.\n' +
          'Add remaining milk, continue to whisk. Turn heat up to medium.\n' +
          'Cook sauce, whisking to prevent scorching for about five minutes or until thickened.\n' +
          'When pasta is done cooking drain well and set aside.\n' +
          'Melt the remaining two tablespoons of butter and stir into the bread crumbs.\n' +
          'Assemble the macaroni and cheese by layering the sauce, cheese and macaroni in a baking dish or individual oven safe bowls.\n' +
          'Top with breadcrumbs and bake at 400 for 20 minutes, until the cheese is melted and the macaroni and cheese is bubbling.\n' +
          'Cool about 10 minutes before serving. Makes about 6-8 servings.\n' +
          'This recipe may be divided in half if you need smaller portions.',
        analyzedInstructions: [Array],
        originalId: null,
        spoonacularSourceUrl:
          'https://spoonacular.com/old-fashioned-mac-and-cheese-sundaysupper-653593',
      },
    ],
  }
  return (
    <div>
      <Container extraClass="py-8">
        <Heading type="h1">What are you eating today?</Heading>
        <RecipeList recipes={recipes.recipes} />
      </Container>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getUsers {
          id
          email
          username
        }
      }
    `,
  })
  return {
    props: {
      users: data.getUsers,
    },
  }
}

// export async function getStaticProps(context) {
//   const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=10`)
//   const recipes = await res.json()
//   return {
//     props: { recipes }
//   }
// }
