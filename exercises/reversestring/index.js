// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Take starting value-'', pass it in as 1st arg- rev & use the result of computation as starting point for next run
    return str.split('').reduce((rev, char) => char + rev, '')
}

console.log(reverse('Love'))

module.exports = reverse;


// Solution 1
// return str.split('').reverse().join('')

// Solution 2
// for in iterates over keys while for of iterates over values
// let reverse = ''
// for(let char of str){
//     reverse = char + reverse
// }
// return reverse