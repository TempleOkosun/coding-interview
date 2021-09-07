const Stack = require('./stack')

const SExpressionCalculator = (expression) => {
  const operators = ['multiply', 'add']
  // clean expression
  const cleanedExpression = expression.replace(/[()]/g, '')
  console.log(cleanedExpression)
  // get tokens
  const tokens = cleanedExpression.split(' ')
  console.log(tokens)

  const stackMachine = new Stack()
  console.log(`starting stack size: ${stackMachine.size()}`)

  for (let i = 0; i < tokens.length; i++) {
    stackMachine.push(tokens[i])
    console.log(`For loop iteration ${i}: stack size is: ${stackMachine.size()}`)
    // At least 2 operands & 1 operator for a valid arithmetic expression
    if (stackMachine.size() >= 3) {
      let operandB = stackMachine.pop()
      console.log(`first if operandB: ${operandB}`)
      let operandA = stackMachine.pop()
      console.log(`first if operandA: ${operandA}`)
      let currentOperator = stackMachine.pop()
      console.log(`first if currentOperator: ${currentOperator}`)

      const isNumber = new RegExp(/^[0-9]+$/)
      console.log(
        ` Result of cond = ${
          isNumber.test(operandB) && isNumber.test(operandA) && operators.includes(currentOperator)
        }`
      )

      if (
        isNumber.test(operandB) &&
        isNumber.test(operandA) &&
        operators.includes(currentOperator)
      ) {
        console.log(`stack size: ${stackMachine.size()}`)
        // console.log(operandB)
        // console.log(operandA)
        // console.log(currentOperator)
        const result = Evaluate(operandA, operandB, currentOperator)
        console.log(`Here is result after evaluate: ${result}`)
        stackMachine.push(result)
        console.log(`stack size: ${stackMachine.size()}`)
      } else {
        stackMachine.push(currentOperator)
        stackMachine.push(operandA)
        stackMachine.push(operandB)
      }
    }
  }

  return stackMachine.pop()
  // console.log(stackMachine.pop())
  // console.log(stackMachine.pop())
  // console.log(stackMachine.pop())
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
