/*


	Your task is determine lowest number base system in which the input n (base 10), 
	expressed in this number base system, is all 1 in its digit. See an example:

	'7' in base 2 is '111' - fits! answer is 2

	'21' in base 2 is '10101' - contains '0' does not fit '21' in base 3 is '210' - contains '0' 
	and '2' does not fit '21' in base 4 is '111' - contains only '1' it fits! answer is 4

	n is always less than Number.MAX_SAFE_INTEGER.


*/



function getMinBase (number) {
  let arr = getDivisorsArr(number -1);
  for(let i=1;i<arr.length;i++){
      if(checkIfInNBaseOnlyOnes(number,arr[i])){
        return arr[i]
      }
  }
}

function checkIfInNBaseOnlyOnes(number,n){
  let mustBeOne;
  while(number>0){
    mustBeOne = (number%n);
    if(mustBeOne != 1){return false;}
    number -= 1
    number /= n;
  }
  return true
}

function getDivisorsArr(n){
    let arr = [];
    let srqtN = Math.sqrt(n);
    for(let i=1;i<srqtN;i++){
      if(n%i == 0){
        arr.push(i);
        arr.push(n/i);
      }
    }
    if(Math.floor(srqtN) == srqtN){
      arr.push(srqtN);
    }
    return arr.sort((a,b) => a-b);
}

//tests:

describe("Manual tests", function(){
    it ("test base < 10", function(){
        Test.assertEquals(getMinBase(3), 2);
        Test.assertEquals(getMinBase(7), 2);
        Test.assertEquals(getMinBase(21), 4);
        Test.assertEquals(getMinBase(57), 7);
        Test.assertEquals(getMinBase(1111), 10);
    });
    
    it ("big base tests", function(){
        Test.assertEquals(getMinBase(1000002), 1000001);
        Test.assertEquals(getMinBase(1000000002), 1000000001);
        Test.assertEquals(getMinBase(1000000000000), 999999999999);
    });
    
    it ("tricky part : )", function(){
        Test.assertEquals(getMinBase(1001001), 1000);
        Test.assertEquals(getMinBase(1001001001), 1000);
        Test.assertEquals(getMinBase(1001001001001), 1000);
        
        Test.assertEquals(getMinBase(2500050001), 50000);
        Test.assertEquals(getMinBase(125002500050001), 50000);
    });
    

});
