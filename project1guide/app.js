// DOM MANIPULATION

// EXERCISE 1
// write the code that evaluates the user input and prevents empty values
// the code should check to prevent user input values from the following wrong states:
// (1) name, price and quantity should not be empty
// (2) price and quantity must numbers 
// (3) price should not be greater than 500 and less than 1 
// (4) quantity should not be greater than 25 and less than 1 

// EXERCISE 2
// the total display summary of the purchase should have the following display color:
// quantity: dark grey
// price: dark grey
// total: blue

// EXERCISE 3
// change the display message to be green


function calculate() {
    const values = getInputValue();
    const name = values.name;
    const price = values.price;
    const qty = values.qty;
    const total = calculateTotal(price, qty);
    const salesObj = createSalesObject(name, price, qty, total);
    const formattedSalesInfo = formatSalesInfo(salesObj);
    outputCaluclatedUserInput(qty, price, total);
    displaySalesSummary(formattedSalesInfo);
    clearInputValue();
}

function calculateTotal(quantity, price) {
    const cost = quantity * price; 
    return cost;
}

function getInputValue() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let qty = document.getElementById('qty').value; 
    return {name,price,qty};
}

function createSalesObject(name, price, qty, total) {
    return {
        name: name,
        price: price,
        qty: qty,
        total: total
    }
}

function formatSalesInfo(salesInfo) {
    const qty = salesInfo['qty'];
    const name = salesInfo['name']; 
    const price = salesInfo['price'];
    const total = salesInfo['total'];
    return 'You bought '+qty+' '+name+' at the rate of ₦'+price+' for ₦'+total;
}

function outputCaluclatedUserInput(qty, price, total) {
    document.getElementById('total-qty').innerHTML = qty;
    document.getElementById('total-price').innerHTML = ' ₦'+price;
    document.getElementById('total').innerHTML = ' ₦'+total;
}

function displaySalesSummary(salesInfo) {
    let p = document.createElement('p');
    const node = document.createTextNode(salesInfo);
    p.appendChild(node);
    document.getElementById('res').appendChild(p);

}

function clearInputValue() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qty').value = ''; 
}