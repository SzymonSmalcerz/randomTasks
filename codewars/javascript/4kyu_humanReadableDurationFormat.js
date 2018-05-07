/*


	Your task in order to complete this Kata is to write a 
	function which formats a duration, given as a number of 
	seconds, in a human-friendly way.

	The function must accept a non-negative integer. If it 
	is zero, it just returns "now". Otherwise, the duration 
	is expressed as a combination of years, days, hours, minutes and seconds.

	It is much easier to understand with an example:

	formatDuration(62)    // returns "1 minute and 2 seconds"
	formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
	For the purpose of this Kata, a year is 365 days and a day is 24 hours.

	Note that spaces are important.

	Detailed rules
	The resulting expression is made of components like 
	4 seconds, 1 year, etc. In general, a positive 
	integer and one of the valid units of time, 
	separated by a space. The unit of time is used in plural if the integer is greater than 1.

	The components are separated by a comma and a 
	space (", "). Except the last component, 
	which is separated by " and ", just like it would be written in English.

	A more significant units of time will occur 
	before than a least significant one. Therefore, 
	1 second and 1 year is not correct, but 1 year and 1 second is.

	Different components have different unit of times. 
	So there is not repeated units like in 5 seconds and 1 second.

	A component will not appear at all if its value 
	happens to be zero. Hence, 1 minute and 0 seconds 
	is not valid, but it should be just 1 minute.

	A unit of time must be used "as much as possible". 
	It means that the function should not return 61 seconds, 
	but 1 minute and 1 second instead. Formally, the duration 
	specified by of a component must not be greater than any 
	valid more significant unit of time.


*/


function formatDuration (seconds) {

  let handlerObj; // halper obj, in this obj we will hold temporary values
  
  let counter = {
    numOfYears : 0,
    numOfDays : 0,
    numOfHours : 0,
    numOfMinutes : 0,
    numOfSeconds : 0,
  }
  
  //get Years
  handlerObj = getNum(seconds,31536000);
  counter.numOfYears = handlerObj.numOfUnit;
  seconds = handlerObj.remainingSeconds;
  
  //get Days
  handlerObj = getNum(seconds,86400);
  counter.numOfDays = handlerObj.numOfUnit;
  seconds = handlerObj.remainingSeconds;
  
  //get Hours
  handlerObj = getNum(seconds,3600);
  counter.numOfHours = handlerObj.numOfUnit;
  seconds = handlerObj.remainingSeconds;
  
  //get Minutes
  handlerObj = getNum(seconds,60);
  counter.numOfMinutes = handlerObj.numOfUnit;
  seconds = handlerObj.remainingSeconds;
  
  //get Seconds
  //just remaining seconds :)
  counter.numOfSeconds = seconds;
  
  return createFinalString(counter);
}

let getNum = (seconds,howManySecondsInUnit) => {
  let numOfUnit = Math.floor(seconds/howManySecondsInUnit);
  return {
    numOfUnit,
    remainingSeconds : seconds - (numOfUnit * howManySecondsInUnit)
  }
}

let createFinalString = (counter) => {
  let resultArr = [];
  for (var unit in counter) {
    if (counter.hasOwnProperty(unit)) {
        if(counter[unit] > 0){
          let unitName = unit.split("Of")[1].toLowerCase().slice(0,-1);
          let countOfUnit = counter[unit];
          if(countOfUnit > 1){
            resultArr.push(`${countOfUnit} ${unitName}s`)
          } else{
            resultArr.push(`${countOfUnit} ${unitName}`)
          }
        }
    }
  }
  
  if(resultArr.length > 1){
    let lastElement = resultArr.pop();
    let resultString = resultArr.join(", ");
    return `${resultString} and ${lastElement}`;
  } else if(resultArr.length == 1){
    return resultArr[0];
  } else {
    return 'now';
  }
}
