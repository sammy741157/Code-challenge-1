//calculateChaiIngredients
function calculateChaiIngredients(servings) {
       //Prompt the user
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    // Validate input
let numberOfCups = Number(input);
    if (input <= 0) {
    console.error("Please enter a valid number of servings.");
    return;
    }
    //Ingredients
    let water = numberOfCups * 200; //in ml
    let milk = numberOfCups * 50; //in ml
    let teaLeaves = numberOfCups * 1; //in tablespoons
    let sugar = numberOfCups * 2; //in teaspoons
    // Calculate the ingredients needed for the given number of servings
    console.log(`To make ${numberOfCups} cups of Chai Bora, you will need:`);
    console.log(`water: ${water} ml`);
    console.log(`milk: ${milk} ml`);
    console.log(`tea leaves: ${teaLeaves} tablespoons`);
    console.log(`sugar: ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
 };
 // Call the function to execute
calculateChaiIngredients();