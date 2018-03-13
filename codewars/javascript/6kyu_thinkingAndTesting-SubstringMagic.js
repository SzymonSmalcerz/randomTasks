/*


	No Story

	No Description

	Only by Thinking and Testing

	Look at result of testcase, guess the code!


*/


function testit(s){
  return s.slice(arguments['1'],s.length-1) + s.slice(arguments['2'],s.length-1)
}


/*
	

		TEST CASES:

	//Let's play a game with "string" again
	Test.assertSimilar(testit("",0,0), "", "")
	Test.assertSimilar(testit("a",0,0), "", "")
	Test.assertSimilar(testit("aa",0,0), "aa", "")
	Test.assertSimilar(testit("ab",0,0), "aa", "")
	Test.assertSimilar(testit("aaa",0,0), "aaaa", "")
	Test.assertSimilar(testit("aaa",0,1), "aaa", "")
	Test.assertSimilar(testit("aaa",1,1), "aa", "")
	Test.assertSimilar(testit("aaaaa",1,1), "aaaaaa", "")
	Test.assertSimilar(testit("aaaaa",1,2), "aaaaa", "")
	//click "Submit" try more testcase...


*/
