// INTRODUCTION TO JAVASCRIPT

// EXERCISE 1
// write the code that multiply any two numbers given
// the "quantity" and "price" 
// it should return value as the "total" 
function calculateTotal(quantity, price) {
    // write you code after here
    
    // do not write any code  below here
}

// EXERCISE 2
// this function takes salesInfo object with 3 properties
// "name", "price", "qty" and "total"
// it should return a formatted info obj of all the parameters
// e.g {
//    name: 'shoe' 
//    price: 200 
//    qty: 2
//    total: 400
// } 
function createSalesObject(name, price, qty, total) {
    // write you code after here
    
    // do not write any code  below here
}


// NOTE::
// Don't change the codes below 
function formatSalesInfo(salesInfo) {
    return 'You bought '+salesInfo['qty']+' '+salesInfo['name']+' at the rate of ₦'+salesInfo['price']+' for ₦'+salesInfo['total'];
}

function calculate() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let qty = document.getElementById('qty').value; 
    const total = calculateTotal(price, qty);

    const salesObj = createSalesObject(name, price, qty, total);
    const formattedSalesInfo = formatSalesInfo(salesObj);
    
    document.getElementById('total-qty').innerHTML = qty;
    document.getElementById('total-price').innerHTML = ' ₦'+price;
    document.getElementById('total').innerHTML = ' ₦'+total;
    displaySalesSummary(formattedSalesInfo);
    clearInputValue();
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