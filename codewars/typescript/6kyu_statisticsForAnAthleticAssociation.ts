/*


	You are the "computer expert" of a local Athletic Association (C.A.A.). Many 
	teams of runners come to compete. Each time you get a string of all race 
	results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

	"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

	Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for 
	minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

	To compare the results of the teams you are asked for giving three statistics; range, average and median.

	Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} 
	the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

	Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

	Median : In statistics, the median is the number separating the higher half of a 
	data sample from the lower half. The median of a finite list of numbers can be 
	found by arranging all the observations from lowest value to highest value and 
	picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there 
	is an odd number of observations. If there is an even number of observations, 
	then there is no single middle value; the median is then defined to be the 
	mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

	Your task is to return a string giving these 3 values. For the 
	example given above, the string result will be

	"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

	of the form:

	"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

	where hh, mm, ss are integers (represented by strings) with each 2 digits.

	Remarks:

	if a result in seconds is ab.xy... it will be given truncated as ab.

	if the given string is "" you will return ""


*/


export class G964 {
  
    public static stat = (strg) => {
        if(!strg || strg.length < 5){return ''}
        let arrOfTimeStrings = strg.split(", ");
        let arrOfTimes : Time[] = [];
        arrOfTimeStrings.forEach(val => {
          arrOfTimes.push(new Time(val));
        })
        
        arrOfTimes.sort((a,b) => a.totalSeconds - b.totalSeconds);
        return `${G964.getRange(arrOfTimes)} ${G964.getAverage(arrOfTimes)} ${G964.getMedian(arrOfTimes)}`;
    }
    
    public static getRange = (arr) => {
      let ft = arr[0].totalSeconds; //first time
      let lt = arr[arr.length - 1].totalSeconds; //last time
      return `Range: ${new Time("aaa", (lt-ft)).toString()}`
    }
    
    public static getAverage = (arr) => {
      let sum = arr.reduce((t,v) => t+v.totalSeconds,0);
      sum = Math.floor(sum/arr.length);
      return `Average: ${new Time("aaa", sum).toString()}`
    }
    
    public static getMedian = (arr) => {
      if(arr.length%2 == 1){
        return `Median: ${arr[Math.floor(arr.length/2)].toString()}`
      } else {
        return `Median: ${new Time("aa",Math.floor((arr[arr.length/2].totalSeconds + arr[arr.length/2 - 1].totalSeconds)/2)).toString()}`;
      }
    }
    
}

class Time {
  
  public hours : number;
  public minutes : number;
  public seconds : number;
  public totalSeconds : number;
  
  
  constructor(str : string, totalTime = 0){
    if(totalTime){
      this.totalSeconds = totalTime;
      this.hours = Math.floor(totalTime/3600);
      this.minutes = Math.floor(totalTime/60) - this.hours * 60;
      this.seconds = totalTime%60;
    }else {
      let arr = str.split("|");
      this.seconds = parseInt(arr[2]) || 0;
      this.minutes = parseInt(arr[1]) || 0;
      this.hours   = parseInt(arr[0]) || 0;
      this.countTotalSeconds();
    }
  }
  
  public toString() : string {
    let resStr : string = "";
    resStr += `${this.hours > 9 ? this.hours : "0" + this.hours}|`
    resStr += `${this.minutes > 9 ? this.minutes : "0" + this.minutes}|`
    resStr += `${this.seconds > 9 ? this.seconds : "0" + this.seconds}`
    return resStr;
  }
  private countTotalSeconds() : void {
    this.totalSeconds =  this.seconds;
    this.totalSeconds += this.minutes * 60;
    this.totalSeconds += this.hours * 3600;
  }
  
  
}
