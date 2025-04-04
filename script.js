function makeChange(cents) {
    let q = 0, d = 0, n = 0, p = 0;
    
    // Calculate quarters
    q = Math.floor(cents / 25);
    cents = cents % 25;
    
    // Calculate dimes
    d = Math.floor(cents / 10);
    cents = cents % 10;
    
    // Calculate nickels
    n = Math.floor(cents / 5);
    cents = cents % 5;
    
    // The remaining cents are pennies
    p = cents;
    
    return { q, d, n, p };
}

// Do not the change the code below
const cents = prompt("Enter cents: ");
alert(JSON.stringify(makeChange(cents)));
