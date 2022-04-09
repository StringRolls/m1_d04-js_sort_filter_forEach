![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Module 1 - Day 4: JS Advanced Array methods .sort(), .reverse(), .filter() and forEach()

## Contents

> JS | Array advanced methods: `.sort()`, `.reverse()`, `.filter()`, `.forEach()`.
> 
> JS | Reference VS value / Shadow copy VS deep copy


## Main points: array advanced methods

The `.filter()` and `.forEach()` methods do **not** mutate the original array.

The `.sort()` method **mutates the original array**.    ````
    
- The `.filter()` method
  - method takes a function as an argument.
  - Returns an array with a maximum length equal to the length of the original array.
  - Transfers to the resulting array every position of the original array where the argued function returns a _truthy_ value.
    ````javascript
    const values = [2, 4, 6] const highValues = [2, 4, 6].
    const highValues = values.filter(elm => elm < 2) // [4, 6] 
    ````
    
The `.sort()` and `.reverse()` methods **mute the original array**.

- The `.sort()` method 
  - method receives a sort function as an argument, otherwise it sorts the items according to `Unicode` encoding.
    ````javascript
    const values = [12, 110, 2]
    values.sort() // [110, 12, 2]
    ````

- The `.reverse()` method 
  - Reverses the order of the elements present in the array.
    ````javascript
    const values = [2, 4, 6]
    values.reverse() // [6, 4, 2]
    ````
 
## Main points: truthies VS falsies
The _falsies_ values (`null, undefined, false, NaN, 0, ''`) are rejected by default in conditional structures. All others (_truthys_) are accepted by default.

## Main points: deep copy
It is possible to make a _deep_ copy of both an object/array and all objects/arrays inside it through the `JSON.parse(JSON.stringify(myArray))` technique.
