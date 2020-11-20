function add(x,y){
    return x+y;
  }
function subtract(x,y){
    return x-y;
  }
function multiply(x,y){
    return x*y;
  }
function divide(x,y){
    return x/y;
  }

function operate(op,num1,num2)
{
  switch(op)
  {
    case '+':
      let answer = add(num1,num2)
      console.log(answer)
      break;
    case '-':
      subtract(num1,num2)
      break;
    case '*':
      multiply(num1,num2)
      break;
    case '/':
      divide(num1,num2)
      break;
  }
}

console.log(add(5,3))
console.log(operate('+',5,4))
console.log(operate('-',5,2))
console.log(operate('*',5,4))
console.log(operate('/',5,2))

