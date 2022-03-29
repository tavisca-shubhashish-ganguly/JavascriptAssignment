const str = "pepep"
const str1 = "absterf"

function CheckPalindrome(str){
    for (let i = 0; i < str.length / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[str.length - 1 - i]) {
            return 'It is not a palindrome'
            
        }
        
    }
    return 'It is a palindrome'
    
}

let output = CheckPalindrome(str)
console.log(output)
output = CheckPalindrome(str1)
console.log(output)
