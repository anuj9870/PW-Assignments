function calculateProcessingFee(paymentMethod) {
    

    switch (paymentMethod.toLowerCase()) {
        case 'credit':
            return 2;
        case 'debit':
            return 1.5;
        case 'paypal':
            return 3;
        default:
            console.log("Invalid payment method. Please choose 'credit', 'debit', or 'paypal'.");
            return;
    }

}

console.log(calculateProcessingFee("credit"));
console.log(calculateProcessingFee("paypal"));
console.log(calculateProcessingFee("debit"));
console.log(calculateProcessingFee("gpay"));