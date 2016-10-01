require("font-awesome-webpack");
require('bulma');
require('../sass/index.sass');
var Supplier = require('./supplier');

/**
 * Utility function for creating DOM elements.
 */
var tag = function(tagName, options = {}) {
  var element = document.createElement(tagName);
  for (var key in options) {
    switch(key) {
      case 'className':
        element.setAttribute('class', options[key]);
        break;
      default:
        break; // do nothing
    }
  }
  return element;
}

/**
 * The overall state of our application.
 */
var state = {
  budget: 1000,
  productList: Supplier.productList(),
  inventory: []
};

var buyProduct = function(state, product) {
  if (state.budget >= product.price) {
    state.inventory = state.inventory.concat(product);
    state.budget -= product.price;
  } else {
    alert(`You cannot afford to buy ${product.name}`);
  }

  display(state);
}

/**
 * Creates a buy button for the given product.
 */
var createBuyButton = function(product) {
  var button = tag('a', {className: 'button is-primary is-small'})
  var icon = tag('span', {className: 'icon'});
  var i = tag('i', {className: 'fa fa-shopping-cart'});
  var text = tag('span');
  text.innerText = 'Buy';
  icon.appendChild(i);
  button.appendChild(icon);
  button.appendChild(text);

  button.addEventListener('click', function() {
    buyProduct(state, product);
  });

  return button;
};


var createSellButton = function(product) {
  var button = tag('a', {className: 'button is-primary is-small'})
  var icon = tag('span', {className: 'icon'});
  var i = tag('i', {className: 'fa fa-shopping-cart'});
  var text = tag('span');
  text.innerText = 'Sell';
  icon.appendChild(i);
  button.appendChild(icon);
  button.appendChild(text);

  button.addEventListener('click', function() {
    alert(`You want to sell ${product.name}`);
  });

  return button;
}


/**
 * Creates a table row for the given product.
 */
var createProductRow = function(product) {
  var row = tag('tr');
  var nameCell = tag('td');
  var priceCell = tag('td');
  var buttonCell = tag('td', {className: 'is-icon'});

  nameCell.innerText = product.name;
  priceCell.innerText = `$${product.price}`;
  buttonCell.appendChild(createBuyButton(product));

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(buttonCell);

  return row;
};

var createInventoryRow = function(inventoryCount) {
    var row = tag('tr');
    var nameCell = tag('td');
    var quantityCell = tag('td');
    var buttonCell = tag('td', {className: 'is-icon'});

    nameCell.innerText = inventoryCount.product.name;
    quantityCell.innerText = inventoryCount.quantity;
    buttonCell.appendChild(createSellButton(inventoryCount.product));

    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(buttonCell);

    return row;
}

/**
 * Displays the current budget.
 */
var displayBudget = function(state) {
  var budgetAmount = state.budget;
  var budgetElement = document.getElementById('budget');
  budgetElement.innerText = '$' + budgetAmount;
};

/**
 * Displays the products available in the supplier catalog.
 */
var displayCatalog = function(state) {
  var products = state.productList;

  // Create an HTML table row for each product
  var productRows = products.map(createProductRow);

  // Remove existing rows
  var productsTable = document.getElementById("productsTable");
  while (productsTable.firstChild) {
    productsTable.removeChild(productsTable.firstChild);
  };

  // Add the new rows
  productRows.forEach(function(row) {
    productsTable.appendChild(row);
  });
};


/**
 * Counts the number of each type of product we have in our inventory.
 */
var countInventory = function(inventory) {
  var initialCounts = [];
  var counter = function(prevCounts, currentProduct) {
    var arrayIndex = currentProduct.id -1;
    if (prevCounts[arrayIndex]) {
      prevCounts[arrayIndex].quantity += 1;
    } else {
      prevCounts[arrayIndex] = {
        product: currentProduct,
        quantity: 1
      };
    }
    return prevCounts;
  }
  return inventory.reduce(counter, initialCounts);
}


/**
 * Displays the inventory we must sell.
 */
var displayInventory = function(state) {
  var inventory = state.inventory;
  var inventoryCounts = countInventory(inventory);
  console.log('inventory counts', inventoryCounts);

  // Create an HTML table row for each product
  var inventoryRows = inventoryCounts.map(createInventoryRow);

  // Remove existing rows
  var inventoryTable = document.getElementById("inventoryTable");
  while (inventoryTable.firstChild) {
    inventoryTable.removeChild(inventoryTable.firstChild);
  };

  // Add the new rows
  inventoryRows.forEach(function(row) {
    inventoryTable.appendChild(row);
  });
}

var display = function(state) {
  displayBudget(state);
  displayCatalog(state);
  displayInventory(state);
};


display(state);
