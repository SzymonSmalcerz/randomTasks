/*


	Given a string, swap the case for each of the letters.

	e.g. CodEwArs --> cODeWaRS

	Examples
	swap ""         `shouldBe` ""
	swap "CodeWars" `shouldBe` "cODEwARS"
	swap "abc"      `shouldBe` "ABC"
	swap "ABC"      `shouldBe` "abc"
	swap "123235"   `shouldBe` "123235"


*/


function swap(str){
  return str.split("").map(v => swapLetter(v)).join("");
};

let swapLetter = (letter) => {
  if(letter == letter.toLowerCase()){
    return letter.toUpperCase();
  }
  
  return letter.toLowerCase();
}
