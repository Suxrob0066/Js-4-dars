


let num1 = parseFloat(prompt("1-sonni kiriting:"));
let num2 = parseFloat(prompt("2-sonni kiriting:"));
let operation = prompt("Amalni tanlang (+, -, *, /):");


let result;

// Switch-case yordamida amalni bajarish
switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        // Nolga bo'linmaslik
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Nolga bo'lib bo'lmaydi!";
        }
        break;
    default:
        result = "Noto'g'ri amal tanlandi!";
}

// Natijani chiqar
console.log(`Natija: ${result}`);

