# Playground Functions Project Summary

- [Skills](#skills)
- [What should be developed](#What-should-be-developed)

  `Mandatory requirements:`
    - [1 - Create a function using the && operator](#1---create-a-function-using-the-operator-)
    - [2 - Create a function that calculates the area of ​​a triangle](#2---create-a-function-that-calculates-the-area-of-a-triangle)
    - [3 - Create a function that splits the sentence](#3---create-a-function-that-split-the-sentence)
    - [4 - Create a function that uses string concatenation](#4---create-a-function-that-uses-string-concatenation)
    - [5 - Create a function that calculates the amount of football points](#5---create-a-function-that-calculates-the-amount-of-points-in-football)
    - [6 - Create a function that calculates the repetition of the greatest number](#6---create-a-function-that-calculates-the-repetition-of-the-largest-number)
    - [7 - Create a Mouse-hunting role](#7---create-a-mouse-hunting-function)
    - [8 - Create a FizzBuzz function](#8---creat-a-fizzbuzz-function)
    - [9 - Create a function that encodes and decodes](#9---create-a-function-that-encodes-and-decodes)
    - [10 - Create a Technology List function](#10---create-a-technology-list-function)

    `Bonus requirements:`
     - [11 - Create a Phone Number function](#11---create-a-phone-number-function)
     - [12 - Create a Triangle Existence Condition function](#12---create-a-triangle-existence-condition-function)
     - [13 - Create a Welcome to Trybe's Bar!](#13---create-a-welcome-to-trybe-bar-feature!)

# Skills

- Write JavaScript code that uses variables and primitive types;
- Use language concepts such as dynamic typing and logical / arithmetic / assignment operators in your code;
- Create code that uses conditional structures such as if / else;
- Manipulate matrices (lists);
- Use the for command;
- Divide big problems into small ones;
- Use programming logic to solve problems;
- Manipulate objects;
- Use the for / in command;
- Use functions to organize and structure your code;


## What should be developed

- You will implement functions based on requirements;
- You will develop functions following the specified requirements for the correct behavior of each one of them.

---
## Project requirements
---

### 1 - Create a function using the && operator

JavaScript has a logical operator `&&`, which takes two values ​​and returns `true` if both values ​​are true, and returns `false` if any of the values ​​are not.

Considering this, implement in the `compareTrue` function, a code that when receiving two boolean parameters must:

- Return `true` if both values ​​are true;
- Return `false` if one or both parameters are false.

Do the function only using the `&&` operator.

**What will be checked:**

- Return false when calling the compareTrue function with a parameter with a false value and another with a true value

- Return false when calling the compareTrue function with two parameters of false value

- Return true when calling the compareTrue function with two parameters of true value

### 2 - Create a function that calculates the area of ​​a triangle

Write a function named `calcArea` that takes a base value (called `base`) and a height value (called `height`) of a triangle and returns the calculation of its area.

Remember that the area of ​​a triangle is calculated using the following formula: (base * height) / 2.

**What will be checked:**

- Return the value 250 when the calcArea function is called with the base parameter set to 10 and the height parameter set to 50

- Return the value 5 when the calcArea function is called with the base parameter set to 5 and the height parameter set to 2 is expected as a result of 5

- Return the value 25.5 when the function calcArea is called with the base parameter with the value 51 and the parameter height with the value 1 is expected as the result 25.5

### 3 - Create a function that splits the sentence

Write a function named `splitSentence`, which will take a string and return an array of strings separated by each space in the original string.

Example: if the function receives the string `"go Trybe"`, the return would be `['go', 'Trybe']`.

**What will be checked:**

- Return the value ['go', 'Trybe'] if the function receives the string 'go Trybe'

- Return the value ['let's', 'that', 'let's']. if the function receives the string 'let's go'

- Return the value ['rocket'] if the function receives the string 'rocket'

### 4 - Create a function that uses string concatenation

Write a function with the name `concatName` that, when receiving an array of strings, returns a string with the format `'LAST ITEM, FIRST ITEM'`, regardless of the size of the array.

This means that, if the parameter passed to `concatName` is the Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], the function must return `Paolillo, Lucas`.

**What will be checked:**

- Return 'Paolillo, Lucas' when the parameter passed in the concatName function is ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

- Return 'reverse, rocket' when the parameter passed in the concatName function is ['rocket', 'no', 'has', 'reverse']

- Return 'captain, captain' when the parameter passed in the concatName function is ['captain', 'my', 'captain']

### 5 - Create a function that calculates the amount of football points

Write a function named `footballPoints` that receives the number of wins (this parameter should be called `wins`) and the number of ties (this parameter should be called `ties`) and return the amount of points the team scored in a championship.

For this, consider that each victory is worth 3 points and each draw is worth 1 point.

**What will be checked:**

- Return 50 points when the team has 14 wins and 8 draws

- Return 5 points when the team has 1 win and 2 draws

- Return 0 points when the team has 0 wins and 0 draws

### 6 - Create a function that calculates the repetition of the largest number

Write a function called `highestCount` that, when receiving an array of numbers, returns the number of times the highest number repeats.

Example: if the parameter of `highestCount` is an array with values ​​`[9, 1, 2, 3, 9, 5, 7]`, the function should return `2`, which is the number of times the number ` 9` (largest number in the array) repeats.

**What will be checked:**

- Return 2 when the parameter passed in the highestCount function is [9, 1, 2, 3, 9, 5, 7]

- Return 1 when the parameter passed in the highestCount function is [0, 4, 4, 4, 9, 2, 1]

- Return 3 when the parameter passed in the highestCount function is [0, 0, 0]

### 7 - Create a Mouse Hunt function

Imagine that there are two cats, which we'll call `cat1` and `cat2`, and that they are both chasing the same mouse named `mouse`. Imagine that the animals are on a line, each in a position represented by a number.

Knowing this, create a function called `catAndMouse` that, upon receiving the position of `mouse`, `cat1` and `cat2`, **in that order**, calculates the distances between the mouse and each of the cats, then , return which cat will reach the mouse first (the one closest to the mouse).

Example: if the cat `cat2` is 2 units away from the mouse, and `cat1` is 3 units away, your function should return `"cat2"`.

---
## Note
This Trybe Project was developed by me during the Trybe Development Bootcamp. <br>
More info at <a href="https://www.betrybe.com/">Trybe</a>