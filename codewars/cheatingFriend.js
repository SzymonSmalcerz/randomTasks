/*


A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow) and returns an array of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples for each language in "RUN EXAMPLES")

#Examples:

removNb(26) should return [(15, 21), (21, 15)]
or

removNb(26) should return { {15, 21}, {21, 15} }
or

removeNb(26) should return [[15, 21], [21, 15]]
or

removNb(26) should return [ {15, 21}, {21, 15} ]
or

in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings.


*/

  function removeNb (n) {
    console.log(n);
    var sum = (1+n)/2 * n;
    var res = [];
    var sqrtN = Math.floor(Math.sqrt(sum));
    for(var i=2;i<sqrtN;i++){
      var temp = Math.floor(sum/i);
      if(temp<=n){
        for(var j=temp-2;j<temp;j++){
          if(j*i == (sum-i-j)){
            res.push([i,j]);
            res.push([j,i]);
          }
        }
      }
    }
    
    res.sort((a,b) => (a[0] - b[0]));
    
    return res;
}
