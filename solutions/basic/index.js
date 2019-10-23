"use strict";

function easyStart() {
  // add your code here...
  return true;
}

function helloWorld() {
  return "hello world";
}

function numToArray(limit) {
  let result = [];
  for (let i=limit; i>0; i=i-1) {
    result.push(i)
  }
  return result;
}

// add your functions here...
function hw2() {
  return ["hello", "world"];
}

function greet(name) {
  return `Hello ${name} how are you?`
}

function eugb(euros, rate) {
  return euros * rate;
}

function nSay(msg, n) {
  let result = [];
  for (let i=0; i<n; i++) {
      result.push(msg)
    }
  return result;
}

function acronym(arr) {
  let result = "";
  for (const word of arr.split(" ")) {
      result += word[0];
    }
  return result;
}

function abbreviate(arr) {
  let result = "";
  for (let i=0; i< arr.length-1; i++) {
    result = result + arr[i][0] + ". ";
  }
  return result + arr[arr.length-1];
}

function honours(mark) {
  if (mark >= 70) return "First";
  if (mark >= 60) return "Upper Second";
  if (mark >= 50) return "Lower Second";
  if (mark >= 40) return "Third";
  return "Fail";
}

function uniqueWords(str) {
  let result = [];
  let splitStr = str.split(" ");
  for (let word of splitStr) {
    let lcword = word.toLowerCase();
    if (!result.includes(lcword)) {
      result.push(lcword);
    }
  }
  return result;
}

function wordCount(str) {
  return str.split(" ").length;
}

function charCount(str) {
  return str.length - (wordCount(str) -1); 
}

function compound(v, r, y) {

  for (let i = 0; i<y; i++) {
    v = v*r;
  }
  return v;
}


function pocketCoins(arr, target) {
  let total = 0;
  for (const val of arr) {
    if (total + val <= target) {
      total = total + val;
    } 
  }
  return total === target;
}


function wordGame(letters, word) {
  let once = letters.split('');
  for (const char of word) {
    let i=once.indexOf(char);  
    if (i === -1) {
      return false;
    }
    once[i] = null;
  }
  return true;
}