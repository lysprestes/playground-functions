// Challenge 1
function compareTrue(a, b) {
  // your code here
  if (a && b) {
    return true
  }
  return false
}

// Challenge 2
function calcArea(base, height) {
  // your code here
  return (base * height) / 2
}

// Challenge 3
function splitSentence(sentence) {
  // your code here
  return sentence.split(' ')
}

// Challenge 4
function concatName(array) {
  // your code here
  return `${array[array.length - 1]}, ${array[0]}`
}

// Challenge 5
function footballPoints(wins, ties) {
  // your code here
  return wins * 3 + ties
}

// Challenge 6
function highestCount(numbers) {
  // your code here
  let maxNumber = Math.max(...numbers)
  let timesRepeat = 0
  for (let index of numbers) {
    if (maxNumber === index) {
      timesRepeat += 1
    }
  }
  return timesRepeat
}

// Challenge 7
function catAndMouse(mouse, cat1, cat2) {
  // your code here
  // Math.abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
  const positionCat1 = Math.abs(cat1 - mouse)
  const positionCat2 = Math.abs(cat2 - mouse)
  if (positionCat1 === positionCat2) return 'os gatos trombam e o rato foge'
  if (positionCat1 > positionCat2) return 'cat2'
  return 'cat1'
}

// Challenge 8
function fizzBuzz(numbers) {
  // your code here
  function replaceNum(num) {
    switch (true) {
      case num % 3 === 0 && num % 5 === 0:
        return 'fizzBuzz'
      case num % 3 === 0:
        return 'fizz'
      case num % 5 === 0:
        return 'buzz'
      default:
        return 'bug!'
    }
  }
  return numbers.map(replaceNum)
}

// Challenge 9
function encode() {
  // your code here
  let array = ''

  for (let index of string) {
    switch (index) {
      case 'a':
        array += 1
        break
      case 'e':
        array += 2
        break
      case 'i':
        array += 3
        break
      case 'o':
        array += 4
        break
      case 'u':
        array += 5
        break
      default:
        array += index
    }
  }
  return array
}

function decode() {
  // your code here
  let array = ''

  for (let index of string) {
    switch (index) {
      case '1':
        array += 'a'
        break
      case '2':
        array += 'e'
        break
      case '3':
        array += 'i'
        break
      case '4':
        array += 'o'
        break
      case '5':
        array += 'u'
        break
      default:
        array += index
    }
  }
  return array
}
