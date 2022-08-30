//Exercise 1

let sum = 0

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i
    }
}
console.log(sum)

//Exercise 2


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

//Exercise 3

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