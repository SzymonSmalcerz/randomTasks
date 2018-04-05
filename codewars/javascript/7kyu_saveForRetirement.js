/*
	If you deposit $100 each year into a bank account with yearly 1% interest 
	rate, how many years will it take you to accumulate minimum $5000? What if the interest is 3% instead?

	This is the question you will answer in this kata for the interest rates 
	1, 2, 3, 4, 5 and 6% given a yearly deposit amount and target amount.

	It works like this:

	The user inputs a fixed amount they wish to deposit each year and a minimum 
	retirement target
	The function calculates how many years it will take to reach the retirement 
	target using various yearly fixed interest rates: 1, 2, 3, 4, 5, 6 %
	All deposits happen on 1. January and all interests are deposited 31st December
	You will create a function which takes paramters (yearly_deposit) and 
	(min_target_balance) that returns a dictionairy of (interest rate, years to save) pairs.

	For javascript return an object where the key is string and value is int.

*/


function calculateRetirement(deposit, targetBalance) {
  let obj = {};
  for(let i=1;i<=6;i++){
    obj[i.toString()] = calculate(deposit,targetBalance,i);
  }
  return obj;
}

function calculate(deposit,targetBalance,rate){
  let year = 1;
  let orDeposit = deposit;
  while(true){
    deposit += (deposit * (rate/100));
    if(deposit > targetBalance){
      return year;
    }
    deposit += orDeposit;
    year += 1;
  }
}
