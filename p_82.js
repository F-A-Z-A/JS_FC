// ------------EXERCISE #1------------
let scores = {
    'polina urazaeva': 5,
    sergey: 8,
    annaUrazaeva: 3
};

scores['polina urazaeva'] += 2;
scores.sergey += 2;
scores.annaUrazaeva += 5;

console.log(scores);

// { 'polina urazaeva': 7, sergey: 10, annaUrazaeva: 8 }


// ------------EXERCISE #2------------
let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};

console.log(
    myCrazyObject['some array'][2].number
);

// 123