# Part 1

## Further Reading

Eloquent JavaScript:
- [Values, Types, and Operators](http://eloquentjavascript.net/01_values.html)
- [Program Structure](http://eloquentjavascript.net/02_program_structure.html)

Mozilla Developer Network (reference):
- [Arithmatic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

## Class Notes

JavaScript is a programming language that needs an execution environment in order to run. Your browser is an example of such an environment. NodeJS is another example. Different environments provide different capabilities:

- in a browser JavaScript can make pop-up prompts, or write to a web page
- in NodeJS JavaScript can write to the file system, or act as a web server

### Values

At the most basic level, programs written with JavaScript manipulate values. Examples of values:

```javascript
1
10000000
-27
3.14
.52
"Hello, I like pizza."
true
false
```

Values can be combined using operators:

```javascript
10 * 7      // 70
2.5 + 1.23  // 3.73
6 > 2       // true
"Hello, I like " + "JavaScript." // Hello, I like JavaScript.
```

### Operators

Operators can be grouped into a small number of categories. We didn't cover them all in this first class but we will get to them  eventually.

```javascript
- + - \ * % ++ --       // Mathematical
&& ||                   // Logical
== === != !== > < >= <= // Comparison
= += -=                 // Assignment
!                       // Unary
```

### Expressions

Combinations of values and operators are called "expressions". Expressions "evaluate" to a single value. For example, the expression `6 + (4 * 3)` evaluates to the value `18`, or the expression `"Hello, " + "world!"` evaluates to the value `"Hello, World!"`.

### Variables

Values can be given names with variables. A variable can be though of as a tag which is attached with string to a given value. The string can be detached from the original value and reattached to a different value. A variable which has not been attached to a value is `undefined`. Variables names adhere to specific rules and conventions:

- they're case sensitive
- they may contain only: letters, numbers, dollar `$`, underscore `_`
- they may start with only: letters, dollar `$`, underscore `_`
- variable names: `thisIsTheConvention`
- classes / constructor functions: `ThisIsTheConvention`

> We'll talk about classes and constructor functions later on in the course.

### Types

JavaScript has six basic types:

```javascript
Number      // 1, 3.14, -25, 2456254
Boolean     // true, false
String      // "Hello, I like JavaScript"
undefined   // no value assigned yet (not even nothing)
null        // intentionally means nothing
Object      // a bag of other values
```

Operators behave differently depending on the types they're used with.

> There are in truth a few more JavaScript types, but these six will be used 99% of the time in your programs.

JavaScript types are "dynamic". This means a variable can point to a value of any type, and can be reassigned to a completely different type e.g.:

```javascript
var animal = "Boston Terrier"; // animal is of type String
animal = 3 > 2; // animal is now of type Boolean
```

Type coercion: JavaScript sometimes converts variables into

### Syntax

- comments
- keywords
- whitespace
- case sensitivity
- new lines
- semi-colons
