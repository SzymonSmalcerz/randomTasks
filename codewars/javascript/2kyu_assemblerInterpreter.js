/*



This is the second part of this kata series. First part is here.

We want to create an interpreter of assembler which will support the following instructions:

mov x, y - copy y (either an integer or the value of a register) into register x.
inc x - increase the content of register x by one.
dec x - decrease the content of register x by one.
add x, y - add the content of the register x with y (either an integer or the value of a register) and stores the result in x (i.e. register[x] += y).
sub x, y - subtract y (either an integer or the value of a register) from the register x and stores the result in x (i.e. register[x] -= y).
mul x, y - same mith multiply (i.e. register[x] *= y).
div x, y - same with integer division (i.e. register[x] /= y).
label: - define a label position (label = identifier + ":", an identifier being a string that does not match any other command). Jump commands and call are aimed to these labels positions in the program.
jmp lbl - jumps to to the label lbl.
cmp x, y - compares x (either an integer or the value of a register) and y (either an integer or the value of a register). The result is used in the conditional jumps (jne, je, jge, jg, jle and jl)
jne lbl - jump to the label lbl if the values of the previous cmp command were not equal.
je lbl - jump to the label lbl if the values of the previous cmp command were equal.
jge lbl - jump to the label lbl if x was greater or equal than y in the previous cmp command.
jg lbl - jump to the label lbl if x was greater than y in the previous cmp command.
jle lbl - jump to the label lbl if x was less or equal than y in the previous cmp command.
jl lbl - jump to the label lbl if x was less than y in the previous cmp command.
call lbl - call to the subroutine identified by lbl. When a ret is found in a subroutine, the instruction pointer should return to the instruction next to this call command.
ret - when a ret is found in a subroutine, the instruction pointer should return to the instruction that called the current function.
msg 'Register: ', x - this instruction stores the output of the program. It may contain text strings (delimited by single quotes) and registers. The number of arguments isn't limited and will vary, depending on the program.
end - this instruction indicates that the program ends correctly, so the stored output is returned (if the program terminates without this instruction it should return the default output: see below).
; comment - comments should not be taken in consideration during the execution of the program.

Output format:
The normal output format is a string (returned with the end command).

If the program does finish itself without using an end instruction, the default return value is:

-1 (as an integer)

Input format:
The function/method will take as input a multiline string of instructions, delimited with EOL characters. Please, note that the instructions may also have indentation for readability pourposes.

For example:

program = """
; My first program
mov  a, 5
inc  a
call function
msg  '(5+1)/2 = ', a    ; output message
end

function:
    div  a, 2
    ret
"""
assembler_interpreter(program)
The above code would set register a to 5, increase its value by 1, calls the subroutine function, divide its value by 2, returns to the first call instruction, prepares the output of the program and then returns it with the end instruction. In this case, the output would be (5+1)/2 = 3.



*/


var values = {} //we store here our registers and functions
var msg = -1

function assemblerInterpreter(program){
  values = {}
  msg = -1
  
  program = program.split("\n")
  program = getRidOfComments(program)
  program = program.map(val => val.trim())
  var mainProgram = [];
  for(let i=0;i<program.length;i++){
    
    if(program[i] == ""){continue}
    else if(program[i].includes(":")){
      var temp = program[i].split(":")[0];
      values[temp] = []
      
      while(program[i+1] && (program[i+1].slice(0,3) != "ret" || program[i+1].includes(":"))){
        values[temp].push(program[i+1])
        i+=1;
      }
      if(!program[i+1].includes(":")){
        i+=1;
      }
    } else{
      mainProgram.push(program[i])
    } 
  }
  
//   console.log(mainProgram)
//   console.log(values)
  
  for(let i=0;i<mainProgram.length;i++){
    var jumped = handleInput(mainProgram[i],mainProgram) || 0
    if(jumped){break}
  }
  return msg;
}


var handleInput = (stringExpression,oryginalProgramTable) => {
//   console.log(stringExpression)
//   console.log("-------------------------------")
//   console.log(values)
//   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  var table = stringExpression.split(",").join("").split(" ").filter(val => val);
  if(table[0] == 'mov'){
    handleMOV(table)
  }else if(table[0] == 'jmp'){
    return handleJMP(table)
  }else if(table[0] == 'add'){
    handleADD(table)
  }else if(table[0] == 'jne'){
    return handleJNE(table)
  }else if(table[0] == 'je'){
    return handleJE(table)
  }else if(table[0] == 'jge'){
    return handleJGE(table)
  }else if(table[0] == 'jg'){
    return handleJG(table)
  }else if(table[0] == 'jle'){
    return handleJLE(table)
  }else if(table[0] == 'jl'){
    return handleJL(table)
  }else if(table[0] == 'cmp'){
    handleCMP(table)
  }else if(table[0] == 'sub'){
    handleSUB(table)
  }else if(table[0] == 'mul'){
    handleMUL(table)
  }else if(table[0] == 'div'){
    handleDIV(table)
  }else if(table[0] == 'inc'){
    handleINC(table)
  }else if(table[0] == 'call'){
    handleCALL(table)
  }else if(table[0] == 'dec'){
    handleDEC(table)
  }else if(table[0] == 'msg'){
    handleMSG(table)
  }
//   else if(table[0] == 'jnz'){
//     return handleJNZ(table,oryginalProgramTable)
//   }
}
var handleCALL = (table) => {
  label = values[table[1]]
  label.forEach(expression => handleInput(expression,label))
}
var handleJMP = (table) => {
  label = values[table[1]]
  label.forEach(expression => handleInput(expression,label))
  return true
}
var handleCMP = (table) => {
  values["cmp"] = {
    x : values[table[1]] || values[table[1]] === 0 ? values[table[1]] : parseInt(table[1]),
    y : values[table[2]] || values[table[2]] === 0 ? values[table[2]] : parseInt(table[2])
  }
}
var handleMSG = (table) => {
  res = "";
//   console.log("msgg")
//   console.log(table)
  for(let i=1;i<table.length;i++){
    var temp = table[i].trim();
    res+= values[temp] ?  values[temp] : temp.split("\'").join("") ?  temp.split("\'").join("") + " " : ""
  }
  msg = res
}
var handleMOV = (table) => {
  value = parseInt(table[2])
  if(value || value === 0){
    values[table[1]] = value
  } else{
    values[table[1]] = values[table[2]]
  }
}
var handleADD = (table) => {
  value = parseInt(table[2]) || values[table[2]]
  values[table[1]] += value;
}
var handleSUB = (table) => {
  value = parseInt(table[2]) || values[table[2]]
  values[table[1]] -= value;
}
var handleMUL = (table) => {
  value = parseInt(table[2]) || values[table[2]]
  values[table[1]] *= value;
}
var handleDIV = (table) => {
  value = parseInt(table[2]) || values[table[2]]
  values[table[1]] /= value;
}
var handleINC = (table) => {
  values[table[1]] += 1;
}
var handleDEC = (table) => {
  values[table[1]] -= 1;
}
var handleJNZ = (table,program) => {
  //jnz x y
  var x = parseInt(table[1]) || values[table[1]]
  var y = parseInt(table[2]) || values[table[2]]
  if(x !== 0 && y < 0){
  
    var indexOfJNZ = program.indexOf(table.join(" "));
    var newProgram = program.slice(indexOfJNZ + y,indexOfJNZ)
    
    while( x!== 0){
      for(let i=0;i<newProgram.length;i++){
        handleInput(newProgram[i],newProgram)
      } 
      x = parseInt(table[1]) || values[table[1]]
    }
    
  } else if(x!==0 && y>0){
    return y-1;
  }
}
var handleJNE = (table) => {
  if(values['cmp'] && values['cmp'].x != values['cmp'].y){
    handleJMP(table)
    return true
  }
}
var handleJE = (table) => {
  if(values['cmp'] && values['cmp'].x == values['cmp'].y){
    handleJMP(table)
    return true
  }
}
var handleJGE = (table) => {
  if(values['cmp'] && values['cmp'].x >= values['cmp'].y){
    handleJMP(table)
    return true
  }
}
var handleJG = (table) => {
  if(values['cmp'] && values['cmp'].x > values['cmp'].y){
    handleJMP(table)
    return true
  }
}
var handleJLE = (table) => {
  if(values['cmp'] && values['cmp'].x <= values['cmp'].y){
    handleJMP(table)
    return true
  }
}
var handleJL = (table) => {
  if(values['cmp'] && values['cmp'].x < values['cmp'].y){
    handleJMP(table)
    return true
  }
}
var getRidOfComments = (programTable) => {
  return programTable.map(val => val.indexOf(";") == -1 ? val : val.slice(0,val.indexOf(";")));
}


}



