// Funkce pro cateringové společnosti
function justFood(numberOfPeople) {
    const price = numberOfPeople * 500; // Cena na osobu: 500 Kč
    return `Catering od Just Food pro ${numberOfPeople} lidí za ${price} Kč.`;
}

function yourMama(numberOfPeople) {
    const price = numberOfPeople * 1500; // Cena na osobu: 1500 Kč
    return `Catering od Your Mama pro ${numberOfPeople} lidí za ${price} Kč.`;
}

function flavourHaven(numberOfPeople) {
    const price = numberOfPeople * 3000; // Cena na osobu: 3000 Kč
    return `Catering od Flavour Haven pro ${numberOfPeople} lidí za ${price} Kč.`;
}

// Funkce createEvent
function createEvent(eventName, numberOfPeople, cateringFunction) {
    const cateringMessage = cateringFunction(numberOfPeople);
    return `Událost "${eventName}" s ${cateringMessage}`;
}

// Ukázka použití funkcí
const outputDiv = document.getElementById('output');

// Vytvoření několika událostí
const event1 = createEvent('Narozeniny', 50, justFood);
const event2 = createEvent('Svatba', 100, yourMama);
const event3 = createEvent('Inaugurace prezidenta', 200, flavourHaven);

// Zobrazení výsledků na stránce
outputDiv.innerHTML = `
    <p>${event1}</p>
    <p>${event2}</p>
    <p>${event3}</p>
`;

// Debugging: Otestujte funkce v konzoli
console.log(justFood(50)); // "Catering od Just Food pro 50 lidí za 25000 Kč."
console.log(yourMama(100)); // "Catering od Your Mama pro 100 lidí za 150000 Kč."
console.log(flavourHaven(200)); // "Catering od Flavour Haven pro 200 lidí za 600000 Kč."
