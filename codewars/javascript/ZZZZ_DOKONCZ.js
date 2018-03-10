function equalTo24(a,b,c,d){
  var arr = [a,b,c,d];
  for(let i=0;i<4;i++){
    var exp = "+";
    var resExp = arr[i];
    var how = 0
    
    
    var tempArr = arr.slice();
    tempArr.splice(i,1);
    console.log(tempArr + " | " + arr[i]);
    var res = getRes(tempArr,arr[i],exp,resExp,how);
    if(res) {return res;}
    exp = "-";
    resExp = arr[i];
    tempArr = arr.slice();
    tempArr.splice(i,1);
    res = getRes(tempArr,arr[i],exp,resExp,how);
    if(res) {return res;}
    exp = "*";
    resExp = arr[i];
    tempArr = arr.slice();
    tempArr.splice(i,1);
    res = getRes(tempArr,arr[i],exp,resExp,how);
    if(res) {return res;}
    exp = "/";
    resExp = arr[i];
    tempArr = arr.slice();
    tempArr.splice(i,1);
    res = getRes(tempArr,arr[i],exp,resExp,how);
    if(res) {return res;}
  }
  return "It's not possible!"
}

function getRes(arr,val,expression,resultExpression,howManyBrackets){
  
  if(arr.length < 2) {
    
      var res = expression + arr[0];
      for(let i=0;i<howManyBrackets;i++){res += ")";}
      console.log(resultExpression + res);
      return eval(resultExpression + res) == 24 ? resultExpression + res : null;
  }
  
  for(let j=0;j<4;j++){
  
    switch(j) {
      case 0:
          for(let i=0;i<arr.length;i++){
            var tempArr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
            obj = helper(val,arr[i],expression[0],howManyBrackets);
            var tempVal = obj.val;
            var tempResultExpression = resultExpression + obj.expression + arr[i];
            var tempHowManyBrackets = obj.howManyBrackets;
            var tempExpression = "+";
            var res = getRes(tempArr,tempVal,tempExpression,tempResultExpression,tempHowManyBrackets);
            if(res){
              return res;
            }
          }
          break;
      case 1:
          for(let i=0;i<arr.length;i++){
            var tempArr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
            obj = helper(val,arr[i],expression[0],howManyBrackets);
            var tempVal = obj.val;
            var tempResultExpression = resultExpression + obj.expression + arr[i];
            var tempHowManyBrackets = obj.howManyBrackets;
            var tempExpression = "-";
            var res = getRes(tempArr,tempVal,tempExpression,tempResultExpression,tempHowManyBrackets);
            if(res){
              return res;
            }
          }
          break;
      case 2:
          for(let i=0;i<arr.length;i++){
            var tempArr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
            obj = helper(val,arr[i],expression[0],howManyBrackets);
            var tempVal = obj.val;
            var tempHowManyBrackets = obj.howManyBrackets;
            var tempResultExpression = obj.expression + arr[i];
            var tempExpression = "*";
            var q = tempHowManyBrackets;
            for(let k=howManyBrackets;k>=0;k--){
              console.log(q);
              var res = getRes(tempArr,tempVal,tempExpression,resultExpression + tempResultExpression,q);
              
              if(res){
                return res;
              }
              q-=1;
              tempResultExpression = ")" + tempResultExpression;
            }
              
          }
          break;
      case 3:
          for(let i=0;i<arr.length;i++){
            var tempArr = arr.slice(0,i).concat(arr.slice(i+1,arr.length));
            obj = helper(val,arr[i],expression[0],howManyBrackets);
            var tempVal = obj.val;
            var tempHowManyBrackets = obj.howManyBrackets;
            var tempResultExpression = obj.expression + arr[i];
            var tempExpression = "/";
            var q = tempHowManyBrackets;
            for(let k=howManyBrackets;k>=0;k--){
              
              var res = getRes(tempArr,tempVal,tempExpression,resultExpression + tempResultExpression,q);
              q-=1;
              tempResultExpression = ")" + tempResultExpression;
              if(res){
                return res;
              }
            }
              
          }
          break;
      default:
          console.log("XDXDXDXD");
    }
  
  }

}


function helper(total,num,exp,howMany){

  switch(exp) {
    case "+":
        return {
          val : total + num,
          expression : "+(",
          howManyBrackets : howMany + 1
        }
    case "-":
        return {
          val : total - num,
          expression : "-(",
          howManyBrackets : howMany + 1
        }
    case "*":
        return {
          val : total * num,
          expression : "*",
          howManyBrackets : howMany
        }
    case "/":
        return {
          val : total/num,
          expression : "/",
          howManyBrackets : howMany
        }
    default :
      console.log("WUUUUUUUUT");
  }

}
