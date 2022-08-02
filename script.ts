export{};

//Tallest Mountain
interface Mountain{
    name: string,
    height: number
};

let mountains: Mountain[] = [{name: "Kilimanjaro", height: 19341}, {name:"Everest", height: 29029}, {name:"Denali", height: 20310}];

function findNameOfTallestMountain(m: Mountain[]):string{
    let maxHeight: number = 0;
    let tallestname: string = "";
    m.forEach(mountain => {
        if(mountain.height > maxHeight){
            maxHeight = mountain.height;
            tallestname = mountain.name;
        }
    });
    return tallestname;
}
let tallboy: string = findNameOfTallestMountain(mountains);
console.log(tallboy);

//Products

interface Product{
    name:string,
    price:number
}

let products: Product[] = [{name:"kiwi", price: 1.50}, {name: "starfruit", price: 2.50}, {name:"zirconium filings", price:3.50} ];

function calcAverageProductPrice(p:Product[]):number{
    let total: number = 0;
    p.forEach(product => {
        total +=product.price;
    });
    return total/p.length;
}

let avg: number = calcAverageProductPrice(products);
console.log(avg);

//Inventory
interface InventoryItem{
    product:Product,
    quantity: number
};

let inventory: InventoryItem[] = [{product:{name: "motor", price: 10.00}, quantity:10},{product:{name: "sensor", price: 12.50}, quantity:4}, {product:{name: "LED", price: 1.00}, quantity:20} ];

function calcInventoryValue(i:InventoryItem[]):number{
    let total: number = 0;
    i.forEach(element => {
        total += element.product.price* element.quantity;
    });
    return total;
};

let value = calcInventoryValue(inventory);
console.log(value);