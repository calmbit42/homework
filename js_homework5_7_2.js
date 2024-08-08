var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        return this.processServicesPrice(function(price, servicePrice) { 
            return !price ? servicePrice : price + servicePrice;
        });
    },
    minPrice: function() {
        return this.processServicesPrice(function(price, servicePrice) { 
            return !price || servicePrice < price ? servicePrice : price;
        });
    },
    maxPrice: function() {
        return this.processServicesPrice(function(price, servicePrice) { 
            return !price || servicePrice > price ? servicePrice : price;
        });
    },
    processServicesPrice: function(priceProcessor) {
        let price;

        for (let prop in this) {
            let propValue = this[prop];
            
            if (typeof(propValue) === 'string' && propValue.endsWith("грн")) {
                let servicePrice = Number.parseInt(propValue);

                price = priceProcessor(price, servicePrice);
            }
        }

        return price ?? 0;
    }
}
