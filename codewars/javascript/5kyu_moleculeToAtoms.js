/*

  https://www.codewars.com/kata/52f831fa9d332c6591000511/train/javascript

  For a given chemical formula represented by a string, count the number of atoms of
  each element contained in the molecule and return an object (associative array in PHP,
  Dictionary<string, int> in C#, Map in Java).

    For example:

    var water = 'H2O';
    parseMolecule(water); // return {H: 2, O: 1}

    var magnesiumHydroxide = 'Mg(OH)2';
    parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

    var fremySalt = 'K4[ON(SO3)2]2';
    parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

  As you can see, some formulas have brackets in them. The index outside the
  brackets tells you that you have to multiply count of each atom inside the
  bracket on this index. For example, in Fe(NO3)2 you have one iron atom,
  two nitrogen atoms and six oxygen atoms.

  Note that brackets may be round, square or curly and can also be nested.
  Index after the braces is optional.

*/

function parseMolecule(molecule) {
  return getDictionary(simplifyMolecule(molecule));
}

function simplifyMolecule(molecule) {
  molecule = molecule.split('');
  let stack = [[]];
  for(let i = 0; i<molecule.length; i++) {
    let v = molecule[i];
    if('([{'.indexOf(v) != -1) {
        stack.push([]);
    } else if(')]}'.indexOf(v) != -1) {
      let num = '';
      let j = i+1;
      while(molecule[j] && !isNaN(molecule[j])) {
        num += molecule[j];
        j+=1;
      }
      i = j-1;
      num = eval(num) || 1;
      let lastElements = stack.pop();
      for(let k=0;k<num;k++) {
        stack[stack.length - 1] = stack[stack.length - 1].concat(lastElements);
      }
    } else {
      let num = '';
      let j = i+1;
      while(molecule[j] && isNaN(molecule[j]) && '([{)]}'.indexOf(molecule[j]) == -1 && molecule[j] === molecule[j].toLowerCase()) {
        v+=molecule[j];
        i+=1;
        j+=1;
      }
      while(molecule[j] && !isNaN(molecule[j])) {
        num += molecule[j];
        j+=1;
      }
      i = j-1;
      num = eval(num) || 1;
      for(let j=0; j<num; j++) {
        stack[stack.length - 1].push(v);
      }
    }
  }
  return stack.pop();
}

function getDictionary(molecule) {
  let result = {};
  molecule.forEach(element => {
    result[element] = result[element] || 0;
    result[element] += 1;
  });
  return result;
}
