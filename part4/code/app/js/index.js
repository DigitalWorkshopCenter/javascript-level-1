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
};

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
  return button;
};

/**
 * Creates a table row for the given product.
 */
var createProductRow = function(product) {
  var row = tag('tr');
  var nameCell = tag('td');
  var priceCell = tag('td');
  var buttonCell = tag('td', {className: 'is-icon'});

  nameCell.innerText = product.name;
  priceCell.innerText = product.price;
  buttonCell.appendChild(createBuyButton(product));

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(buttonCell);

  return row;
};

/**
 * Displays the current budget.
 */
var displayBudget = function(state) {
  var budgetAmount = state.budget;
  var budgetElement = document.getElementById('budget');
  budgetElement.innerText = '$' + budgetAmount;
};

/**
 * Displays the products in a
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


var start = function(state) {
  displayBudget(state);
  displayCatalog(state);
};


start(state);
