let movies = {
    'В поисках Немо': {
        date: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
        format: 'DVD'
    },
    'Звездные войны': {
        date: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
        format: 'DVD'
    },
    'Гарри Поттер и Кубок огня': {
        date: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
        format: '"Blu-ray'
    }
}

let starWars = movies['Звездные войны']

console.log(
    starWars.actors[1]
);

// Харрисон Форд