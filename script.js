"use strict";
exports.__esModule = true;
;
var mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
function findNameOfTallestMountain(m) {
    var maxHeight = 0;
    var tallestname = "";
    m.forEach(function (mountain) {
        if (mountain.height > maxHeight) {
            maxHeight = mountain.height;
            tallestname = mountain.name;
        }
    });
    return tallestname;
}
var tallboy = findNameOfTallestMountain(mountains);
console.log(tallboy);
var products = [{ name: "kiwi", price: 1.50 }, { name: "starfruit", price: 2.50 }, { name: "zirconium filings", price: 3.50 }];
function calcAverageProductPrice(p) {
    var total = 0;
    p.forEach(function (product) {
        total += product.price;
    });
    return total / p.length;
}
var avg = calcAverageProductPrice(products);
console.log(avg);
;
var inventory = [{ product: { name: "motor", price: 10.00 }, quantity: 10 }, { product: { name: "sensor", price: 12.50 }, quantity: 4 }, { product: { name: "LED", price: 1.00 }, quantity: 20 }];
function calcInventoryValue(i) {
    var total = 0;
    i.forEach(function (element) {
        total += element.product.price * element.quantity;
    });
    return total;
}
;
var value = calcInventoryValue(inventory);
console.log(value);
