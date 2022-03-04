const Stack = require('./stack')
const Queue = require('./queue')

const SExpressionCalculator = (expression) => {
  const operators = ['multiply', 'add']
  // clean expression
  const cleanedExpression = expression.replace(/[()]/g, '')
  console.log(cleanedExpression)
  // get tokens
  const tokens = cleanedExpression.split(' ')
  console.log(tokens)

  const operatorStack = new Stack()
  const operandQueue = new Queue()

  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      operatorStack.push(tokens[i])
    } else {
      operandQueue.add(tokens[i])
    }
  }

  // For a valid expression we need at least 2 operands and 1 operator
  while (operatorStack.size() > 0) {
    let operandA = operandQueue.remove()
    console.log(`first operand: ${operandA}`)
    let operandB = operandQueue.remove()
    console.log(`Second operand: ${operandB}`)
    let currentOperator = operatorStack.pop()
    console.log(`Current Operator: ${currentOperator}`)
    operandQueue.add(Evaluate(operandA, operandB, currentOperator))
  }

  console.log(operatorStack.pop())
  // console.log(operatorStack.pop())
  // console.log(operatorStack.pop())
  console.log(operandQueue.remove())
  // console.log(operandQueue.remove())
  // console.log(operandQueue.remove())
  // console.log(operandQueue.remove())
}

function Evaluate(operandA, operandB, operator) {
  console.log(`Evaluate opA: ${operandA}`)
  console.log(`Evaluate opB: ${operandB}`)
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
