let player_ques = document.getElementById('player_ques')
let wrapper = document.getElementById('wrapper')
let player_name = document.querySelector('#name')
let gender = document.getElementById('genders')
let ok = document.getElementById('ok')



ok.addEventListener('click', () => {
    localStorage.setItem('pn', JSON.stringify(player_name))
    localStorage.setItem('g', JSON.stringify(gender))
    player_ques.classList.add('not_display')
    wrapper.classList.remove('not_display')
})

// Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    }
];

let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // Получим блок кнопок:
    let optionsElement = document.getElementById("options");
    // Очистим блок с кнопками:
    optionsElement.innerHTML = "";

    // Массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
    })
    // При клике на блок с кнопками:
    optionsElement.addEventListener('click', (event) => {
        // Получаем в переменную кнопку на которую кликнули:
        let target = event.target;
        // Вызовем функцию проверки ответа и перехода к следующему вопросу (в аргумент функции передаем текст ответа):
        nextQuestion(target.textContent);
    }, { once: true });
}

// Функция для перехода к следующему вопросу
function nextQuestion(answer) {
    // Если переданный ответ равен корректному то
    if (answer === questions[currentQuestion].correctAnswer) {
        // Увеличиваем на единицу количество верных ответов
        correctAnswers++;
    }
    // Переход к следующему вопросу
    currentQuestion++;
    // Если номер текущего вопроса меньше количества вопросов то отображаем следующий вопрос
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Иначе отобразить результат теста
        displayResult();
    }
}

// Функция отображения результата теста
function displayResult() {
    const questionElement = document.getElementById("question"); //Блок с вопросом
    const optionsElement = document.getElementById("options"); // Блок с вариантами ответов
    const resultElement = document.getElementById("result"); // Блок для отображения результата
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;
}


displayQuestion();