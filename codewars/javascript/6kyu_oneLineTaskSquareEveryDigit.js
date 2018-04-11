/*


	nspired by Square Every Digit (and of course by the inimitable 
	myjinxin2015's many clever one-line kata), your goal here is 
	precisely the same (to square every digit in the given number), 
	in 36 or fewer characters (<37). Your return value should be in integer format.

	Your input will always be a valid, non-negative integer... no tricks!

	Examples:

	sd(0)=>    0
	sd(64)=>   3616
	sd(1111)=> 1111
	sd(2222)=> 4444
	sd(3333)=> 9999
	sd(3212)=> 9414
	sd(1234)=> 14916
	sd(77455754)=> 4949162525492516
	sd(99999999)=> 8181818181818181
	Bonus: Can you get it down to 34 characters?


*/


sd=(x,y="")=>x<1?+y:sd(x/10,(~~x%10)**2+y)
