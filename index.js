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

// 5. Greetings: Create a 'greet' function that accepts a 'name' parameter and returns the string "Hello <name> how are you?".
function greet(name) {
  return `Hello ${name} how are you?`;
}

// 6. A  Positive Sign: Create a 'sign' function that accepts one parameter 'x' and returns the string "positive" for x > 0, and the string "negative" for x < 0.
function sign(x) {
  return x > 0 ? 'positive' : 'negative';
}

// 7. Euros to GB Pounds: Write an 'eugb' function that accepts two parameters, 'rate and 'euros' representing an amount in euros and an exchange rate of how many pounds one euro is worth. It should return a number which is the amount in pounds after conversion.
function eugb(euros, rate) {
  return euros * rate;
}

// 8. Say N Times: Write an 'nSay' function that accepts two parameters, a message 'msg' and a number 'n'. nSay should return an array that contains n copies of the value of msg.
function nSay(msg, n) {
  const messages = [];
  for (let i = 0; i <= (n - 1); i++) {
    messages.push(msg);
  }
  return messages;
}

// 9. Word Count: Create a 'wordCount' function that accepts a string 'str' and counts how many words are in it.
function wordCount(str) {
  return str.split(' ').length;
}

// 10. Character Count: Create a 'charCount' function that accepts a string 'str' and counts how many non-whitespace characters are in it.
function charCount(str) {
  let count = 0;
  for (const char of str) {
    if (char !== ' ') count++;
  }
  return count;
}

// 11. Acronyms: Create an 'acronym' function that accepts a string 'str' of words and returns the acronym formed from the initial letter of each word.
function acronym(str) {
  const words = str.split(' ');
  let acc = '';

  for (const word of words) {
    acc += word[0];
  }

  return acc;
}
