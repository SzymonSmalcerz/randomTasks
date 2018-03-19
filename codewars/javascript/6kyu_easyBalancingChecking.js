/*

	You are given a (small) check book as a - sometimes - cluttered 
	(by non-alphanumeric characters) string:

	"1000.00
	125 Market 125.45
	126 Hardware 34.95
	127 Video 7.45
	128 Book 14.32
	129 Gasoline 16.10"
	The first line shows the original balance. Each other line (when not blank) 
	gives information: check number, category, check amount.

	First you have to clean the lines keeping only letters, digits, dots and spaces.

	Then return a report as a string (underscores show spaces -- don't put them 
	in your solution. They are there so you can see them and how many of them you need):

	"Original_Balance:_1000.00
	125_Market_125.45_Balance_874.55
	126_Hardware_34.95_Balance_839.60
	127_Video_7.45_Balance_832.15
	128_Book_14.32_Balance_817.83
	129_Gasoline_16.10_Balance_801.73
	Total_expense__198.27
	Average_expense__39.65"
	On each line of the report you have to add the new balance and then in 
	the last two lines the total expense and the average expense. 
	So as not to have a too long result string we don't ask for a properly formatted result.

	Notes
	One (or more) line can be blank.
	Use printf %.2f to get 2 decimals.
	You can see another example in the "Sample tests".
	Notice the combination \r\n in the resulting string.
	Translators are welcome for all languages, except for Ruby since 
	the Bash random tests needing Ruby a Ruby reference solution is 
	already there though not yet published.

*/



function balance(book) {
  book = book.split("\n").map(val => val.split(/[\n!=:;?{}]/).join("").trim()).filter(val => val != "");

  let originalBalance = parseFloat(book[0]);
  book[0] = `Original Balance: ${parseFloat(Math.round(originalBalance*100)/100).toFixed(2)}\r\n`;
  let balance = parseFloat(originalBalance);
  
  for(let i=1;i<book.length;i++){
    book[i] = book[i].split(" ");
    let cost = book[i][book[i].length-1];//last element is cost
        cost = parseFloat(cost);
    balance -= cost;
    book[i][book[i].length-1] = `${parseFloat(book[i][book[i].length-1]).toFixed(2)}`
    book[i].push(`Balance ${parseFloat(Math.round(balance*100)/100).toFixed(2)}\r\n`)
    book[i] = book[i].join(" ");
  }
  
  let totalExpense = (originalBalance - balance);
  let avgExpense = Math.round(totalExpense/(book.length-1) * 100)/100;
  book.push(`Total expense  ${parseFloat(Math.round(totalExpense*100)/100).toFixed(2)}\r\n`);
  book.push(`Average expense  ${parseFloat(avgExpense).toFixed(2)}`);
  
  return book.join("")
  
}
