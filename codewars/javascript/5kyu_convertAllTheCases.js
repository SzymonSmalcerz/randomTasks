/*



	In this kata, you will make a function that converts 
	between camelCase, snake_case, and kebab-case.

	You must write a function that changes to a given case. 
	It must be able to handle all three case types:

	js> changeCase("snakeCase", "snake")
	"snake_case"
	js> changeCase("some-lisp-name", "camel")
	"someLispName"
	js> changeCase("map_to_all", "kebab")
	"map-to-all"
	js> changeCase("doHTMLRequest", "kebab")
	"do-h-t-m-l-request"
	js> changeCase("invalid-inPut_bad", "kebab")
	undefined
	js> changeCase("valid-input", "huh???")
	undefined
	js> changeCase("", "camel")
	""
	Your function must deal with invalid input as shown, 
	though it will only be passed strings. Furthermore, 
	all valid identifiers will be lowercase except when necessary, 
	in other words on word boundaries in camelCase.

	(Any translations would be greatly appreciated!)



*/


function changeCase(identifier, targetCase){
  return targets[targetCase] ? targets[targetCase](identifier) : undefined;
}

var targets = {
  
  "snake" : function(identifier){
    var tab = fragment(identifier);
    return tab ? tab.join("_") : undefined;
  },
  "kebab" : function(identifier){
    var tab = fragment(identifier);
    return tab ? tab.join("-") : undefined;
  },
  "camel" : function(identifier){
    var tab = fragment(identifier);
    return tab ? tab.map((val,index) => index != 0 ? val[0].toUpperCase() + val.slice(1) : val).join("") : undefined;
  }

}

function fragment(identifier){
  identifier = identifier.split("-");
  if(identifier.length != 1){//kebab case
    if(identifier.slice().join("").split(/[A-Z]|_/).length != 1){
      return undefined;
    } else{
      return identifier.map(val => val.split("").map(char => char.toLowerCase()).join(""));
    }
  }
  identifier = identifier.join("").split("_");
  if(identifier.length != 1){//snake case
    if(identifier.slice().join("").split(/[A-Z]/).length != 1){
      return undefined;
    } else{
      return identifier.map(val => val.split("").map(char => char.toLowerCase()).join(""));
    }
  }
  
  identifier = identifier.join("").split("").map(val => val === val.toUpperCase() ? " " + val[0].toLowerCase() + val.slice(1) : val).join("").split(" ");
  return identifier;
}
