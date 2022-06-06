console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
// create basket and add an item function
console.log( basket );

function addItem(item){
    basket.push(item) 
    //new item should be added to the array
    return true;
}

// a console.log that tests whats happening

console.log ('adding ball', addItem('ball'));
console.log ('adding toy', addItem('toy'));
console.log ('adding book', addItem('book'));


// start listItems function 

function listItems() {
    console.log(basket)
}
console.log('Items that are in my basket:', basket);


//check if items are listed 
console.log(`My basket has a ${basket}`);


function empty() {

    basket=[];
    return basket;
    
}


// should remove item from basket
console.log ('Remove all items from my basket', empty());

//check if items were actually emptied
console.log(`basket is ${basket}`);