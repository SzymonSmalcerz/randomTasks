/*


	You are given a small extract of a catalog:

	s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

	<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

	<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

	<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

	<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>
	(prx stands for price, qty for quantity) and an article i.e "saw".

	The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

	"table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.80 qty: 32"
	If the article is not in the catalog return "Nothing".

	Notes
	There is a blank line between two lines of the catalog.
	The same article may appear more than once. If it happens return all the lines concerned by the article.
	You can see another example in the "Sample tests".
	Notice the combination \r\n in the resulting string.

	Translators are welcome for all languages, except for Ruby 
	since the Bash random tests needing Ruby a Ruby reference solution is already there though not yet published.


*/


function catalog(s, article) {
  s = s.split(/<[/]?prod>/)
       .filter(s=>new RegExp(article).test(s))
       .map(val => val.replace("<prx>", " prx: $")
                      .replace("<qty>", " qty: ")
                      .replace("</name>", " >")
                      .split(/<[/]?name>|<[/]?prx>|<[/]?qty>/)
                      .join("") + "\r\n")
       .join("");
  return s.length == 0 ? "Nothing" : s.slice(0,-2)
}
