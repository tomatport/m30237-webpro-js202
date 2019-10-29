const { test, only } = QUnit;

QUnit.config.reorder = false;

QUnit.assert.functionExists = function (subject, argCount, message) {
  // argCount is optional, message isn't
  if (typeof argCount === 'string') {
    argCount = undefined;
    message = argCount;
  }

  const result = typeof subject === 'function';
  this.pushResult({
    result,
    actual: typeof subject,
    expected: "function",
    message: message || `Expected a function, got a ${ typeof subject }.`
  });

  if (result && argCount !== undefined) {
    const tense = (subject.length === argCount) ? 'accepts' : 'must accept';
    const plural = (1 === argCount) ? 'argument' : 'arguments';
    this.pushResult({
      result: subject.length === argCount,
      actual: subject.length,
      expected: argCount,
      message: `The function ${tense} ${ argCount || 'no' } ${plural}.`
    });
  }
};



QUnit.assert.explain = function (message, result = true) {
  this.pushResult({
    result,
    message
  });
};


test("Easy Start", (assert) => {
  assert.explain(
    `Complete the "easyStart" function so that it always returns true.`
  );
  assert.functionExists(
    window.easyStart,
    0,
    `We have provided an "easyStart" function.`
  );
  assert.strictEqual(
    easyStart(),
    true,
    `The "easyStart" function should return true
     when passed no parameters.`
  );
  assert.strictEqual(
    easyStart("port"),
    true,
    `The "easyStart" function should return true
     when passed a string.`
  );
  assert.strictEqual(
    easyStart("❤️"),
    true,
    `The "easyStart" function should return true
     when passed unicode characters.`
  );
});


test("Hello World", (assert) => {
  assert.explain(
    `Complete the 'helloWorld' function so that so that it always
     returns the string "hello world".`
  );
  assert.functionExists(
    window.helloWorld,
    0,
    `We have provided a "helloWorld" function.`
  );
  assert.strictEqual(
    helloWorld(),
    "hello world",
    "The helloWorld function should return 'hello world'."
  );
});


test("Numbers To Array", (assert) => {
  assert.explain(
    `Change the numToArray function so that so
     that instead of creating an array of numbers
     from zero to limit, it creates an array of
     numbers counting down from limit to 1.`
  );
  assert.functionExists(
    window.numToArray,
    1,
    `We have provided the 'numToArray' function.`
  );
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


test("Hello World 2", (assert) => {
  assert.explain(
    `Create the function "hw2" which returns an
     array of the strings 'hello' and 'world'.`
  );
  assert.functionExists(window.hw2,0);
  assert.deepEqual(
    hw2(),
    ["hello", "world"],
    `The hw2 function should return an array where the first word
     is 'hello' and the second word is 'world'`
  );
  assert.strictEqual(
    hw2().length,
    2,
    "The hw2 function should return an array of only two strings."
  );

});


test("greet", (assert) => {
  assert.explain(
    `Create a 'greet' function that accepts a name parameter
     and returns the string 'Hello <name> how are you?'.`
  );
  assert.functionExists(
    window.greet,
    1,
    "Create a `greet` function..."
  );
  assert.strictEqual(
    greet("Tricia"),
    "Hello Tricia how are you?",
    `The greet function for 'Tricia' should return
     'Hello Tricia how are you?'`
  );
  assert.strictEqual(
    greet("Arthur"),
    "Hello Arthur how are you?",
    `The greet function for 'Zaphod' should return
     'Hello Zaphod how are you?'`
  );

});



test("Say N Times", (assert) => {
  assert.explain(
    `Write an 'nSay' function that accepts two parameters, a message 'msg' and
     a number 'n'.  'nSay' should return an array that contains 'n' copies
     of 'msg'.`
  );
  assert.functionExists(
    window.nSay,
    2,
    "Write an 'nSay' function..."
  );
  assert.deepEqual(
    nSay("hello", 1),
    ["hello"],
    `Calling 'nSay' with a string of 'hello' and a number 1, should return an
     array with one 'hello'.`
  );
  assert.deepEqual(
    nSay("badger", 3),
    ["badger", "badger", "badger"],
    `Calling 'nSay' with a string of 'badger' and a number 3, should return an
     array of three strings, each saying 'badger'.`
  );

});


test("Euros to GB Pounds", (assert) => {
  assert.explain(
    `Write an 'eugb' function that accepts two parameters: an amount in
     euros and an exchange rate.  It should return a number which is the
     amount in pounds after conversion.`
  );
  assert.functionExists(
    window.eugb,
    2,
    "Write an `eugb` function..."
  );
  assert.strictEqual(
    eugb(10, 0.9),
    9,
    "Ten euros at an exchange rate of 0.9gbp-to-1 euro gives £9."
  );
  assert.strictEqual(
    eugb(1000, 1.337),
    1337,
    "One thousand euros at an exchange rate of 1.337-to-1 euro gives £1337."
  );
});


test("Acronyms", (assert) => {
  assert.explain(
    `Create an 'acronym' function that accepts a string of words and returns
     the acronym formed from the initial letter of each word.`
  );
  assert.functionExists(window.acronym, 1);
  assert.strictEqual(
    acronym("North Atlantic Treaty Organisation"),
    "NATO",
    "NATO is the acronym of the North Atlantic Treaty Organisation."
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
    "If the first two work, this one should too!"
  );
});


test("Abbreviated Names", (assert) => {
  assert.explain(
    `Create an 'abbreviate' function that accpts an array of strings that
     represent someone's full name.  The function should return a version
     of the name with all but the surname reduced to initial letters, and
     each initial letter followed by a full stop.`
  );
  assert.functionExists(window.abbreviate, 1);
  assert.strictEqual(
    abbreviate(["John", "Ronald", "Reuel", "Tolkien"]),
    "J. R. R. Tolkien",
    "Abbreviating `John Ronald Reuel Tolkien` should give `J. R. R. Tolkien`."
  );
  assert.strictEqual(
    abbreviate(["Johann", "Sebastian", "Bach"]),
    "J. S. Bach",
    "Abbreviating Johann Sebastian Bach should give `J. S. Bach`."
  );
  assert.strictEqual(
    abbreviate(["Clive", "Staples", "Lewis"]),
    "C. S. Lewis",
    "Abbreviating Clive Staples Lewis should give `C. S. Lewis`."
  );
  assert.strictEqual(
    abbreviate(["Harambe"]),
    "Harambe",
    "Harambe had only one name, so it cannot be abbreviated."
  );
});


test("Honours Classification", (assert) => {
  assert.explain(
      `Create an 'honours' function that accepts a number 'mark' and returns
       a string that describes the level of honours degree associated with
      that mark.`
  );
  assert.functionExists(
    window.honours,
    1
  );
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



test("Unique Words", (assert) => {
  assert.explain(
      `Create a 'uniqueWords' function that accepts a string and returns
       an array of all the unique words in that string.`
  );
  assert.functionExists(
    window.uniqueWords,
    1,
    "Create a 'uniqueWords' function..."
  );
  assert.deepEqual(
    uniqueWords("The cat sat on the mat"),
    ["the", "cat", "sat", "on", "mat"],
    `There are two instances of 'the' in 'the cat sat on the mat' - only
     but one 'the' should be in the resulting array.`
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
    "There are three different words in this sentence."
  );

});


test("Unique Words II: Mixed Case Matching", (assert) => {
  assert.explain(
      `The 'uniqueWords' function should treat uppercase and
       lowercase letters as if they are the same letter.`
  );
  assert.deepEqual(
    uniqueWords("The cat sat on the mat"),
    ["the", "cat", "sat", "on", "mat"],
    `There are two instances of 'the' in 'the cat sat on the mat' - only
     but one 'the' should be in the resulting array.`
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




test("Word Count", (assert) => {
  assert.explain(
    `Create a 'wordCount' function that accepts a string and counts how
     many words are in it.`
  );
  assert.functionExists(
    window.wordCount,
    1,
    "Create a `wordCount` function..."
  )
  assert.strictEqual(
    wordCount("The cat sat on the mat"),
    6,
    "The cat sat on the mat has 6 wordes."
  );
  assert.strictEqual(
    wordCount("a a a a a"),
    5,
    "`a` appears 5 times, so there are 5 words."
  );
});


test("Chaeracter Count", (assert) => {
  assert.explain(
    `Create a 'charCount' function that accepts a string and counts how many
     non-whitespace characters are in it.`
  );
  assert.functionExists(
    window.charCount,
    1,
    `Create a 'charCount' function...`
  );
  assert.strictEqual(
    charCount("The cat sat on the mat"),
    17,
    "The cat sat on the mat contains 17 non-whitespace characters."
  );
  assert.strictEqual(
    charCount("a a a a a"),
    5,
    "`a` appears 5 times, so there are just 5 characters."
  );
  assert.strictEqual(
    charCount("            X"),
    1,
    "There is just one character here."
  );
});

test("Compound Interest", (assert) => {
  assert.explain(
    `Create a 'compound' function that accepts a 'startAmount', a 'rate', and
     a 'duration'.  It should calculate how startAmount increases over time
     as interest is added.`
  );
  assert.functionExists(
    window.compound,
    3,
    "Create a 'compound' function..."
  );
  assert.strictEqual(
    compound(10, 1.1, 1),
    11,
    `A starting amount of £10, with an interest rate of 1.1% for 1 year
     resulting in an amount of £11.`
  );
  assert.strictEqual(
    compound(10, 1.1, 2),
    12.100000000000001,
    `A starting amount of £10, with an interest rate of 1.1% for 2 years
     resulting in an amount of £12.10`
  );
  assert.strictEqual(
    compound(10, 1.1, 10),
    25.937424601000018,
    `A starting amount of £10, with an interest rate of 1.1% for 10 years
     resulting in an amount of £25.93`
  );
});

test("Can I Pay With Coins?", (assert) => {
  assert.explain(
    `Create a 'pocketCoins' function that accepts an array of 'coinValues' and
     an amount, and returns true if the amount can be equalled by adding some
    or all of the coin values in the array.  Arrays will always be provided
    sorted with the larger values before smaller ones.`
  );
  assert.functionExists(
    window.pocketCoins,
    2,
    "Create a `pocketCoins` function..."
  );
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
});


test("Word Game", (assert) => {
  assert.explain(
    `Create a function 'wordGame' that requires two string parameters:
     'letters' and 'word'.  It should return true if the word can be
     constructed using the characters in 'letters' and false if the
     word requires characters not provided in 'letters'.  Note that
     each character in 'letters' may only be used once when
     constructing a word.`
  );
  assert.functionExists(
    window.wordGame,
    2,
    `Create a function 'wordGame'...`
  );
  assert.strictEqual(
    wordGame("a", "a"),
    true,
    "The word `a` can be constructed from the characters `a`; so: true."
  );
  assert.strictEqual(
    wordGame("a", "aaa"),
    false,
    "The word `aaa` can be constructed from the characters `a` (because two more `a` characters are needed); so: false."
  );
  assert.strictEqual(
    wordGame("a", "b"),
    false,
    "The word `b` cannot be constructed from the characters `a`; so: false."
  );
  assert.strictEqual(
    wordGame("actx", "cat"),
    true,
    "The word `cat` can be constructed from the letters `actx`; so: true."
  );
  assert.strictEqual(
    wordGame("kpechtunx", "bucon"),
    false,
    "The word `bucon` cannot be construced from the letters `kpechtunx`; so: false."
  );
  assert.strictEqual(
    wordGame("cautioned", "education"),
    true,
    "The word `education` can be construced from the letters `cautioned`; so: true."
  );
});
