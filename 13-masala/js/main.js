let arr = [23, 54, 21, 76, 23, 87];


let firstValue = arr[0];
let lastValue = arr[arr.length - 1];


let sum = firstValue + lastValue;


if (sum % 2 !== 0) {
   
    arr.push(sum);
} else {
   
    arr.unshift(sum);
}

console.log(arr);

