/*


	Write a function, which takes a non-negative integer (seconds) 
	as input and returns the time in a human-readable format (HH:MM:SS)

	HH = hours, padded to 2 digits, range: 00 - 99
	MM = minutes, padded to 2 digits, range: 00 - 59
	SS = seconds, padded to 2 digits, range: 00 - 59
	The maximum time never exceeds 359999 (99:59:59)

	You can find some examples in the test fixtures.


*/



function humanReadable(seconds) {
  let sec = seconds%60;
  let min = Math.floor(seconds/60)%60;
  let hr  = Math.floor(seconds/3600);
  
  if(sec < 10){sec = "0" + sec}
  if(min < 10){min = "0" + min}
  if(hr < 10){hr = "0" + hr}
  
  return hr + ":" + min + ":" + sec
}
