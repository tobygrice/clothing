function getPriceList(clothType, type) {
    if (type=="men") {
        stock = ["shirts", 9, "pants", 6, "hoodies", 5, "jackets", 6];
        switch (clothType) {
            case "shirts":
                priceList = ["White Levis Tee", 25, "Blue Tommy Hilfiger", 30, "Grey Tee", 15, "Light Grey Tee", 15, "White Tommy Hilfiger", 30, "Blue SuperDry", 25, "Black SuperDry", 25, "Colour Block Tee", 25, "Off White Tee", 23];
                break;
            case "pants":
                priceList = ["Grey Sweats", 30, "Tan Chinos", 40, "Light Tan Chinos", 40, "Brown Chinos", 40, "Levis Jeans", 50, "Black Jeans", 25];
                break;
            case "hoodies":
                priceList = ["Grey Sherpa", 60, "Light Grey Sherpa", 60, "Yellow Champion Hoodie", 70, "Grey SuperDry", 70, "Maroon Hoodie", 30];
                break;
            case "jackets":
                priceList = ["Hilfiger Windbreaker", 100, "Grey Windbreaker", 60, "Biker Leather Jacket", 120, "Black Wool Coat", 80, "Brown Coat", 100, "Tan Coat", 130];
                break;
        }
    }

    if (type=="women") {
        stock = ["dresses", 4, "pants", 6, "skirts", 7, "jackets", 4];
        switch (clothType) {
            case "dresses":
                priceList = ["Pink Dress", 80, "Striped Dress", 60, "Yellow Flowered Dress", 70, "Red Dress", 90];
                break;
            case "skirts":
                priceList = ["Grey Pencil Skirt", 50, "Light Grey Skirt", 40, "Tweed Skirt", 40, "Leather Pencil Skirt", 90, "Black Work Skirt", 30, "Flowered Skirt", 50, "Black Skirt", 30];
                break;
            case "pants":
                priceList = ["Blue Jeans", 50, "Wide Leg Pants", 30, "Black Essentials Pants", 30, "Black Jeans", 40, "Sweatpants", 45, "Jogging Pants", 35];
                break;
            case "jackets":
                priceList = ["Demim Trucker", 80, "Black Jacket", 70, "Teddy Jacket", 50, "Pink Jacket", 70];
                break;
        }
    }

    if (type=="kids") {
        stock = ["boys", 5, "girls", 4];
        switch (clothType) {
            case "boys":
                priceList = ["Sherpa Jacket", 30, "Blue Jeans", 20, "Stripy Tee", 10, "Colour Block Hoodie", 40, "Grey Tee", 10];
                break;
            case "girls":
                priceList = ["Flowery Dress", 20, "Pink Heart Dress", 22, "Rainbow Jacket", 30, "Hearts Top", 15];
                break;
        }
    }
}