
const inputName = prompt("Ismni kiriting:");
// Berilgan array
const names = ["Nuriddin", "Komiljon", "Izzatbek", ];

const users = [
    {
        id: 1,
        age: 20,
        name: "Nuriddin",
        gmail: "nuriddin@gmail.com"
    },
    {
        id: 2,
        age: 15,
        name: "Komiljon",
        gmail: "komiljon@gmail.com"
    },
    {
        id: 3,
        age: 25,
        name: "Izzatbek",
        gmail: "Izzatbek@gmail.com"
    }
];

// Qidirilayotgan ism
const searchName = "Nuriddin";

// Ismni qidirish
const foundUser = users.find(user => user.name === searchName);

if (foundUser) {
    console.log(foundUser);
} else {
    console.log("Foydalanuvchi topilmadi.");
}

