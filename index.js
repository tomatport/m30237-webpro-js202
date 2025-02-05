/* eslint-disable no-unused-vars */
'use strict';

// 1. Easy Start: Complete the 'easyStart' function so that it always returns true.
function easyStart() {
  return true;
}

// 2. Hello World: Complete the 'helloWorld' function so that so that it always returns the string "hello world".
function helloWorld() {
  return 'hello world';
}

// 3. Numbers To Array: Change the 'numToArray' function so that instead of creating an array of numbers from 0 to 'limit', it creates an array of numbers counting down from 'limit' to 1.
function numToArray(limit) {
  const funNumbers = [];

  for (let i = limit; i >= 1; i--) {
    funNumbers.push(i);
  }

  return funNumbers;
}

// 4. Hello World 2: Create the function 'hw2' which returns an array of the strings "hello" and "world".
function hw2() {
  return ['hello', 'world'];
}
