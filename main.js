// Array de preguntas y respuestas
const questions = [
  {
    question: "¿Qué significa SQL?",
    options: [
      "Structured Query Language",
      "System Query Language",
      "Simple Query Language",
      "Standard Query Language",
    ],
    answer: 2,
  },
  {
    question: "¿Qué es una base de datos relacional?",
    options: [
      "Una base de datos que utiliza una estructura de árbol",
      "Una base de datos que utiliza una estructura de gráfico",
      "Una base de datos que utiliza una estructura de tabla",
      "Una base de datos que utiliza una estructura de lista",
    ],
    answer: 2,
  },
  {
    question:
      "¿Cuál es la sintaxis correcta para seleccionar todos los campos de una tabla llamada 'clientes'?",
    options: [
      "SELECT FROM clientes",
      "SELECT clientes",
      "SELECT * FROM clientes",
      "SELECT campos FROM clientes",
    ],
    answer: 2,
  },
  {
    question: "¿Qué es una clave primaria?",
    options: [
      "Un tipo de índice en una base de datos",
      "Un campo que identifica de manera única cada registro en una tabla",
      "Una función que regresa un valor único en una base de datos",
      "Un tipo de relación entre dos tablas",
    ],
    answer: 1,
  },
  {
    question: "¿Qué comando se utiliza para eliminar una tabla?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
    answer: 1,
  },
  {
    question: "¿Qué es una base de datos relacional?",
    options: [
      "Una base de datos que almacena información en un solo archivo",
      "Una base de datos que utiliza un modelo de datos basado en objetos",
      "Una base de datos que utiliza tablas para almacenar información",
      "Una base de datos que utiliza XML para almacenar información",
    ],
    answer: 3,
  },
  {
    question: "¿Qué es SQL?",
    options: [
      "Un lenguaje de programación",
      "Un sistema operativo",
      "Un lenguaje de consulta para bases de datos",
      "Una herramienta de análisis de datos",
    ],
    answer: 3,
  },
  {
    question: "¿Qué es una clave primaria?",
    options: [
      "Un tipo de índice en una base de datos",
      "Un campo que identifica de manera única cada registro en una tabla",
      "Una función que regresa un valor único en una base de datos",
      "Un tipo de relación entre dos tablas",
    ],
    answer: 2,
  },
  {
    question: "¿Qué es la normalización de una base de datos?",
    options: [
      "Un proceso para agregar redundancia a la base de datos",
      "Un proceso para eliminar redundancia de la base de datos",
      "Un proceso para agregar tablas a la base de datos",
      "Un proceso para eliminar tablas de la base de datos",
    ],
    answer: 1,
  },
];

// Estado del juego
const state = {
  score: 0,
  questionIndex: 0,
  errorCount: 0,
};

// Función para mostrar una pregunta y sus opciones
function displayQuestion() {
  const { question, options } = questions[state.questionIndex]; // corrección aquí
  document.getElementById("question").innerText = question;
  document.getElementById("options").innerHTML = options
    .map(
      (option, index) =>
        `<button onclick="checkAnswer(${index})">${option}</button>`
    )
    .join("");
}

// Función para verificar la respuesta del jugador
function checkAnswer(answerIndex) {
  const { options, answer } = questions[state.questionIndex];

  if (answerIndex < 0 || answerIndex >= options.length) {
    alert("Respuesta inválida.");
    return;
  }
  if (answerIndex === answer) {
    state.score++;
    document.getElementById("score").innerText = `Puntuación: ${state.score}`;
    state.questionIndex++;
    if (state.questionIndex === questions.length) {
      endGame();
    } else {
      displayQuestion();
      document.getElementById("next").style.display = "none";
    }
  } else {
    state.errorCount++;
    if (state.errorCount >= 32) {
      endGame();
    } else {
      alert(
        `Respuesta incorrecta. La respuesta correcta era: ${options[answer]}`
      );
    }
  }

  if (state.score > 0) {
    document.getElementById("next").style.display = "block";
  }
}

// Función para finalizar el juego
function endGame() {
  alert(
    `¡Fin del juego! Has respondido ${state.score} preguntas correctamente de un total de ${questions.length}. ¡Gracias por jugar!`
  );
  state.questionIndex = 0;
  state.score = 0;
  state.errorCount = 0;
  document.getElementById("score").innerText = "";
  document.getElementById("question").innerText = "";
  document.getElementById("options").innerHTML = "";
  document.getElementById("start").style.display = "block";
}

// Evento de click del botón "Empezar"
document.getElementById("start").addEventListener("click", function () {
  displayQuestion();
  document.getElementById("start").style.display = "none";
});

/* reproductor*/

class musicPlayer {
  constructor() {
    this.play = this.play.bind(this);
    this.playBtn = document.getElementById("play");
    this.playBtn.addEventListener("click", this.play);
    this.controlPanel = document.getElementById("control-panel");
    this.infoBar = document.getElementById("info");
    this.status = false;
  }

  play() {
    var audio = document.getElementById("Music");
    let controlPanelObj = this.controlPanel,
      infoBarObj = this.infoBar;
    Array.from(controlPanelObj.classList).find(function (element) {
      return element !== "active"
        ? controlPanelObj.classList.add("active")
        : controlPanelObj.classList.remove("active");
    });

    Array.from(infoBarObj.classList).find(function (element) {
      return element !== "active"
        ? infoBarObj.classList.add("active")
        : infoBarObj.classList.remove("active");
    });

    this.status = !this.status;

    if (this.status == true) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

const newMusicPlayer = new musicPlayer();
