// Challenge 10
function techList() {
  // your code here
  let arrayTech = []
  list.sort()
  for (let tech of list) {
    arrayTech.push({
      tech,
      name
    })
  }
  return arrayTech.length === 0 ? 'Vazio!' : arrayTech
}

// Challenge 11
function generatePhoneNumber(phone) {
  // your code here
  let counter = 0
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (let j = 0; j <= phone.length; j++) {
      counter = 0
      for (let i = 0; i <= phone.length; i++) {
        //phone[0] == 1 phone[0+1] == 1 phone[0+2] == 9
        if ((phone[i] < 0) | (phone[i] > 9)) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
        if (phone[j] == phone[i]) {
          counter++
          3
        }
        if (counter >= 3) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
      }
    }
    return (
      '(' +
      phone[0] +
      phone[1] +
      ')' +
      ' ' +
      phone[2] +
      phone[3] +
      phone[4] +
      phone[5] +
      phone[6] +
      '-' +
      phone[7] +
      phone[8] +
      phone[9] +
      phone[10]
    )
  }
}

// Challenge 12
function triangleCheck(lineA, lineB, lineC) {
  // your code here
  let arr = [lineA, lineB, lineC]
  arr.sort()
  if (arr[0] + arr[1] > arr[2] && arr[2] > Math.abs(arr[1] - arr[0])) {
    return true
  }
  return false
}

// Challenge 13
function hydrate(str) {
  // your code here
  let water = 0
  for (let i = 0; i < str.length; i++) {
    if (isFinite(str.charAt(i))) water += Number(str.charAt(i))
  }

  if (water === 1) return `${water} copo de água`
  if (water > 1) return `${water} copos de água`
}
