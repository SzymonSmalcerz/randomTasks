/*

  https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

  Given the string representations of two integers,
  return the string representation of the sum of those integers.

  For example:

  sumStrings('1','2') // => '3'
  A string representation of an integer will contain
  no characters besides the ten numerals "0" to "9".

*/

function sumStrings(a,b) {
  a = a.split('');
  b = b.split('');

  let result = '';
  let rest = 0;

  while(a.length || b.length) {
    let lastA = a.pop();
    let lastB = b.pop();
    let tempRes = lastA ? ( lastB ? eval( lastA + "+" + lastB) + rest : eval( lastA ) + rest ) : eval( lastB ) + rest;

    rest = 0;

    if(tempRes >= 10) {
      rest = 1;
      tempRes %= 10;
    }

    result = tempRes + result;
  }

  if(rest) {
    result = "1" + result;
  }

  result = result.split('');
  while(result[0] == '0') {
    result.shift();
  }
  return result.join('');
}
