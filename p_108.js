// ------------EXERCISE #3------------
let input = "javascript is awesome";
let output = "";

for (i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
}
console.log(output)


// ------------EXERCISE #2------------
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"; // 33 буквы
let randomString = "";

while (randomString.length < 8) {
    randomString +=alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);


// ------------EXERCISE #1------------
let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (i = 0; i < animals.length; i++) {
    console.log(animals[i] + " - прекрасное животное")
}