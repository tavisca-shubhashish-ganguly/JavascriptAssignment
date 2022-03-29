data=[100, 20, 15, 30,6,9, 10, 12, 150]
data.filter(d=>d%3 == 0 && d%5!=0 ).map(d=>console.log(d+" is Divisible by 3"))
data.filter(d=>d%5 == 0 && d%3!=0 ).map(d=>console.log(d+" is Divisible by 5"))
data.filter(d=>d%3 == 0 && d%5==0 ).map(d=>console.log(d+" is Divisible by 15"))