



let number = prompt("3 xonali sonni kiriting:");


if (number.length === 3 && !isNaN(number)) {
   
    let firstDigit = parseInt(number[0]);
    let secondDigit = parseInt(number[1]);
    let thirdDigit = parseInt(number[2]);


    let sum = firstDigit + thirdDigit;

    // Yig'indining ikkinchi raqamga nisbati
    let difference = sum - secondDigit;

    // Natijani chiqarish
    console.log(`Birinchi va uchinchi xonalarning yig'indisi: ${sum}`);
    console.log(`Bu yig'indi ikkinchi raqamdan ${difference} ga katta.`);
} else {
    console.log("Iltimos, to'g'ri 3 xonali son kiriting.");
}