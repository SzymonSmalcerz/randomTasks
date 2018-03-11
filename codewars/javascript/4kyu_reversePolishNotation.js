/*


Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).


*/

function calc(expr) {
  if(expr.length == 0){return 0}
  return evaluateExpression(expr.split(" "));
}

var evaluateExpression = (expression) => {
  var stack = [];
  if(/[/*+-]/.test(expression) == false){
    return eval(expression[expression.length -1])
  }
  while(expression.length!= 0){
    var temp = expression.shift()
    if(/[/*+-]/.test(temp)){
      var num1 = stack.pop();
      var num2 = stack.pop();
      stack.push(eval(num2 + temp + num1))
    } else{
      stack.push(temp)
    }
  }
  return stack[0];
}

