/* 
* Sum All Numbers in a Range
    We'll pass you an array of two numbers. 
    Return the sum of those two numbers plus the sum of all the numbers between them. 
    The lowest number will not always come first.
    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  // know the biggest number in array
  let maxNumber = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  // know the smallest number in array
  let minNumber;
  if (arr.indexOf(maxNumber) === 0) {
    minNumber = arr[1];
  } else {
    minNumber = arr[0];
  }
  // push the numbers between max and min
  let lastArr = [];
  for (let i = minNumber; i <= maxNumber; i++) {
    lastArr.push(i);
  }
  // enter to this array and do the SUM
  let answer = lastArr.reduce((current, next) => {
    return current + next;
  });
  // final answer
  return answer;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 
* Diff Two Arrays
    Compare two arrays and return a new array with any items only found in one of the two given arrays, 
    but not both. 
    In other words, return the symmetric difference of the two arrays.
    Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  let lastArr = [];
  function answer(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        lastArr.push(first[i]);
      }
    }
  }
  answer(arr1, arr2);
  answer(arr2, arr1);
  return lastArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 
* Seek and Destroy
    You will be provided with an initial array (the first argument in the destroyer function), 
    followed by one or more arguments. 
    Remove all elements from the initial array that are of the same value as these arguments.
    Note: You have to use the arguments object.
*/

function destroyer(arr, ...items) {
  let res = [];
  function answer(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        res.push(first[i]);
      }
    }
  }
  answer(arr, items);
  answer(items, arr);
  return res;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ['hamburger']

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Wherefore art thou
  Make a function that looks through an array of objects (first argument) 
  and returns an array of all objects that have matching name and value pairs (second argument). 
  Each name and value pair of the source object has to be present in the object from the collection 
  if it is to be included in the returned array.

For example:
  if the first argument is 
  [{ first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], 
  and the second argument is { last: "Capulet" }, 
  then you must return the third object from the array (the first argument), 
  because it contains the name and its value, 
  that was passed on as the second argument.

*/

function whatIsInAName(collection, source) {
  let answer = [];
  // * collection loop
  for (let i = 0; i < collection.length; i++) {
    let found = true;
    // * source loop
    for (let sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    // quit the source loop then check found
    if (found) {
      answer.push(collection[i]);
    }
  }
  // * answer
  return answer;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
);

console.log(
  whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 })
);

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/*

* Spinal Tap Case
  Convert a string to spinal case. 
  Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
  let mainPattern = /\s|_|(?=[A-Z])/g;
  str = str.split(mainPattern).join("-").toLowerCase();
  return str;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Pig Latin

Pig Latin is a way of altering English Words. 
The rules are as follows:

- If a word begins with a consonant, 
take the first consonant or consonant cluster, 
move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Note: 
Translate the provided string to Pig Latin. 
Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {
  // * vars
  let vowelAsciiCode = [97, 101, 105, 111, 117]; // a e i o u
  let way = ["w", "a", "y"];
  let ay = ["a", "y"];
  let vowelsInWord = [];
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    // * if a word contains a vowel
    if (vowelAsciiCode.includes(str[i].charCodeAt())) {
      vowelsInWord.push(str[i]); // PUSH every vowels have found
      // if the word begins with a vowel
      if (str.startsWith(vowelsInWord[0])) {
        answer = str.split(""); // convert to array to add the "way"
        answer.push(...way); // add "way"
        answer = answer.join(""); // convert it to string
      }
      // * if the word NOT begins with a vowel
      else {
        let indexFirstVowel = str.indexOf(vowelsInWord[0]);
        let firstPart = str.slice(0, indexFirstVowel);
        let secondPart = str.slice(indexFirstVowel);
        answer = secondPart.concat(firstPart, ...ay);
      }
    }
  }
  // * if the word doesnt contains ANY vowels
  if (vowelsInWord.length === 0) {
    answer = str.concat(...ay);
  }
  // * answer
  return answer;
}
console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("eight")); // eightway
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("rhythm")); // rhythmay

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Search and Replace

Perform a search and replace on the sentence 
using the arguments provided 
and return the new sentence.

First argument is the sentence 
to perform the search and replace on.

Second argument is the word 
that you will be replacing (before).

Third argument is what you will 
be replacing the second argument with (after).

Note: Preserve the case of the first character 
in the original word when you are replacing it. 
For example if you mean to replace the word "Book" 
with the word "dog", it should be replaced as "Dog"

*/

function myReplace(str, before, after) {
  let firstCharBefore = before[0];
  let firstCharAfter = after[0];
  let upper = false;
  let lower = false;
  let answer = "";
  // if (word1[0] -> upper && word2[0] -> NOT upper)
  if (
    before[0].toUpperCase() === firstCharBefore &&
    after[0].toUpperCase() !== firstCharAfter
  ) {
    upper = true;
  }
  // else if (word1[0] -> lower && word2[0] -> NOT lower)
  else if (
    before[0].toLowerCase() === firstCharBefore &&
    after[0].toLowerCase() !== firstCharAfter
  ) {
    lower = true;
  }
  // convert first char of after to upper
  if (upper) {
    after = after.charAt(0).toUpperCase().concat(after.slice(1));
  } else if (lower) {
    after = after.charAt(0).toLowerCase().concat(after.slice(1));
  }
  // * replace
  for (let i = 0; i < str.split(" ").length; i++) {
    if (str.split(" ")[i] === before) {
      answer = str.replace(str.split(" ")[i], after);
    }
  }
  // * answer
  return answer;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* DNA Pairing

Pairs of DNA strands consist of nucleobase pairs. 
Base pairs are represented by the characters AT and CG, 
which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. 
Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. 
Return the results as a 2d array.

For example, 
for the input GCG, 
return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, 
and all the arrays are grouped into one encapsulating array.

*/

function pairElement(str) {
  let answer = [];
  //
  function match(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  }
  //
  for (let i = 0; i < str.length; i++) {
    answer.push(match(str[i]));
  }
  //
  return answer;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/*

* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, 
return undefined.

*/

function fearNotLetter(str) {
  let charCodeAtZero = str[0].charCodeAt();
  let missingLetters = [];
  let answer = "";
  let finalAnswer = "";
  for (let i = 1; i < str.length; i++) {
    if (str[i].charCodeAt() === charCodeAtZero + 1) {
      charCodeAtZero++;
    } else {
      missingLetters.push(str[i]);
      charCodeAtZero++;
    }
  }
  //
  if (missingLetters.length === 0) {
    finalAnswer = undefined;
  } else {
    answer = missingLetters.join("").charAt(0).charCodeAt() - 1;
    finalAnswer = String.fromCharCode(answer);
  }
  //
  return finalAnswer;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Sorted Union

Write a function that takes two or more arrays 
and returns a new array of unique values in the order of the original provided arrays.

In other words, 
all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

Check the assertion tests for example

*/

function uniteUnique(...arr) {
  let finalArray = [];
  let allArrays = [].concat(arr);
  // main loop
  for (let i = 0; i < allArrays.length; i++) {
    for (let j = 0; j < allArrays[i].length; j++) {
      if (!finalArray.includes(allArrays[i][j])) {
        finalArray.push(allArrays[i][j]);
      }
    }
  }
  //
  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
  // create a object of html entities (u can work without object)
  let entities = {
    ampersand: "&amp;",
    lessThan: "&lt;",
    greaterThan: "&gt;",
    doubleQuote: "&quot;",
    apostrophe: "&apos;",
  };

  // create match func to match every char with the htmlEntitie
  function match(char) {
    switch (char) {
      case "&":
        return entities.ampersand;
      case "<":
        return entities.lessThan;
      case ">":
        return entities.greaterThan;
      case '"':
        return entities.doubleQuote;
      case "'":
        return entities.apostrophe;
    }
  }

  // to hold within it the result
  let answer = [];

  // mainLoop
  for (let i = 0; i < str.length; i++) {
    if (match(str[i])) {
      answer.push(match(str[i]));
    } else {
      answer.push(str[i]);
    }
  }

  // return answer
  return answer.join("");
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Sum All Odd Fibonacci Numbers

Given a positive integer num, 
return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, 
sumFibs(10) should return 10 
because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

function sumFibs(num) {
  let prevNumber = 0;
  let currentNumber = 1;
  let sequence = [0, 1];
  let sum = 0;

  // * function to get the Fibonacci numbers that are lessThan or equal to "num"
  function getFibonacciNumbers() {
    for (let i = 0; currentNumber <= num; i++) {
      currentNumber += prevNumber;
      // check again after the += if currenNumber <= num
      if (currentNumber <= num) {
        sequence.push(currentNumber);
      }
      // intialize the prevNumber (its always the )
      prevNumber = currentNumber - prevNumber;
    }
    return sequence;
  }

  // console.log(getFibonacciNumbers()); [to know the Febonacci Numbers of the "num"]

  // * filter and get just the ODD Fibonacci numbers
  let oddNumbers = getFibonacciNumbers().filter((el) => el % 2 !== 0);

  // * SUM --> ODD Fibonacci numbers
  sum = oddNumbers.reduce((prev, curr) => prev + curr);

  // *
  return sum;
}

console.log(sumFibs(1)); // 2
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025)); // 135721

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 

1 and itself. 

For example, 
2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes 
so it returns the sum of all prime numbers that are less than or equal to num.

*/

function sumPrimes(num) {
  let primesArr = [];
  let sum = 0;
  // * func to check if its a prime number or not
  function isPrime(x) {
    if (x <= 1) {
      return false;
    }
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  // * loop and check every number using the isPrime() func
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primesArr.push(i);
    }
  }
  // * sum all primes
  sum = primesArr.reduce((prev, curr) => prev + curr);
  //
  // console.log(primesArr); // primes in the range
  //
  return sum;
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/*

* Smallest Common Multiple

Find the smallest common multiple of the provided parameters 
that can be evenly divided by both, 

as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers 
that will not necessarily be in numerical order.

For example, 
if given 1 and 3, 
find the smallest common multiple of both 1 and 3 
that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.

*/

function smallestCommons(arr) {
  if (arr[0] > arr[1]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  //
  let range = [];
  let answer = [];
  let x = 0;
  let maxNumber = Number.MAX_SAFE_INTEGER;
  // * loop to set the array of range
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  // * mainLoop
  for (let i = 1; i <= maxNumber; i++) {
    // secondLoop
    for (let j = 0; j < range.length; j++) {
      if (i % range[j] === 0) {
        x++;
      }
    }
    //
    if (x === range.length) {
      answer.push(i);
      break;
    } else {
      x = 0;
    }
  }
  // *
  return answer[0];
}

console.log(smallestCommons([1, 3])); // 6
console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Drop it

Given the array arr, 
iterate through and remove each element 
starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return:
the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.

*/

function dropElements(arr, func) {
  let result = [];
  // iterate through arr
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i); // return the rest of the array...
    }
  }
  return result;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
); // [1, 2, 3]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); // [3, 4]
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); // [1, 0, 1]
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
); // [1, 2, 3]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
); // []
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
); // [7, 4]
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
); // [3, 9, 2]

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Steamroller

Flatten a nested array. 
You must account for varying levels of nesting.
"Your solution should not use:
the Array.prototype.flat() 
or 
Array.prototype.flatMap() methods."

*/

function steamrollArray(arr) {
  let answer = [].concat(...arr);
  // if there's still some array(s) inside the MAIN array
  if (answer.some(Array.isArray)) {
    return steamrollArray(answer);
  } else {
    return answer;
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Binary Agents

Return an English translated sentence of the passed binary string.
The binary string will be space separated.

*/

function binaryAgent(str) {
  // use split the binary into an array
  let answer = str.split(" ");
  // convert binary to decimal
  for (let i = 0; i < answer.length; i++) {
    answer[i] = parseInt(answer[i], 2); // 2 base
  }
  // convert each decimal number to its value
  for (let i = 0; i < answer.length; i++) {
    answer[i] = String.fromCharCode(answer[i]);
  }
  // join elements together
  answer = answer.join("");
  //
  return answer;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
console.log(
  binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
  )
);

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/*

* Everything Be True

Check if the predicate (second argument) 
is truthy on all elements of a collection (first argument).

In other words, 
you are given an array collection of objects. 
The predicate pre will be an object property 
and you need to return true if its value is truthy. 
Otherwise, return false.

In JavaScript, 
truthy values are values that translate to true 
when evaluated in a Boolean context.

Remember, 
you can access object properties through either dot notation or [] notation.

*/

function truthCheck(collection, pre) {
  let checker = true;
  // mainLoop
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      checker = false;
    }
  }
  return checker;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
); // false

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
); // true

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
); // false

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number"
  )
); // true

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "caught"
  )
); // false

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number"
  )
); // false

console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "data"
  )
); // true

console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "id"
  )
); // false

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Arguments Optional

Create a function that sums two arguments together. 
If only one argument is provided, 
then return a function that expects one argument 
and returns the sum.

For example: 
addTogether(2, 3) should return 5
and addTogether(2) should return a function.

Calling this returned function with a single argument 
will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {
  let arr = [...arguments];
  // check if either arg isnt a number
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
  }
  //
  if (arr.length === 1) {
    return function addNum2(num2) {
      return addTogether(arr[0], num2);
    };
  } else {
    return arr[0] + arr[1];
  }
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); // 53
console.log(addTogether(5)(7)); // 12
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined
console.log(addTogether("2", 3)); // undefined
console.log(addTogether(5, undefined)); // undefined

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------

/* 

* Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.

*/

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  // getFirstName()
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };

  // getLastName()
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };

  // getFullName()
  this.getFullName = function () {
    return firstAndLast;
  };

  // setFirstName()
  this.setFirstName = function (first) {
    firstAndLast = `${first} ${firstAndLast.split(" ")[1]}`;
  };

  // setLastName()
  this.setLastName = function (last) {
    firstAndLast = `${firstAndLast.split(" ")[0]} ${last}`;
  };

  // setFullName()
  this.setFullName = function (fullName) {
    firstAndLast = fullName;
  };
};

const bob = new Person("Bob Ross");

console.log(bob.getFirstName()); // Bob
console.log(bob.getLastName()); // Ross
console.log(bob.getFullName()); // Bob Ross

bob.setFirstName("Haskell");
console.log(bob.getFullName()); // Haskell Ross

bob.setLastName("Curry");
console.log(bob.getFullName()); // Haskell Curry

bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); // Haskell Curry
console.log(bob.getFirstName()); // Haskell
console.log(bob.getLastName()); // Curry

// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
// * ------------------------------------------------------------
console.log("----------------------");
// * ------------------------------------------------------------
