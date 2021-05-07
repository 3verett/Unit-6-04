let firstNumber = 0

let secondNumber = 0

let thirdNumber = 0

let avgBase = 0

let answer = 0

document.getElementById('button').addEventListener('click', solve)

function solve () {
  firstNumber = document.getElementById('base-one').value

  secondNumber = document.getElementById('base-two').value

  thirdNumber = document.getElementById('height').value

  firstNumber = parseInt (firstNumber)

  secondNumber = parseInt (secondNumber)

  thirdNumber = parseInt (thirdNumber)

  avgBase = (firstNumber + secondNumber) / 2

  answer = avgBase * thirdNumber

  document.getElementById('text-display').innerHTML = answer
}
