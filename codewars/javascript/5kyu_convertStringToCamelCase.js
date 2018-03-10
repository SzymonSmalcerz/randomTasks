/*


Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")


*/

function toCamelCase(str){
  return str.indexOf("-") == -1 ? getRes("_",str) : getRes("-",str);
}

function getRes(delimeter,str){
  return str.split(delimeter).map((val,index) => index ? val[0].toUpperCase() + val.slice(1) : val).join("");
}

//eventually (much cleaner and safer with regExp):

function toCamelCase(str){
    return str.split(/[-_]/).map((val,index) => index ? val[0].toUpperCase() + val.slice(1) : val).join("");
}


