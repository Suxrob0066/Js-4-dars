



function findDivisorSum(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) { 
            sum += i; // Bo'luvchini yig'indiga qo'shish
        }
    }

    return sum;
}

// Foydalanuvchidan son kiritadi
const userInput = prompt("Son kiriting:");
const number = parseInt(userInput);

if (!isNaN(number) && number > 0) {
    const result = findDivisorSum(number);
    console.log(`Sonning bo'luvchilari yig'indisi: ${result}`);
} else {
    console.log("Iltimos, musbat butun son kiriting.");
}