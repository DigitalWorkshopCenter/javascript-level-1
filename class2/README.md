## Class 2

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