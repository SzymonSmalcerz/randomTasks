/*


	We need a reusable program to encode/decode text to unicode value as represented in Java and vice-versa.

	Encoder:
	Input
	"hola"

	Output
	"\u0068\u006f\u006c\u0061"

	Decoder:
	Input
	"\u0068\u006f\u006c\u0061"

	Output
	"hola"

	Observations:
	Please note that unicode values have always a back slash \ the 
	letter u and 4 hexadecimal digits corresponding to the value in the unicode character set.
	Codewars has some trouble showing non ASCII characters so perhaps 
	you should try it locally first.
	Usages:
	You can actually run encoded programs in Java, see for example: 
	https://www.codewars.com/kata/reviews/570184bc5594a091150000a2/groups/57027d910052645429000b14


*/

class JavaUnicodeEncoder{
  static decode(input){
    return input.split("\\u").map(val => val ? String.fromCharCode(parseInt(val,16)) : "").join("");
  }
  
  
  static encode(input){
    return input.split("").map(val => {
      let temp = val.charCodeAt(0).toString(16);
      while(temp.length < 4){
        temp = "0" + temp
      }
      return "\\u" + temp;
    }).join("");
  }
  
}
