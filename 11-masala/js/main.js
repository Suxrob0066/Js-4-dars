
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
function findOldestByName(name) {
    const user = users.find(user => user.name === name);
    
    if (user) {
        const oldestUser = users.reduce((prev, current) => {
            return (prev.age > current.age) ? prev : current;
        });
        
        console.log(`Eng katta yoshdagi foydalanuvchi - ${oldestUser.name}, yoshi - ${oldestUser.age}`);
    } else {
        console.log('Kiritilgan ismga ega foydalanuvchi topilmadi.');
    }
}


findOldestByName("Nuriddin");
