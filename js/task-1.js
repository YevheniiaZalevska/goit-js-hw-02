function makeTransaction(quantity, pricePerDroid) {
    const totalCost = quantity * pricePerDroid;
    
    return `You ordered ${quantity} droids worth ${totalCost} credits!`;
}

