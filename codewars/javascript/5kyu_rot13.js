/*


	ROT13 is a simple letter substitution cipher that replaces 
	a letter with the letter 13 letters after it in the alphabet. 
	ROT13 is an example of the Caesar cipher.

	Create a function that takes a string and returns the string 
	ciphered with Rot13. If there are numbers or special characters 
	included in the string, they should be returned as they are. 
	Only letters from the latin/english alphabet should be shifted, 
	like in the original Rot13 "implementation".

	Please note that using "encode" in Python is considered cheating.


*/

let dictionary = {
  a : "n",
  n : "a",
  b : "o",
  o : "b",
  c : "p",
  p : "c",
  d : "q",
  q : "d",
  e : "r",
  r : "e",
  f : "s",
  s : "f",
  g : "t",
  t : "g",
  h : "u",
  u : "h",
  i : "v",
  v : "i",
  j : "w",
  w : "j",
  k : "x",
  x : "k",
  l : "y",
  y : "l",
  m : "z",
  z : "m"
}

function rot13(message){
  return message.split("")
                .map(v => {
                  let smallV = v.toLowerCase();
                  if(dictionary[smallV]){
                    if(smallV == v){
                      return dictionary[smallV];
                    }else{
                      return dictionary[smallV].toUpperCase();
                    }
                  } else{
                    return v;
                  }
                })
                .join("");
}
