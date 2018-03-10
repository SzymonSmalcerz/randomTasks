/*


In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 digits.

Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


*/


function solution(digits){
  digits = digits.split("");
  var finalRes = {
    firstDigit : digits[0],
    value : sumOfFive(0,digits)
  }
  for(var i=1;i<digits.length-4;i++){
    if(digits[i] >= finalRes.firstDigit){
      var sum = sumOfFive(i,digits);
      if(finalRes.value < sum){
        finalRes.firstDigit = digits[i];
        finalRes.value = sum;
      }
    }
  }
  
  return parseInt(finalRes.value);
}

function sumOfFive(index,array){
  var sum = 0;
  for(var i=0;i<5;i++){
    sum += array[index + i];
  }
  return sum; 
}
