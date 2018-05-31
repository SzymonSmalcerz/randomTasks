/*


	The alphabetized kata
	Re-order the characters of a string, so that they 
	are concatenated into a new string in 
	"case-insensitively-alphabetical-order-of-appearance" order. 
	Whitespace and punctuation shall simply be removed!

	The input is restricted to contain no numerals and only 
	words containing the english alphabet letters.

	Example:

	alphabetized("The Holy Bible") // "BbeehHilloTy"


*/


function alphabetized(s) {
  s = s.split(" ")
        .map((word,firstIndex) => {
          return word.split("").map((letter,secondIndex) => {
            return {
              letter,
              secondIndex,
              firstIndex,
              asciiValue : letter.toLowerCase().charCodeAt()
            }
          });
        })
        .reduce((t,v) => t.concat(v),[])
        .filter(val => {
          return val.asciiValue >= "a".charCodeAt() && val.asciiValue <= "z".charCodeAt()
        })
        .sort((a,b) => {
          if(a.asciiValue > b.asciiValue){
            return 1;
          } else if(a.asciiValue == b.asciiValue){
            
            if(a.firstIndex > b.firstIndex){
              return 1;
            } else if(a.firstIndex == b.firstIndex){
              return a.secondIndex - b.secondIndex;
            }
          
          }
          
          return -1;
        })
        .reduce((t,v) => t + v.letter, "");
  
  return s;
}
