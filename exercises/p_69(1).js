// создание переменных с массивами слов
let body = ["рука", "нога", "спина", "голова", "ухо"];
let adjective = ["вонючее", "кривее", "хреновее", "тупее", "глупее"];
let parts = ["хвост", "рога", "шерсть", "копыта", "лапы"];
let animal = ["коровы", "козы", "лошади", "свиньи", "бегемота"];

// создание переменных со случайными словами
let randomBody = body[Math.floor(Math.random() * body.length)];
let randomOdjective = adjective[Math.floor(Math.random() * adjective.length)];
let randomParts = parts[Math.floor(Math.random() * parts.length)];
let randomAnimal = animal[Math.floor(Math.random() * animal.length)];

// итоговый результат с использованием оператора "+"
// let result = 'У тебя ' + randomBody + ' еще более ' + randomOdjective + ', чем ' + randomParts + ' у ' + randomAnimal + '!!!';

// итоговый результат с использованием метода .join
let result = ['У тебя', randomBody, 'еще более', randomOdjective + ', чем', randomParts, 'у', randomAnimal + '!!!'].join(' ');

console.log(
    result
);

// У тебя спина еще более кривее, чем лапы у лошади!!!