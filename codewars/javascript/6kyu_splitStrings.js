/*

  https://www.codewars.com/kata/split-strings/train/javascript

  Complete the solution so that it splits the string into pairs
  of two characters. If the string contains an odd number of
  characters then it should replace the missing second
  character of the final pair with an underscore ('_').

  Examples:

  solution('abc') // should return ['ab', 'c_']
  solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

function solution(str){
  return str.split('').map( (v,i,a) => { return i%2 == 1 ? false : v + (a[i+1] ? a[i+1] : '_') }).filter(a => a);
}
