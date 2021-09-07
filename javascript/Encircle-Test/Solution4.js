const Stack = require('./stack')

const SExpressionCalculator = (expression) => {
  const operators = ['multiply', 'add']
  // clean expression
  const cleanedExpression = expression.replace(/[()]/g, '')
  console.log(cleanedExpression)
  // get tokens
  const tokens = cleanedExpression.split(' ')
  console.log(tokens)

  const operatorStack = new Stack()
  const operandStack = new Stack()
  const isNumber = new RegExp(/^[0-9]+$/)

  for (let i = 0; i < tokens.length; i++) {
    p
    // check if current token is an operator or operand
    if (operators.includes(tokens[i])) {
      operatorStack.push(tokens[i])
    } else if (isNumber.test(tokens[i]) && isNumber.test(tokens[i++])) {
      operandStack.push(Evaluate(tokens[i], tokens[i++], operatorStack.pop()))
    } else {
      operandStack.push(tokens[i])
    }
  }

  // console.log(operatorStack.pop())
  // console.log(operatorStack.pop())
  // console.log(operatorStack.pop())

  // console.log(operatorStack.pop())
  // console.log(operatorStack.pop())
  // console.log(operandStack.pop())
  // console.log(operandQueue.remove())
  // console.log(operandQueue.remove())
  // console.log(operandQueue.remove())
}

function Evaluate(operandA, operandB, operator) {
  console.log(`Evaluate opA: ${operandA}`)
  console.log(`Evaluate opB: ${operandB}`)
  console.log(`Evaluate operator: ${operator}`)
  let result
  switch (operator) {
    case 'add':
      result = eval(`${operandA} + ${operandB}`)
      break
    case 'multiply':
      result = eval(`${operandA} * ${operandB}`)
      break
    default:
      throw new Error(`Invalid operator: ${operator}`)
  }
  return result
}

// console.log(`final result of calculator: ${SExpressionCalculator('(add 123 456)')}`)
// console.log(`final result of calculator: ${SExpressionCalculator('(multiply (add 1 2) 3)')}`)
console.log(
  `final result of calculator: ${SExpressionCalculator('(multiply 2 (add (multiply 2 3) 8))')}`
)
//
// console.log(
//   `final result of calculator: ${SExpressionCalculator(
//     'add((multiply 2 (add (multiply 2 3) 8)) 2)'
//   )}`
// )
