// Challenge 1: Flavor Selection
let flavorPreference = userPreference === 'Sugar-free' ? 'Sugar-free' : 'Regular';
console.log(`Flavor preference: ${flavorPreference}`);

// Challenge 2: Stock Check
let stockStatus = cansLeft < 5 ? 'Time to restock!' : 'We\'re stocked!';
console.log(stockStatus);

// Challenge 3: Workout Intensity
let energyLevel = heartRate < 100 ? 'Boost needed!' : 'Energy levels are high!';
console.log(energyLevel);

// Challenge 4: Temperature Suitability
let temperatureSuitability = currentTemp <= 5 ? 'Chilled to perfection!' : 'Needs a cooler!';
console.log(temperatureSuitability);

// Challenge 5: Late Night Coding Session
let drinkDecision = currentHour >= 7 && currentHour < 24 ? 'Unleash the beast!' : 'Better stick to water.';
console.log(drinkDecision);


// Exercise 1: Create a Numeric Literal Expression
let daysAvailable = 7;
console.log(`Number of days the special energy drink is available: ${daysAvailable}`);

// Exercise 2: Combine String Literals
let tagline = "Unleash" + " Your Potential!";
console.log(`Tagline for the new energy drink: "${tagline}"`);

// Exercise 3: Use Identifiers
let hydrationDrink = "Electrolyte+";
let energyDrink = "Caffeine Blast";
let comboDrink = hydrationDrink + " & " + energyDrink;
console.log(`Combined energy drink product: "${comboDrink}"`);

// Exercise 4: Experiment with Grouping Operators
let totalCost = (2 * 5) * 7;
console.log(`Total cost of buying energy drinks for a week: $${totalCost}`);
