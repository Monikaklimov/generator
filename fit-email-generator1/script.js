function generateEmail() {
    // Získání jména a příjmení pomocí prompt()
    let firstName = prompt("Zadejte své křestní jméno bez diakritiky").trim().slice(0, 3).toLowerCase();
    let lastName = prompt("Zadejte své příjmení bez diakritiky").trim().slice(0, 5).toLowerCase();

    // Sestavení e-mailu pomocí interpolace
    let email = `${lastName}${firstName}@fit.cvut.cz`;

    // Výpis e-mailu na stránku
    document.getElementById('emailOutput').textContent = `Váš e-mail: ${email}`;
}

// Spustíme funkci pro vygenerování e-mailu
generateEmail();
