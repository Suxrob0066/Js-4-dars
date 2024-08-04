const inputName = prompt("Ismni kiriting:");
// Berilgan array
const names = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];



if (names.includes(inputName)) {
    console.log(`${inputName} array ichida mavjud.`);
} else {
    console.log(`${inputName} array ichida mavjud emas.`);
}
