/*
	
	https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets


	There is a secret string which is unknown to you. Given a 
	collection of random triplets from the string, recover the original string.

	A triplet here is defined as a sequence of three letters such 
	that each letter occurs somewhere before the next in the given 
	string. "whi" is a triplet for the string "whatisup".

	As a simplification, you may assume that no letter occurs more 
	than once in the secret string.

	You can assume nothing about the triplets given to you other than 
	that they are valid triplets and that they contain sufficient 
	information to deduce the original string. In particular, this 
	means that the secret string will never contain letters that do 
	not occur in one of the triplets given to you.


	basic test:
	
	secret1 = "whatisup"
	triplets1 = [
	  ['t','u','p'],
	  ['w','h','i'],
	  ['t','s','u'],
	  ['a','t','s'],
	  ['h','a','p'],
	  ['t','i','s'],
	  ['w','h','s']
	]

	Test.assertEquals(recoverSecret(triplets1), secret1)



*/


var recoverSecret = function(triplets) {
  let dictionary = {};
  triplets.forEach(triplet => {
    triplet.forEach(letter => {
      dictionary[letter] = dictionary[letter] || generateSpace(letter);
    });
    let firstLetter = dictionary[triplet[0]];
    let secondLetter = dictionary[triplet[1]];
    let thirdLetter = dictionary[triplet[2]];

    dictionary[triplet[0]].onRight.add(secondLetter);
    dictionary[triplet[0]].onRight.add(thirdLetter);

    dictionary[triplet[1]].onRight.add(thirdLetter);
    dictionary[triplet[1]].onLeft.add(firstLetter);

    dictionary[triplet[2]].onLeft.add(firstLetter);
    dictionary[triplet[2]].onLeft.add(secondLetter);
  });

  let array = [];

  for (let key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      dictionary[key].onLeft = [...dictionary[key].onLeft];
      dictionary[key].onRight = [...dictionary[key].onRight];
      array.push(dictionary[key]);
    };
  };



  array.sort((a,b) => {
    if(b.onLeft.indexOf(a) !== -1){
      return -1
    }
    else if(b.onRight.indexOf(a) !== -1){
      return 1
    }
    else if(a.onLeft.indexOf(b) !== -1){
      return 1
    }
    else if(a.onRight.indexOf(b) !== -1){
      return -1
    }
    else {

    // go deep
      for(let i=0;i<b.onRight.length;i++){
        let letter = b.onRight[i];
        if(a.onLeft.indexOf(letter) !== -1){
          return 1;
        }
      }

      for(let i=0;i<b.onLeft.length;i++){
        let letter = b.onLeft[i];
        if(a.onRight.indexOf(letter) !== -1){
          return -1;
        }
      }


      for(let i=0;i<a.onRight.length;i++){
        let letter = a.onRight[i];
        if(b.onLeft.indexOf(letter) !== -1){
          return -1;
        }
      }

      for(let i=0;i<a.onLeft.length;i++){
        let letter = a.onLeft[i];
        if(b.onRight.indexOf(letter) !== -1){
          return 1;
        }
      }
    // go for suuuper reqursive deep search
    if(deepSearch(a,b,"right",[],[])){return 1}
    else if(deepSearch(a,b,"left",[],[])){return -1}
    else if(deepSearch(b,a,"right",[],[])){return -1}
    else if(deepSearch(b,a,"left",[],[])){return 1}


    function deepSearch(a,b,direction,checkedLettersB, checkedLettersA){
      let arrB,arrA;
      if(direction == "right") {arrB = b.onRight, arrA = a.onLeft}
      else {arrB = b.onLeft, arrA = a.onRight}
      for(let i=0;i<arrB.length;i++){
        if(checkedLettersB.indexOf(arrB[i]) == -1){
          checkedLettersB.push(arrB[i]);

          if(arrA.indexOf(arrB[i]) !== -1){
            return true;
          } else {
            let boolek = false;
            for(let j=0;j<arrA.length;j++){
              if(checkedLettersA.indexOf(arrA[j]) == -1){
                checkedLettersA.push(arrA[j]);
                boolek = boolek || deepSearch(arrA[j],b,direction,checkedLettersB,checkedLettersA);
              };

              if(boolek){return true;}

              boolek = boolek || deepSearch(a,arrB[i],direction,checkedLettersB,checkedLettersA);
              if(boolek){return true;}
            };
          }

        }
      }
    }
  };

    return 0;
  });
  return array.map(v => v.value).join("");
};

let generateSpace = (letter) => {
  return {
    onLeft : new Set(),
    onRight : new Set(),
    value : letter
  };
};

