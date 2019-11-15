"use strict";

/**
 * Easy Start
 * Complete the 'easyStart' function so that
 * it always returns true.
 */
function easyStart() {
  return true;
}


/**
 * Hello World
 * Complete the 'helloWorld' function so that so that
 * it always returns the string "hello world".
 */
function helloWorld() {
  return "hello world";
}


/**
 * Numbers To Array
 * Change the 'numToArray' function so that instead of
 * creating an array of numbers from 0 to 'limit',
 * it creates an array of numbers counting down from
 * 'limit' to 1.
 */
function numToArray(limit) {

  // create an array for the result
  const result = [];

  // start at the limit and work backwards
  // (using i=i-1) until i is 1.

  for (let i=limit; i>=1; i=i-1) {
    // add the current value of i
    // to the result array
    result.push(i)
  }

  // alternatively to the loop above:
  // start at zero and work up to the limit - 1
  // which is the usual direction for a for loop
  //
  // for (let i=0; i<limit; i=i+1) {
  //   // add a decreasing number to the result array
  //   result.push(limit-i)
  // }

  return result;
}


/**
 * Hello World 2
 * Create the function 'hw2' which returns
 * an array of the strings "hello" and "world"
 */
function hw2() {
  return ["hello", "world"];

  // Alternatively...
  //
  // const result = [];
  // result.push("hello");
  // result.push("world");
  // return result;
}


/**
 * Greetings
 * Create a 'greet' function that accepts a 'name' parameter
 * and returns the string "Hello <name> how are you?".
 */
function greet(name) {
  // use a backtick delimited 'template literal' to
  // construct the required sentence.  A single
  // placeholder ${name} is used.
  return `Hello ${name} how are you?`

  // Alternatively...
  // return "Hello " + name + " how are you?"
}


/**
 * A Positive Sign
 * Create a 'sign' function that accepts one parameter 'x'
 * and returns the string "positive" for x > 0, and
 * the string "negative" for x < 0.
 */
function sign(x) {
  if (x>0) {
    return "positive";
  } else {
    // NB: we do not specify the behaviour for the case of x===0
    // therefore regurning "negative" for 0 is OK
    return "negative";
  }
}


/**
 * Euros to GB Pounds
 * Write an 'eugb' function that accepts two parameters,
 * 'rate and 'euros' representing an amount in euros and
 * an exchange rate of how many pounds one euro is worth.
 * It should return a number which is the amount in pounds
 * after conversion.
 */
function eugb(euros, rate) {
  return euros * rate;
}


/**
 * Say N Times
 * Write an 'nSay' function that accepts two parameters,
 * a message 'msg' and a number 'n'. nSay should return
 * an array that contains n copies of the value of msg.
 */
function nSay(msg, n) {
  // create an array for the results
  const result = [];

  // loop n times
  for (let i=0; i<n; i++) {
    // add the message to the array
    result.push(msg)
  }

  return result;
}

/**
 * Word Count
 * Create a 'wordCount' function that accepts a string
 * 'str' and counts how many words are in it.
 */
function wordCount(str) {
  // splitting the string on space gives an array of words,
  // so the array length reflects how many words there are.
  return str.split(" ").length;

  // Alternatively...
  // Loop and look for spaces
  //
  // let words = 1;
  // for (const x of str) {
  //   if (x == " ") {
  //     words += 1
  //   }
  // }
  // return words;
}


/**
 * Character Count
 * Create a 'charCount' function that accepts a string 'str'
 * and counts how many non-whitespace characters are in it.
 */
function charCount(str) {
  // the count of non-spaces starts at 0
  let result = 0;

  // loop over the string one character at a time
  for (const ch of str) {

    if (ch !== ' ') {
      // if the character isn't a space,
      // increase the count of non-spaces
      result += 1;
    }
  }
  return result;

  // Alternatively...
  // This is a cheeky solution.  Our wordCount function
  // tells us how many words there are, so there must be
  // a whitespace between each word.  If there are six
  // words there will be five spaces.  We calcuate that
  // number (in brackets) then subtract it from the length
  // of the string to return the number of non-whitespace
  // characters.
  // This solution would actually not work if we had multiple
  // repeated spaces in the test strings, e.g.
  // charCount('a   b') should return 2 but this solution would
  // return 3

  // return str.length - (wordCount(str) -1);
}



/**
 * Acronyms
 * Create an 'acronym' function that accepts
 * a string 'str' of words and returns the acronym
 * formed from the initial letter of each word.
 */
function acronym(str) {
  // break up the string into an array of words
  const words = str.split(" ");

  // prep an empty result string
  let result = "";

  // loop over the array of words one word at a time
  for (const word of words) {

    // add the first character from the word (which
    // is in position zero) to the result string
    result += word[0];
  }

  // once all the words are done, we have an acronym
  return result;
}


/**
 * Abbreviated Names
 * Create an 'abbreviate' function that accepts
 * an array of strings 'arr' that represent
 * someone's full name. The function should return
 * a version of the name with all but the last name
 * reduced to initial letters, and each initial
 * letter followed by a full stop and a space.
 */
function abbreviate(arr) {

  // create a result string
  let result = "";

  // loop over the array stopping short of the last item.
  // note: if there's only one item, the code in this loop
  // won't run because 1-1 is 0, and i is immediately not
  // less than 0
  for (let i=0; i < arr.length-1; i+=1) {

    // get the current word
    const word = arr[i];

    // get the first character of that word
    const char = word[0];

    // append the character and fullstop
    result = result + char + ". ";
  }

  // finally append the last word
  result = result + arr[arr.length-1];

  // and return the completed name
  return result;
}


/**
 * Honours Classification:
 * Create an 'honours' function that accepts
 * a number 'mark' and returns a string that
 * describes the level of honours degree
 * associated with that mark.
 */
function honours(mark) {
  if (mark >= 70) return "First";
  if (mark >= 60) return "Upper Second";
  if (mark >= 50) return "Lower Second";
  if (mark >= 40) return "Third";
  return "Fail";
  // NB: each time we only need to test one thing
  // because any higher numbers have already
  // returned a result.
}

/**
 * Unique Words:
 * reate a 'uniqueWords' function that accepts
 * a string 'str' and returns an array of all
 * the unique words in that string.
 *
 * Unique Words II: Mixed Case Matching
 * The 'uniqueWords' function should treat
 * uppercase and lowercase letters as if they
 * are the same letter, and only return
 * lowercase letters.
 */
function uniqueWords(str) {

  // prep a result array
  const result = [];

  // break up the sentence into individual words
  const words = str.split(" ");

  // loop over each word
  for (const word of words) {

    // convert the current word to lowercase
    let lcword = word.toLowerCase();

    // if our lowercase word is not in the
    // results array already, add it (this
    // means we don't get repeat words).
    if (!result.includes(lcword)) {
      result.push(lcword);
    }
  }

  return result;
}


/**
 * Compound Interest
 * Create a 'compound' function that accepts
 * a 'startAmount', a 'rate', and a number of 'years'.
 * It should calculate how startAmount increases
 * over time as interest is added each year.
 */
function compound(startAmount, rate, years) {
  // every year, we add interest to the initial amount
  for (let i=0; i<years; i++) {
    startAmount = startAmount*rate;
  }
  return startAmount;

  // Alternatively...
  // this uses exponentiation

  // return rate ** years * startAmount;
}


/**
 * Word Game
 * Create a function 'wordGame' that requires two
 * string parameters: 'letters' and 'word'.
 * It should return true if the word can be constructed
 * using the characters in 'letters' and false if the
 * word requires characters not provided in 'letters'.
 * Note that each character in 'letters' may only be
 * used once when constructing the word.
 */
function wordGame(letters, word) {

  // break the string into an array of letters
  // so that we can remove letters when they
  // have been used.
  let letterArray = letters.split('');

  // go through each character in the taregt word
  for (const char of word) {

    // find that character in the array of letters
    let i=letterArray.indexOf(char);

    if (i === -1) {
      // a -1 index means char is not in letterArray
      // so the target word cannot be made
      return false;
    }

    // a used letter should be set to null (i.e. removed
    // from the available pool so that it cannot be used
    // a second time
    letterArray[i] = null;
  }

  // if we haven't returned yet we have checked
  // all characters and not returned false, so the word can
  // be constructed with the provided letters
  return true;
}


/**
 * Pay With Coins
 * Create a 'pocketCoins' function that accepts
 * an array of 'coinValues' and an amount, and
 * returns true if the amount can be equalled
 * by adding some or all of the coin values
 * in the array.  Arrays will always be provided
 * sorted with the larger values before smaller ones.
 */
function pocketCoins(coinValues, amount) {

  // This is a recursive solution, it works by
  // reducing the target using the available coins
  // until a solution is reached.

  // If pocketCoins is called with a target amount
  // of zero, that value *can* be reached using no
  // coins, so return true.
  if (amount === 0) return true;

  // If pocketCoins is called with a target amount
  // that is negative, then no amount of coins can help
  // so return false.
  if (amount < 0) return false;

  // If there are no coins left, we cannot make the target
  if (coinValues.length === 0) return false;

  // make a short-name binding `first` for the first coin
  const first = coinValues[0];

  // make a copy of the array except the first coin
  const rest = coinValues.slice(1);

  // now call pocketCoins *twice*
  // now try if we can use the first coin and with the rest of the coins,
  // make the remaining amount
  // NB: if the first coin is bigger than the amount we're trying to make,
  // amount-first will become negative, which we catch above
  if (pocketCoins(rest, amount-first)) return true;

  // if we couldn't use the first coin, try to make the amount
  // with only the remaining coins
  return pocketCoins(rest, amount);
}
