/*


In this kata you have to write a Morse code decoder for wired electrical telegraph.
Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−− ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.

The Morse code table is preloaded for you as MORSE_CODE dictionary; in Java MorseCode class is provided; in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--" - feel free to use it.

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!

After you master this kata, you may try to Decode the Morse code, for real.


*/




var decodeBits = function(bits){
    if(bits.indexOf("0") == -1){ // special case, we have only one letter
      return ".";
    }
    
    var zerosFromBits = bits.split("1").filter(val => val).sort((a,b) => a.length - b.length);
    var zerosSet = new Set(zerosFromBits);
    

    let pauseBetweenWords;
    let pauseBetweenCharacters;
    let pauseBetweenDotsAndDashes;
    if(zerosSet.size == 3){//more than one word
      let iterator = zerosSet.values()
      pauseBetweenDotsAndDashes = iterator.next().value;
      pauseBetweenCharacters = iterator.next().value;
      pauseBetweenWords = iterator.next().value;
      let words = bits.split(pauseBetweenWords).filter(val => val)
      return getMorseCode(words,pauseBetweenCharacters,pauseBetweenDotsAndDashes)
    
    } else if(zerosSet.size == 2){
      let iterator = zerosSet.values()
      let a = iterator.next().value;
      let b = iterator.next().value;
      if(a.length*3 == b.length){
        pauseBetweenDotsAndDashes = a;
        pauseBetweenCharacters = b;
        return getMorseCode(bits.split(),pauseBetweenCharacters,pauseBetweenDotsAndDashes)
      } else if(a.length*7 == b.length){
        pauseBetweenDotsAndDashes = a;
        pauseBetweenWords = b;
        let words = bits.split(pauseBetweenWords).filter(val => val)
        return getMorseCode(words,pauseBetweenDotsAndDashes+pauseBetweenDotsAndDashes+pauseBetweenDotsAndDashes,pauseBetweenDotsAndDashes)
      } else if(a.length*(7/3) == b.length){
        pauseBetweenCharacters = a;
        pauseBetweenWords = b;
        let words = bits.split(pauseBetweenWords).filter(val => val)
        return getMorseCode(words,pauseBetweenCharacters,pauseBetweenCharacters.slice(0,pauseBetweenCharacters.length/3))
      } else {
        return bits.split("0").filter(val => val).map(val => ".").join("");
      }
      
    } else {
      
      let iterator = zerosSet.values()
      let a = iterator.next().value;
      
      let shortestLength = 0;
      let mediumLength = 0;
      let longestLength = 0;
      
      var valueOfA = "spaceBetweenDotsAndDashes"
      if(bits.split(a).filter(val => val).length == 1){return "."}
      bits.split(a).filter(val => val).forEach(val => {
        
        if(val.length*3 == a.length || val.length == a.length * (7/3)){
          valueOfA = "spaceBetweenCharacters";
        } else if(val.length == a.length*3 || val.length == a.length*7){
          valueOfA = "spaceBetweenDotsAndDashes";
        } else if(a.length == val.length * (7/3) || a.length == val.length * 7){
          valueOfA = "spaceBetweenWords";
        }
      
      });
      if(valueOfA == "spaceBetweenWords"){
        pauseBetweenWords = a;
        let words = bits.split(pauseBetweenWords).filter(val => val)
        return getMorseCode(words,a.slice(0,a.length/7 * 3),a.slice(0,a.length/7))
      } else if(valueOfA == "spaceBetweenCharacters"){
        pauseBetweenCharacters = a;
        return getMorseCode(bits.split(),pauseBetweenCharacters,a.slice(0,a.length/3))
      } else if(valueOfA == "spaceBetweenDotsAndDashes"){
        pauseBetweenDotsAndDashes = a;
        return getMorseCode(bits.split(),a+a+a,pauseBetweenDotsAndDashes)
      }
    }
 }
 
var getMorseCode = (words,pbc,pbdad) =>{
  let res = "";
  for(let i=0;i<words.length;i++){
    let characters = words[i].split(pbc).filter(val => val);
    characters = characters.map(character => {
      let temp = character.split(pbdad).filter(val => val).map(value => {
          if(value.length == pbdad.length){
            return ".";
          }else if(value.length == pbc.length){
            return "-";
          }else{
            return "";
          }
        }).join("");
      return temp;
      
    
    }).join(" ");
    
    res += characters + "  ";
  }
  return res.trim();
}

var decodeMorse = function(morseCode){
  return morseCode
  .split(" ")
  .map((val,index,arr) => val ? MORSE_CODE[val] : (arr[index-1] ? " " : "") )
  .reduce((total,val,index,arr) => val ? total + val : total)
  .trim();
}
