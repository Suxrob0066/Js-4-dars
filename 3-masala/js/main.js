


let arr = [true, "Salom", 23, undefined];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        arr[i] = null;
    }
}

console.log(arr);



[true, null, 23, undefined]