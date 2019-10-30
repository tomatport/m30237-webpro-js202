"use strict";
const { test, only } = QUnit;

QUnit.config.reorder = false;

// Credit: https://github.com/goatslacker/get-parameter-names
function getArgNames(fn = "") {
  const COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  const DEFAULT_PARAMS = /=[^,)]+/mg;
  const FAT_ARROWS = /=>.*$/mg;
  const code = fn.toString()
    .replace(COMMENTS, '')
    .replace(FAT_ARROWS, '')
    .replace(DEFAULT_PARAMS, '');
  const result = code.slice(code.indexOf('(') + 1, code.indexOf(')'))
    .match(/([^\s,]+)/g);
  return result === null
    ? []
    : result;
}

// built from multiple lesser online examples
function ordinal(i) {
   const ord=['th','st','nd','rd'];
   const x=i%100;
   return i+(ord[(x-20)%10]||ord[x]||ord[0]);
}


QUnit.assert.functionExists = function (fnName, argNames = []) {
  const subject = window[fnName];
  const realArgNames = getArgNames(subject);
  let result = true;

  const createResultObject = {
    expected: `function`,
    actual: typeof subject,
    result: typeof subject === 'function',
    message: `Create a function called '${fnName}'.`
  };
  this.pushResult(createResultObject);
  result = result && typeof subject === 'function';

  for (let i=0; i<argNames.length; i++) {
    this.pushResult({
      expected: argNames[i],
      actual: realArgNames[i],
      result: argNames[i] === realArgNames[i],
      message: `The ${ordinal(i+1)} argument should be called '${argNames[i]}'.`
    });
    result = result && (argNames[i] === realArgNames[i]);
  }

  const argsResult = subject ? subject.length === argNames.length : false;
  const plural = argNames.length === 1 ? "argument" : "arguments";
  this.pushResult({
    expected: argNames.length,
    actual: subject ? subject.length : 0,
    result: subject ? subject.length === argNames.length : false,
    message: `The '${fnName}' function must take ${argNames.length} ${plural}.`
  });

  return result;
};


QUnit.assert.explain = function (message, result = true) {
  this.pushResult({ result, message });
};

if (window.globalErrors.length > 0) {
  test("Global Error", (assert) => {
    assert.explain(
      `There has been a global error, most probably a syntax error.
       Look in the Javascript console for details.`,
       false
     );
  });
}

test(
  `Easy Start: Complete the 'easyStart' function so that it always
  returns true.`, (assert) => {

  if (!assert.functionExists('easyStart')) return;

  assert.strictEqual(
    easyStart(),
    true,
    `The 'easyStart' function should return true
     when passed no parameters.`
  );

  assert.strictEqual(
    easyStart("this should be ignored"),
    true,
    `The 'easyStart' function specifies no arguments
     so it should ignore any that are passed.`
  );

});


test(
  `Hello World: Complete the 'helloWorld' function so that so that it
  always returns the string "hello world".`, (assert) => {

  if (assert.functionExists('helloWorld')) return;

  assert.strictEqual(
    helloWorld(),
    "hello world",
    `The helloWorld function should return "hello world".`
  );

  assert.strictEqual(
    helloWorld("this should be ignored"),
    "hello world",
    `The 'helloWorld' function specifies no arguments
     so it should ignore any that are passed.`
  );

});


test(
  `Numbers To Array: Change the 'numToArray' function so
  that instead of creating an array of numbers
  from 0 to 'limit', it creates an array of
  numbers counting down from 'limit' to 1.`, (assert) => {

  if (!assert.functionExists( 'numToArray', ['limit'] )) return;

  assert.deepEqual(
    numToArray(5),
    [5, 4, 3, 2, 1],
    "Calling numToArray(5) should return [5,4,3,2,1]."
  );

  assert.deepEqual(
    numToArray(1),
    [1],
    "Calling numToArray(1) should return [1]."
  );

  assert.deepEqual(
    numToArray(10),
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    "Calling numToArray(10) should return [10,9,8,7,6,5,4,3,2,1]."
  );

});


test(
  `Hello World 2: Create the function 'hw2' which returns an
  array of the strings "hello" and "world".`, (assert) => {

  if (!assert.functionExists('hw2')) return;

  assert.deepEqual(
    hw2(),
    ["hello", "world"],
    `The 'hw2' function should return an array where the first word
     is "hello" and the second word is "world".`
  );

  assert.strictEqual(
    hw2().length,
    2,
    "The 'hw2' function should return an array of only two strings."
  );

});


test(
  `Greetings: Create a 'greet' function that accepts a 'name' parameter
  and returns the string "Hello <name> how are you?".`, (assert) => {

  if (!assert.functionExists('greet', ["name"])) return;

  assert.strictEqual(
    greet("Tricia"),
    "Hello Tricia how are you?",
    `Calling greet("Tricia") should return
     "Hello Tricia how are you?"`
  );

  assert.strictEqual(
    greet("Zaphod"),
    "Hello Zaphod how are you?",
    `Calling greet("Zaphod") should return
     "Hello Zaphod how are you?"`
  );

});


test(
  `A Positive Sign: Create a 'sign' function that accepts one parameter 'x'
  and returns the string "positive" for x > 0, and the string
  "negative" for x < 0.`, (assert) => {

  if (!assert.functionExists('sign', ["x"])) return;

  assert.strictEqual(
    sign(10),
    "positive",
    `10 is positive, so return "positive"`
  );

  assert.strictEqual(
    sign(-1),
    "negative",
    `-1 is negative, so return "negative"`
  );

  assert.strictEqual(
    sign(-49.3),
    "negative",
    `If the first two tests work, this one should too!`
  );

});


test(
  `Euros to GB Pounds: Write an 'eugb' function that accepts two
  parameters, 'rate and 'euros' representing an amount in euros and an
  exchange rate of how many pounds one euro is worth.  It should return
  a number which is the amount in pounds after conversion.`, (assert) => {

  if (!assert.functionExists('eugb', ["euros", "rate"])) return;

  assert.strictEqual(
    eugb(10, 0.9),
    9,
    "Ten euros at an exchange rate of 0.9 GBP per EURO gives £9."
  );

  assert.strictEqual(
    eugb(1000, 1.337),
    1337,
    `One thousand euros at an exchange rate of
    1.337 GBP per EURO gives £1337.`
  );

});


test(
  `Say N Times: Write an 'nSay' function that accepts two parameters, a
  message 'msg' and a number 'n'.  nSay should return an array that
  contains n copies of the value of msg.`, (assert) => {

  if (!assert.functionExists('nSay', ["msg", "n"])) return;

  assert.deepEqual(
    nSay("hello", 1),
    ["hello"],
    `Calling nSay("hello",1) should return an array of one "hello".`
  );

  assert.deepEqual(
    nSay("badger", 3),
    ["badger", "badger", "badger"],
    `Calling nSay("badger",3) should return an
     array of three strings, each saying "badger".`
  );

});


test(
  `Word Count: Create a 'wordCount' function that accepts a string 'str'
  and counts how many words are in it.`, (assert) => {

  if (!assert.functionExists('wordCount', ["str"])) return

  assert.strictEqual(
    wordCount("The cat sat on the mat"),
    6,
    "'The cat sat on the mat' has 6 words."
  );

  assert.strictEqual(
    wordCount("a a a a a"),
    5,
    "`a` appears 5 times, so there are 5 words."
  );

});


test(
  `Character Count: Create a 'charCount' function that accepts a
  string 'str' and counts how many non-whitespace characters are
  in it.`, (assert) => {

  if (!assert.functionExists('charCount', ["str"])) return;

  assert.strictEqual(
    charCount("The cat sat on the mat"),
    17,
    "`The cat sat on the mat` contains 17 non-whitespace characters."
  );

  assert.strictEqual(
    charCount("a a a a a"),
    5,
    "`a` appears 5 times, so there are just 5 characters."
  );

  assert.strictEqual(
    charCount("            X"),
    1,
    "All spaces must be ignored."
  );

});


test(
  `Acronyms: Create an 'acronym' function that accepts a
  string 'str' of words and returns the acronym formed from the
  initial letter of each word.`, (assert) => {

  if (!assert.functionExists('acronym', ["str"])) return;

  assert.strictEqual(
    acronym("North Atlantic Treaty Organisation"),
    "NATO",
    `Given 'North Atlantic Treaty Organisation', the function should
    return the acronym 'NATO'.`
  );

  assert.strictEqual(
    acronym("Graphics Interchange Format"),
    "GIF",
    `The age-old animated image format GIF is an acronym of
     Graphics Interchange Format.`
  );

  assert.strictEqual(
    acronym("Self Contained Underwater Breathing Apparatus"),
    "SCUBA",
    "If the first two tests work, this one should too!"
  );

});


test(
  `Abbreviated Names: Create an 'abbreviate' function that accpts an
  array of strings 'arr' that represent someone's full name.
  The function should return a version of the name with all but the
  last name reduced to initial letters, and each initial letter
  followed by a full stop and a space.`, (assert) => {

  if (!assert.functionExists('abbreviate', ["arr"])) return;

  assert.strictEqual(
    abbreviate(["John", "Ronald", "Reuel", "Tolkien"]),
    "J. R. R. Tolkien",
    `Abbreviating ['John', 'Ronald', 'Reuel', 'Tolkien'] should
    give 'J. R. R. Tolkien'.`
  );

  assert.strictEqual(
    abbreviate(["Johann", "Sebastian", "Bach"]),
    "J. S. Bach",
    `Abbreviating Johann Sebastian Bach should give 'J. S. Bach'.`
  );

  assert.strictEqual(
    abbreviate(["Clive", "Staples", "Lewis"]),
    "C. S. Lewis",
    `Abbreviating Clive Staples Lewis should give 'C. S. Lewis'.`
  );

  assert.strictEqual(
    abbreviate(["Socrates"]),
    "Socrates",
    "Socrates had only one name, so it cannot be abbreviated."
  );

});


test(
  `Honours Classification: Create an 'honours' function that accepts
  a number 'mark' and returns a string that describes the level of
  honours degree associated with that mark.`, (assert) => {

  if (!assert.functionExists('honours', ['mark'])) return;

  assert.strictEqual(
    honours(70),
    "First",
    "Any mark of 70 or over is considered first class.  70 is a first."
  );

  assert.strictEqual(
    honours(99),
    "First",
    "Any mark of 70 or over is considered first class.  99 is a first."
  );

  assert.strictEqual(
    honours(68),
    "Upper Second",
    `Any mark of 60 or over (but less than 70) is considered
     upper second class.`
  );

  assert.strictEqual(
    honours(60),
    "Upper Second",
    `Any mark of 60 or over (but less than 70) is considered
     upper second class.`
  );

  assert.strictEqual(
    honours(55),
    "Lower Second",
    `Any mark of 50 or over (but less than 60) is considered
     lower second class.`
  );

  assert.strictEqual(
    honours(45),
    "Third",
    "Any mark of 40 or over (but less than 50) is considered third class."
  );

  assert.strictEqual(
    honours(40),
    "Third",
    "Any mark of 40 or over (but less than 50) is considered third class."
  );

  assert.strictEqual(
    honours(38),
    "Fail",
    "Any mark below 40 is considered a fail."
  );

});



test(
  `Unique Words: Create a 'uniqueWords' function that accepts a
  string 'str' and returns an array of all the unique words in
  that string.`, (assert) => {

  if (!assert.functionExists('uniqueWords', ['str'])) return;

  assert.deepEqual(
    uniqueWords("the cat sat on the mat"),
    ["the", "cat", "sat", "on", "mat"],
    `There are two instances of 'the' in 'the cat sat on the mat' - only
     one 'the' should be in the resulting array.`
  );

  assert.deepEqual(
    uniqueWords("a a a a a"),
    ["a"],
    `'a' appears 5 times and there are no other words, so there should be
     an array of just 'a'`
  );

  assert.deepEqual(
    uniqueWords("there they're their"),
    ["there", "they're", "their"],
    "there, they're, and their are three different words."
  );

});


test(
  `Compound Interest: Create a 'compound' function that accepts a
  'startAmount', a 'rate', and a number of 'years'.  It should
  calculate how startAmount increases over time as interest is
  added each year.`, (assert) => {

  if (!assert.functionExists(
    'compound',
    ['startAmount', 'rate', 'years'])
  ) return;

  assert.equal(
    impreciseNumber(compound(10, 1.1, 1)),
    impreciseNumber(11),
    `A starting amount of £10, with an increase rate of 1.1 (which is
    10% interest per year) for 1 year resulting in an amount of £11.`
  );

  assert.equal(
    impreciseNumber(compound(10, 1.1, 2)),
    impreciseNumber(12.1),
    `A starting amount of £10, with an increase rate of 1.1 (which is
    10% interest per year) for 2 years resulting in an amount of £12.10.`
  );

  assert.equal(
    impreciseNumber(compound(10, 1.1, 10)),
    impreciseNumber(25.937424601),
    `A starting amount of £10, with an increase rate
    of 1.1 (which is 10% interest per year) for 10 years
    resulting in an amount of about £25.94.`
  );

});


function impreciseNumber(x) {
  if (typeof x !== 'number') return x;
  return Number(x.toPrecision(8));
}


test(
  `Unique Words II: Mixed Case Matching: The 'uniqueWords' function
  should treat uppercase and lowercase letters as if they are the
  same letter, and only return lowercase letters.`, (assert) => {

  assert.deepEqual(
    uniqueWords("The cat sat on the mat"),
    ["the", "cat", "sat", "on", "mat"],
    `There are two instances of 'the' in 'The cat sat on the mat' - only
     one 'the' should be in the resulting array.`
  );

  assert.deepEqual(
    uniqueWords("The THE thE the tHE"),
    ["the"],
    `There are multiple instances of 'the' in this example,
     each with different capitalisation.  All represent the
     same word, so the resulting array should contain only
     one lowercase instance of 'the'.`
  );

});



test(
  `Word Game: Create a function 'wordGame' that requires two
  string parameters: 'letters' and 'word'.  It should return true if
  the word can be constructed using the characters in 'letters' and
  false if the word requires characters not provided in 'letters'.
  Note that each character in 'letters' may only be used once when
  constructing the word.`, (assert) => {

  if (!assert.functionExists('wordGame', ["letters", "word"])) return;

  assert.strictEqual(
    wordGame("a", "a"),
    true,
    "The word `a` can be constructed from the characters `a`; so: true."
  );

  assert.strictEqual(
    wordGame("a", "aaa"),
    false,
    `The word 'aaa' cannot be constructed from the characters 'a'
    (because two more 'a' characters are needed); so: false.`
  );

  assert.strictEqual(
    wordGame("a", "b"),
    false,
    `The word 'b' cannot be constructed from the characters 'a'; so: false.`
  );

  assert.strictEqual(
    wordGame("actx", "cat"),
    true,
    `The word 'cat' can be constructed from the letters 'actx'; so: true.`
  );

  assert.strictEqual(
    wordGame("kpechtunx", "bucon"),
    false,
    `The word 'bucon' cannot be constructed from the
    letters 'kpechtunx'; so: false.`
  );

  assert.strictEqual(
    wordGame("cautioned", "education"),
    true,
    `The word 'education' can be constructed from the
    letters 'cautioned'; so: true.`
  );

});


test(
  `Pay With Coins: Create a 'pocketCoins' function that accepts an array
  of 'coinValues' and an amount, and returns true if the amount can be
  equalled by adding some or all of the coin values in the array.  Arrays
  will always be provided sorted with the larger values before
  smaller ones.`, (assert) => {

  if (!assert.functionExists('pocketCoins', ['coinValues', 'amount'])) return;

  assert.strictEqual(
    pocketCoins([10, 10, 10], 30),
    true,
    `When passed an array of three ten pence coins [10, 10, 10], and a target
     value of 30; 30 can be reachd by using all three 10 pence coins, so
     true is returned.`
  );

  assert.strictEqual(
    pocketCoins([10, 10, 10], 20),
    true,
    `20 could be reached by using any two of the 10 pence coins,
     so true is returned.`
  );

  assert.strictEqual(
    pocketCoins([10, 10, 10], 10),
    true,
    `10 could be reached by using any of the 10 pence coins; so: true.`
  );

  assert.strictEqual(
    pocketCoins([10], 5),
    false,
    `When passed an array of one ten pence coin [10], and a target value of 5;
     it is not possible to reach 5 exactly, so false is returned.`
  );

  assert.strictEqual(
    pocketCoins([10, 10, 5, 5, 1, 1, 1], 26),
    true,
    `Given two tens, two fives and three ones, 26 could be reached by using
     both 10's, one five and one ones, so: true.`
  );

  assert.strictEqual(
    pocketCoins([10, 10, 5, 5, 1, 1, 1], 27),
    true,
    `Given two tens, two fives and three ones, 27 could be reached by using
     both 10's, one five and two ones, so: true.`
  );

  assert.strictEqual(
    pocketCoins([10, 10, 5, 5, 1, 1, 1], 28),
    true,
    `Given two tens, two fives and three ones, 28 could be reached by using
     both 10's, one five and all the ones, so: true.`
  );

  assert.strictEqual(
    pocketCoins([10, 10, 5, 5, 1, 1, 1], 29),
    false,
    `Given two tens, two fives and three ones, 29 CANNOT be reached exactly.
     The closest we can get is 28 or 30.`
  );

  assert.strictEqual(
    pocketCoins([], 17),
    false,
    "Given no coins, 17 CANNOT be reached."
  );

  assert.strictEqual(
    pocketCoins([], 0),
    true,
    "Given no coins, 0 can reached."
  );

  assert.strictEqual(
    pocketCoins([5, 2, 2, 2], 6),
    true,
    `Given a five and three twos, 6 can be reached exactly.`
  );

});
