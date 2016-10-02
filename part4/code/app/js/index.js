require("font-awesome-webpack");
require('bulma');
require('../sass/index.sass');
var Catalog = require('./catalog');

/**
 * The overall state of our application.
 */
var state = {
  budget: 1000,
  productList: Catalog.productList(),
  inventory: []
};


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
 * Sell the given product. This will alter the main
 * application state appropriately.
 *
 * Exercise: prevent buying more inventory if the current inventory status
 * is TOO HIGH.
 */
var buyProduct = function(state, product) {
  var inventory = state.inventory;

  if (state.budget >= product.price) {
    var existingInventory = inventory.find(x => x.product.id === product.id);
    if (existingInventory) {
      existingInventory.quantity += 1;
    } else {
      inventory.push({product: product, quantity: 1});
    }
    state.budget -= product.price;
  } else {
    alert(`You cannot afford to buy ${product.name}`);
  }

  display(state);
}


/**
 * Sell the given product. This will alter the main
 * application state appropriately.
 */
var sellProduct = function(state, product) {
  alert(`You want to sell ${product.name}`);

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


/**
 * Creates a sell button for the given product.
 */
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
    sellProduct(state, product);
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


/**
 * Creates a table row for the given inventory item.
 */
var createInventoryRow = function(inventoryItem) {
    var row = tag('tr');
    var nameCell = tag('td');
    var quantityCell = tag('td');
    var buttonCell = tag('td', {className: 'is-icon'});

    nameCell.innerText = inventoryItem.product.name;
    quantityCell.innerText = inventoryItem.quantity;
    buttonCell.appendChild(createSellButton(inventoryItem.product));

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
 * Our simple inventory rules:
 * - EMPTY: no items
 * - LOW: less than three items (either of a single type or across multiple types)
 * - HIGH: more than 6 of any one item
 * - OK: neither of the above are true
 */
var calculateInventoryStatus = function(inventory) {
  if (inventory.length === 0) {
    return 'EMPTY';
  } else if (3 > inventory.reduce(((prev, curr) => prev + curr.quantity), 0)) {
    return 'TOO LOW';
  } else if (inventory.some(x => x.quantity > 6)) {
    return 'TOO HIGH';
  } else {
    return 'OK';
  }
}


/**
 * Displays the inventory we must sell.
 */
var displayInventory = function(state) {
  var inventory = state.inventory;

  // Create an HTML table row for each product
  var inventoryRows = inventory.map(createInventoryRow);

  // Remove existing rows
  var inventoryTable = document.getElementById('inventoryTable');
  while (inventoryTable.firstChild) {
    inventoryTable.removeChild(inventoryTable.firstChild);
  };

  // Add the new rows
  inventoryRows.forEach(function(row) {
    inventoryTable.appendChild(row);
  });
}


/**
 * Displays the current inventory status.
 * Exercise: style the status to be "red if too low or high
 */
var displayInventoryStatus = function(state) {
  var inventoryStatus = calculateInventoryStatus(state.inventory);
  var inventoryStatusElement = document.getElementById('inventoryStatus');
  inventoryStatusElement.innerText = inventoryStatus;
}


var debugState = function(state) {
  var stateElement = document.getElementById('debugState');
  stateElement.innerText = JSON.stringify(state);
}


var display = function(state) {
  displayBudget(state);
  displayInventoryStatus(state);
  displayCatalog(state);
  displayInventory(state);
  debugState(state);
};


display(state);
