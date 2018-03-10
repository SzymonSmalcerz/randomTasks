/*

	In this Kata, you will count the number of times the first string occurs in the second.

	solve("zaz","zazapulz") = 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ
	More examples in test cases.

	describe("Basic tests", function(){
	Test.assertEquals(solve("zaz","zazapulz"),4);
	Test.assertEquals(solve("rat","ratatoulie"),3);
	Test.assertEquals(solve("kata","katakatak"),7);
	Test.assertEquals(solve("code","codeodecode"),11);
	Test.assertEquals(solve("kata","kataxxxxkatak"),7);
	Test.assertEquals(solve("code","cozzdezodeczzode"),11);
	Test.assertEquals(solve("zaaz","zazaapulz"),4);
	});


*/



function solve(a,b) {
    a = a.split("");              //lets make table containing letters from word
    return recursiveSolution(a,b);
}

function recursiveSolution(a,b){
  
  if(a.length<1){return 1;} // we found word
  
  var index = b.indexOf(a[0])
  if(index==-1){return 0;} // no more letters from our table :C
  
  var sum = 0;
  sum += recursiveSolution(a.slice(),b.slice(index+1)); // first option
  a.shift();
  sum += recursiveSolution(a.slice(),b.slice(index+1)); // second option
  return sum;

}
