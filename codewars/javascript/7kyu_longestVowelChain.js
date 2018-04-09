/*


	The vowel substrings in the word codewarriors are o,e,a,io. The 
	longest of these has a length of 2. Given a lowercase string 
	that has alphabetic characters only and no spaces, return the 
	length of the longest vowel substring.

	Good luck!


*/


let vowels = {
  "a" : true,
  "e" : true,
  "i" : true,
  "o" : true,
  "u" : true
}

function solve(s){
 let longestCurrent = 0;
 let max = 0;
 s.split("").forEach(val => {
   if(vowels[val]){
     longestCurrent+=1;
   }else{
     longestCurrent=0;
   }
   
   if(longestCurrent > max){
     max = longestCurrent;
   }
 });
 return max;
}
