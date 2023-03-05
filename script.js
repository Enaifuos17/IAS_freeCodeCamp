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
