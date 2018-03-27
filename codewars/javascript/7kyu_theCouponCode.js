/*


	our online store likes to give out coupons for special occasions. 
	Some customers try to cheat the system by entering invalid codes or using expired coupons.

	Your mission: 
	Write a function called checkCoupon to verify that a coupon is valid 
	and not expired. If the coupon is good, return true. Otherwise, return false.

	A coupon expires at the END of the expiration date. All dates will be 
	passed in as strings in this format: "June 15, 2014"

	If you complete this kata and there are no issues, please remember to give it a ready vote. :)


*/


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && new Date(currentDate).getTime() <= new Date(expirationDate).getTime()
}
