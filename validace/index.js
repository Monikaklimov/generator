// index.js

// Funkce pro validaci e-mailu
function validateEmail() {
    const email = prompt("Zadejte svůj e-mail:");
    const messageElement = document.getElementById("msg");

    if (validator.isEmail(email)) {
        messageElement.textContent = "E-mail v pořádku";
        messageElement.classList.add("msg--valid");
        messageElement.classList.remove("msg--invalid");
        
        // Ověření platební karty, pokud je e-mail platný
        const cardNumber = prompt("Zadejte číslo platební karty:");
        if (validator.isCreditCard(cardNumber)) {
            console.log("Platné číslo karty.");
        } else {
            console.log("Neplatné číslo karty.");
        }
    } else {
        messageElement.textContent = "Neplatný e-mail";
        messageElement.classList.add("msg--invalid");
        messageElement.classList.remove("msg--valid");
    }
}

// Zavolání funkce při načtení stránky
validateEmail();
