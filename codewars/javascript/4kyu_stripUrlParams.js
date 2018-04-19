/*


	Complete the method so that it does the following:
	Removes any duplicate query string parameters from the url
	Removes any query string parameters specified within the 2nd argument (optional array)
	Examples:
	stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
	stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
	stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'


*/


function stripUrlParams(url, paramsToStrip){
  url = url.split("?");
  if(url[0] == url){return url}
  let args = {};
  let params = url[1].split("&").map(val => {
    let tempVal = val.split("=");
    if((!paramsToStrip || paramsToStrip.indexOf(tempVal[0]) == -1) && args[tempVal[0]] === undefined){
      args[tempVal[0]] = tempVal[1];
      return val;
    }else{
      return "";
    }
  }).filter(val => val).join("&");
  return args ? url[0] + "?" + params : url[0];
}
