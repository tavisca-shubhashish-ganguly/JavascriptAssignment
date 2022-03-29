const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
console.log(reversedNum(1234))
console.log(reversedNum(-54321))