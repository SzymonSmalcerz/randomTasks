/*

  https://www.codewars.com/kata/alphabetic-anagrams/train/javascript

  Consider a "word" as any sequence of capital letters A-Z
  (not limited to just "dictionary words"). For any word
  with at least two different letters, there are other
  words composed of the same letters but in a different
  order (for instance, STATIONARILY/ANTIROYALIST, which
  happen to both be dictionary words; for our purposes
  "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

  We can then assign a number to every word, based on
  where it falls in an alphabetically sorted list of
  all words made up of the same group of letters. One
  way to do this would be to generate the entire list
  of words and find the desired one, but this would be slow if the word is long.

  Given a word, return its number. Your function should
  be able to accept any word 25 letters or less in
  length (possibly with some letters repeated),
  and take no more than 500 milliseconds to run.
  To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

  For very large words, you'll run into number
  precision issues in JS (if the word's position
  is greater than 2^53). For the JS tests with
  large positions, there's some leeway (.000000001%).
  If you feel like you're getting it right for the
  smaller ranks, and only failing by rounding on the larger,
  submit a couple more times and see if it takes.

  Python, Java and Haskell have arbitrary integer precision,
  so you must be precise in those languages (unless someone corrects me).

  C# is using a long, which may not have the best precision,
  but the tests are locked so we can't change it.

  Sample words, with their rank:
  ABAB = 2
  AAAB = 1
  BAAA = 4
  QUESTION = 24572
  BOOKKEEPER = 10743

*/


function listPosition(word) {
  let sortedLetters = word.split('').sort((a,b) => a.codePointAt() - b.codePointAt());
  let dictionary = initializeDictionary(sortedLetters);
  return getPosition(dictionary, word.split(''));
}

function initializeDictionary(sortedLettersArray) {
  let dictionary = [];
  sortedLettersArray.forEach( (letter,i,a) => {
    if(a[i-1] == letter) {
      dictionary[dictionary.length -1].quantity += 1;
    } else {
      dictionary.push({
        letter : letter,
        quantity : 1
      });
    }
  });
  return dictionary;
}

function getPosition(dictionary, word) {
  let position = 1;

  word.forEach( (letter,index) => {
    let prviousWordsData = countPreviosWords(dictionary, letter, word.length-1-index);

    position += prviousWordsData.numOfPreviousWords;
    dictionary = prviousWordsData.whatLeftOfDictionary;
  });

  return position;
}

function countPreviosWords(dictionary, letter, numOfLettersAfter) {

  let index = -1;
  for(let i=0;i<dictionary.length;i++){if(dictionary[i].letter==letter){index=i;break;}};
  let numOfPreviousWords = 0;

  if(index != 0) {
    for(let i=0;i<index;i++) {
      numOfPreviousWords += getPossibilitiesStartingFromLetter(i, dictionary, numOfLettersAfter);
    }
  }

  dictionary = removeLetterFromDictionary(dictionary, index);
  return {
    whatLeftOfDictionary : dictionary,
    numOfPreviousWords
  };

}

function getPossibilitiesStartingFromLetter(i, dictionary, numOfLettersAfter) {
  let allPossibilities = factorial(numOfLettersAfter);
  dictionary.forEach( (letterData,index) => {
    let quan = letterData.quantity;
    if(i == index) {quan-=1;}
    allPossibilities/=(factorial(quan) * factorial(numOfLettersAfter-quan));
    numOfLettersAfter-=quan;
    allPossibilities*=factorial(numOfLettersAfter);
  });
  return (allPossibilities);
}

function removeLetterFromDictionary(dictionary, index) {
  dictionary[index].quantity -= 1;
  if(dictionary[index].quantity == 0) {
    dictionary = dictionary.slice(0,index).concat(dictionary.slice(index+1));
  }
  return dictionary;
}

var f = [];
var factorial = (n) => {
	if(n==0 || n==1) {return 1;}
	if(f[n] > 0) {return f[n]}
	f[n] = factorial(n-1) * n;
	return f[n];
}
