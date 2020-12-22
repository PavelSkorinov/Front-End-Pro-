const palindrome = function findPalindrome(number, stepCount = 0) {
    let numberToStr = number.toString();
    let reverseNumberToStr = numberToStr.split("").reverse().join("");
    const res = {
        result: number,
        steps: stepCount
    };
    if (numberToStr === reverseNumberToStr) { 
        return res;   
    } else { 
        let parse = number + parseInt(reverseNumberToStr);
        stepCount++;
        return findPalindrome(parse, stepCount);
    };
};

console.log(palindrome(312));
console.log(palindrome(4843));
console.log(palindrome(96));