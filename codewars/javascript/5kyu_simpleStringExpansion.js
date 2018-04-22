/*


	Consider the following expansion:

	solve("3(ab)") = "ababab" -- "ab" repeats 3 times
	solve("2(a3(b))" = "abbbabbb" -- "a3(b)" == "abbb" repeats twice.
	Given a string, return the expansion of that string.

	Input will consist of only lowercase letters and numbers 
	in valid parenthesis. There will be no letters or numbers 
	after the last closing parenthesis.

	More examples in test cases.

	Good luck!


*/


function solve(str){
  if(str.trim() == ""){return ""}
  
  let i_num = str.regexIndexOf(/[0-9]/);
  let i_1 = str.indexOf("(");
  let i_2 = str.lastIndexOf(")");
  
  if(i_1 < 0){return str}
  let num = 1;
  let rest = "";
  if(i_1 > i_num && i_num >= 0){
    rest = str.slice(0,i_num);
    num = parseInt(str.slice(i_num,i_1));
  }else if(i_1 > 0){
    rest = str.slice(0,i_1)
  }
  str = i_2 > 0 ? str.slice(i_1+1,i_2) : "";
  
  let result = rest
  let recursionStr = solve(str);
  for(let i=0;i<num;i++){
    result += recursionStr;
  }
  
  
  return result;
}

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}



