


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Juft va toq raqamlar uchun bo'sh arraylar
const juftnumber = [];
const toqnumbers = [];


numbers.forEach(number => {
    if (number % 2 === 0) {
        juftnumber.push(number); // Juft raqamlarni qo'shamiz
    } else {
        toqnumbers.push(number); // Toq raqamlarni qo'shamiz
    }
});


console.log("Juft raqamlar:", juftnumber);
console.log("Toq raqamlar:", toqnumbers);
