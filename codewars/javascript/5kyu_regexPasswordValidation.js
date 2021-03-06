/*


You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.


*/



function validate(password) {
  if(password.length > 6 && !(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)){return true}
  
  return false;
}
