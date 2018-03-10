/*


You will be given an array and a single item from that array. The smallest value in array has the highest kyu - 1st kyu, 2nd smallest - 2nd kyu and so on. There are 8 kyus and each one has limited spots:

 1st kyu - 1 slot
 2nd kyu - 2 slots
 3rd kyu - 2 slots
 4th kyu - 3 slots
 5th kyu - 3 slots
 6th kyu - 3 slots
 7th kyu - 4 slots
 8th kyu - 4 slots
You should return kyu for the value passed based on the array. If value isn't low enough to get a kyu then return 0.

Examples:

([66,12,90,15], 15) => 2
([1,7,2,3,4,5], 1) => 1
([1,7,2,3,4,5,9,10], 7) => 4

*/


function getKyu(allHonors, honor){
  return helper(allHonors.sort((a,b) => a-b).indexOf(honor));
}

function helper(n){
  
  if(n>21){return 0;}
  else if(n>=18){return 8;}
  else if(n>=14){return 7;}
  else if(n>=11){return 6;}
  else if(n>=8){return 5;}
  else if(n>=5){return 4;}
  else if(n>=3){return 3;}
  else if(n>=1){return 2;}
  else if(n>=0){return 1;}
  
  return 0;
}
