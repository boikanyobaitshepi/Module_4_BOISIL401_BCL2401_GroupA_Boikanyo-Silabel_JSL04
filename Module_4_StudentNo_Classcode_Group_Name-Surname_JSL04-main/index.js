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
