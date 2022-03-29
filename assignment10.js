function FindVowels(str){
    const vowels = ['a','e','i','o','u']
    return str.toLowerCase().split("").filter(s=>vowels.includes(s)).length

}

let vowelCount =FindVowels("I am Shubhashish")
console.log(vowelCount)