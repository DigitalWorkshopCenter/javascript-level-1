# JavaScript Level 1

![image](https://cloud.githubusercontent.com/assets/382348/18458913/bdfa5226-7922-11e6-9ec4-77f8ce021384.png)

Welcome to JavaScript Level 1 with the Digital Workshop Center. Please start by completing the [Setup Instructions](SETUP.md).

## JavaScript Resources
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) - _JavaScript reference_
- [A Smarter Way To Learn](http://www.asmarterwaytolearn.com/js/index-of-exercises.html) - _repetition exercises_
- [Eloquent JavaScript](http://eloquentjavascript.net/) - _online JavaScript book_

## Part 1

- Chrome Dev Tools, Atom
- Values, Types and Operators
  - Values: 'hello', 123, true, null, undefined, {key: "value"}, NaN, Infinity
  - Types: String, Number, Boolean, null, undefined, object
  - Operators: assignment, mathematical, logical, comparison, unary/ternary, spread
- Execution Environments
  - Chrome / NodeJS
  - Environment API
    - console, alert, prompt
- Variables, Expressions and Statements
  - declaring vs assigning
  - naming conventions
    - case sensitive
    - no spaces
    - letters, numbers, dollar, underscore
    - Start with: letter, dollar, underscore
    - Convention:
      - variable names: `thisIsTheConvention`
      - classes / constructor functions: `ThisIsTheConvention`
  - Statements
    - perform an action
  - Expressions
    - create a value
  - Type Coercion
    - truthiness / falsiness
    - implicit
    - explicit: conversion / parsing
- Syntax
  - comments
  - keywords
  - whitespace
  - case sensitivity
  - new lines
  - semi-colons

- Control Flow
  - if / else

### Further Reading


### Homework

#### Greeter Program
- Write a program which prompts the user for their name.
  - If they user enters nothing, then prompt them again with more specific instructions.
  - When the user finally enters their name, then display a personalized greeting in a pop-up Window.

#### Drinking Game
- write a program that prompts the user for their age
  - if the user is over 21 then show a message that offers the user an alcoholic drink
  - if the user is under 21 then show a message that offers the user a non-alcoholic drink


## Part 2

- Control Flow (cont...)
  - switch
  - loops
    - while / do
    - for
    - breaking out of a loop
- Data Structures
  - Objects
    - literal
    - keys (valid keys)
    - properties (obj.syntax obj[syntax])
    - delete properties
    - this
    - functions are objects!
    - constructor functions
    - Prototypes
  - Primitive vs Reference Types
    - Primitive: Number, Boolean
      - strings: immutable, and compared by value (like a primitive)
    - Reference: Object
  - Arrays
    - literal
    - indexes (from 0)
    - length
    - adding elements
    - changing elements
    - common methods
      - pop
      - push
      - shift
      - unshift
      - slice
      - split
      - join
      - splice
  - Looping over Arrays and Objects
    - for key in
    - for val of
    - ^ arbitrary order!!!
- Natives
  - String()
  - Number()
  - Boolean()
  - Array()
  - Object()
  - Function()
  - RegExp()
  - Date()
  - Error()
  - Math
- Functions
  - arguments
  - return
  - scope
    - global, function, (block let)
  - functions as values
  - declarations, expressions, and hoisting

### Further Reading


### Homework

- Create a data structure for a catalog of products
  - each product in the catalog should have id, name, and price properties
- Create functions for adding items to the catalog
- Write a program that uses window.prompt to ask the user for:
  - a new product name
  - a new product price
- ...then create a new inventory item from the users' answers
- validate their answers to ensure that:
  - the name is at least 3 characters long
  - the price is greater than zero
- Create functions for calculating the total value of the items in the catalog
  - try this with loops
  - also try this with Array.prototype.reduce

## Part 3

- The DOM
  - reminder of execution context
  - Browsers
    - caniuse.com
  - `<script>` tag
  - Important types
    - console
    - window
    - document
    - element
    - attribute
    - nodelist
  - [Important APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) - application building blocks
    - document.getElementById
    - document.getElementsByTagName
    - document.querySelect/querySelector
    - document.createElement
    - parentNode.appendChild
    - element.innerHTML
    - element.style.X
    - element.(set|get)Attribute
    - element.addEventListener
  - Events
    - adding/removing (memory leaks)
    - common types
      - click, dblclick, contextmenu
      - mousemove, mouseenter, mouseover, mouseleave, mouseout,  mousedown, mouseup
      - drag
      - keydown, keypress, keyup
      - dragstart, drag, dragend, dragenter, dragover, dragleave, drop
      - online / offline
      - focus, blur
      - cut, copy, paste
      - reset, submit
    - Event Propagation ([simple examples](http://javascript.info/tutorial/bubbling-and-capturing))
      - bubbling & capturing
      - preventDefault & stopPropagation
      - multiple handlers on one event
  - Forms
    - elements
      - form, input, textarea, checkbox, radio, select (optgroup, option), button
      - grouping: fieldset, legend, label
    - Events: submit, reset
    - getting / setting values
    - validation

### Homework

- Create a form that allows users to create inventory items
- Use the data structure from last weeks' homework to built a product catalog
- Use the DOM API to display the items in the catalog in an HTML table
- add event handlers to each item in the list which deletes the item form the product catalog

## Part 4

This is where we start to focus on the goal of creating a web application. We can provide a set of pre-defined projects for students to pick from. The student will then be tasked with taking what they have learned and implementing the project. This will be an opportunity to return to earlier material and reinforce the students' understanding. For more advanced students this will be an opportunity to push the boundary and move forward at their own pace.

## Part 5

We will start the lesson by asking the students about their experience implementing the project on their own during the past week. This will be an opportunity to help the students move past any barriers they may have encountered, and get them "un-stuck". For more advance students, we will now have an opportunity to hint at upcoming topics in JS 102 that they can bring to bear in their project, or to discuss with them how they might go about implementing their own personal project based on what they've learned.
