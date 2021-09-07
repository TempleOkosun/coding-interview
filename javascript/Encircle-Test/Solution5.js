const Stack = require('./stack')

const SExpressionCalculator = (expression) => {
  const operators = ['multiply', 'add']
  // clean expression
  const cleanedExpression = expression.replace(/[()]/g, '')
  console.log(`The cleaned expression is: ${cleanedExpression}`)
  // get tokens
  const tokens = cleanedExpression.split(' ')
  console.log(`The tokens: ${tokens}`)

  const stackMachine = new Stack()
  console.log(`starting stack size: ${stackMachine.size()}`)

  for (let i = 0; i < tokens.length; i++) {
    // At least 2 operands & 1 operator for a valid arithmetic expression
    // Else will return stackMachine.pop() - topmost item
    if (tokens.length < 2) {
      stackMachine.push(tokens[i])
    }

    if (tokens.length > 2 && stackMachine.size() < 2) {
      // We want to make sure there are at least 2 tokens on stack
      stackMachine.push(tokens[i])
    } else {
      // Since we now have 2 tokens
      // If incoming token makes a valid expression, we want to reduce it.
      let incomingToken = tokens[i]
      let topStackToken = stackMachine.pop()
      let secondStackToken = stackMachine.pop()
      // check if incoming & topmost are numbers & if there is an operator
      const isNumber = new RegExp(/^[0-9]+$/)

      const validExpression =
        isNumber.test(incomingToken) &&
        isNumber.test(topStackToken) &&
        operators.includes(secondStackToken)

      if (validExpression) {
        console.log(`stack size: ${stackMachine.size()}`)
        const result = Evaluate(topStackToken, incomingToken, secondStackToken)
        console.log(`Here is result after evaluate: ${result}`)
        stackMachine.push(result)
        console.log(`stack size: ${stackMachine.size()}`)
      } else {
        // If not valid expression, we want to return things back
        stackMachine.push(secondStackToken)
        stackMachine.push(topStackToken)
        stackMachine.push(incomingToken)
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

// console.log(`final result of calculator: ${SExpressionCalculator('546')}`)
// console.log(`final result of calculator: ${SExpressionCalculator('(add 123)')}`)
// console.log(`final result of calculator: ${SExpressionCalculator('(add 123 456)')}`)
// console.log(`final result of calculator: ${SExpressionCalculator('(multiply (add 1 2) 3)')}`)
console.log(
  `final result of calculator: ${SExpressionCalculator('(multiply 2 (add (multiply 2 3) 8))')}`
)

// console.log(
//   `final result of calculator: ${SExpressionCalculator(
//     'add((multiply 2 (add (multiply 2 3) 8)) 2)'
//   )}`
// )
