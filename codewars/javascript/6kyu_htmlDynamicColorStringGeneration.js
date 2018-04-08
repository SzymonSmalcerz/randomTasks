/*


	Generate a valid randomly generated rgb color string. 
	Assume all of them have 6 digits always.

	Valid Output
	#ffffff
	#25a403
	#000001
	Non-Valid Output
	#fff
	#aaa
	#zzzzz
	cafebabe
	#a567567676576756A7


*/

var generateColor = function() {
  return "#" + getRandom() + getRandom() + getRandom();
};

let getRandom = () => {
  let rand = Math.round(Math.random() * 255).toString(16);
  if(rand.length < 2){
    rand = "0" + rand;
  }
  return rand;
}
