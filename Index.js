//Exercise 1 Multiples of 3 or 5

let sum = 0

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i
    }
}
console.log(sum)

//Exercise 2 Even Fibonacci numbers


function evenFibSum(limit) {
    if (limit < 2)
        return 0;


    let evenFib1 = 0, evenFib2 = 2;
    let sum = evenFib1 + evenFib2;

    while (evenFib2 <= limit) {
        let evenFib3 = 4 * evenFib2 + evenFib1;

        if (evenFib3 > limit)
            break;

        evenFib1 = evenFib2;
        evenFib2 = evenFib3;
        sum += evenFib2;
    }

    return sum;
}

let limit = 4000000;

//Exercise 3 Largest prime factor

var divisor = 2;
var number = 600851475143;
while (number > 1) {
    if (number % divisor === 0) {
        number /= divisor;
    } else {
        divisor++;
    }
}
console.log(divisor);

//Exercise 4 highest palindrome of 3 digit product
let convertedNumber = n.toString()
let reverseString = convertedNumber.split('').reverse().join('')
return reverseString === convertedNumber ? true : false
}

while (num1 < 1000) {
    for (let i = num2; i < 1000; i++) {
        let prod = num1 * i
        if (checkPalindrome(prod)) {
            palindromes.push(prod)
            nums.push([num1, i])
        }
    }

    num1++

}

let palindromes2 = palindromes.sort(function (a, b) { return a - b; })
console.log(palindromes2[palindromes2.length - 1])
console.log(nums[nums.length - 1])


//Exercise 5, get lowest number divisible by 1-20

function gcd(a, b) {
    if (a % b != 0)
        return gcd(b, a % b);
    else
        return b;
}

function lcm(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++)
        ans = (ans * i) / (gcd(ans, i));
    return ans;
}


console.log(lcm(20))



//Exercise 6 Sum square difference

const sumOfSquares = n => {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i ** 2
    }
    return result
}

const squareOfSums = n => {
    let result2 = 0
    for (let i = 1; i <= n; i++) {
        result2 += i
    }
    let resultSquared = result2 ** 2
    return resultSquared
}

const finalResult = n => {
    return squareOfSums(n) - sumOfSquares(n)
}

console.log(finalResult(100))