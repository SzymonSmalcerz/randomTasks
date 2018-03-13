/*


	No Story

	No Description

	Only by Thinking and Testing

	Look at result of testcase, guess the code!


*/


function testit(a,b){
  return [...new Set(a)].concat([...new Set(b)]).sort((a,b) => a-b)
}


/*


		PROVIDED TEST CASES:

	//return a.concat(b) ?
	Test.assertSimilar(testit([0],[1]), [0,1], "")
	Test.assertSimilar(testit([1,2],[3,4]), [1,2,3,4], "")
	Test.assertSimilar(testit([1],[2,3,4]), [1,2,3,4], "")
	Test.assertSimilar(testit([1,2,3],[4]), [1,2,3,4], "")
	Test.assertSimilar(testit([1,2],[1,2]), [1,1,2,2], "")
	//click "Submit" try more testcase...



*/
