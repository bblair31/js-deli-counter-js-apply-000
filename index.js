function takeANumber(katzDeliLine) {
  var number = 0
  number++
  katzDeliLine.push(number)
  return (`Welcome, ${number}.`)
}
let line = []
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
     return `Currently serving ${katzDeliLine.shift()}.`
  } else
  return "There is nobody waiting to be served!" 
}

function currentLine(katzDeliLine) {
  var current = []
  if (katzDeliLine.length !== 0) {
    for (var i = 0;i < katzDeliLine.length;i++) {
      current.push(`${[i + 1]}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${current.join(", ")}`
  } else
  return "The line is currently empty."
}