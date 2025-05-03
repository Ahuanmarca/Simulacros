// AQUI
const datasets = {
  "2025-01": preguntas_2025_01,
  "2025-02": preguntas_2025_02,
  "2025-03": preguntas_2025_03,
  "2025-04": preguntas_2025_04,
  "2025-05": preguntas_2025_05,
  test: test,
};

// const errores = {};
const errores = JSON.parse(localStorage.getItem("errores") || "{}");
actualizarBotonReforzar();

let current = 0;
let preguntas = [];
let answers = [];
let awaitingNext = false;
let arrowSelected = null;
let hasMovedWithArrow = false;
let modoReforzar = false;

function actualizarBotonReforzar() {
  const cantidadErrores = Object.values(errores).filter(v => v > 0).length;
  const btn = document.getElementById("reforzarBtn");
  if (btn) {
    btn.textContent = `Reforzar errores (${cantidadErrores})`;
  }
}

function iniciarQuiz(id) {
  preguntas = datasets[id].map((p, i) => ({ ...p, _origen: id, _index: i }));
  current = 0;
  answers = [];
  modoReforzar = false;
  document.getElementById("menu").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  document.getElementById("summary").style.display = "none";
  showQuestion(current);
  document.getElementById("backBtn").style.display = "block";
}

function iniciarReforzar() {
  const erroresOrdenados = Object.entries(errores)
    .sort((a, b) => b[1] - a[1])
    .map(([k]) => {
      const [origen, index] = k.split("::");
      return { ...datasets[origen][index], _origen: origen, _index: parseInt(index) };
    });

  const usados = new Set(erroresOrdenados.map(p => p._origen + "::" + p._index));

  const resto = Object.entries(datasets)
    .flatMap(([origen, arr]) =>
      arr.map((p, i) => ({ ...p, _origen: origen, _index: i }))
    )
    .filter(p => !usados.has(p._origen + "::" + p._index));

  const seleccion = erroresOrdenados.concat(resto.sort(() => 0.5 - Math.random()));

  preguntas = seleccion.slice(0, 60);
  current = 0;
  answers = [];
  modoReforzar = true;
  document.getElementById("menu").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  document.getElementById("summary").style.display = "none";
  showQuestion(current);
  document.getElementById("backBtn").style.display = "block";
}

function showMenu() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("summary").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
  actualizarBotonReforzar();
}

function showQuestion(index) {
  const q = preguntas[index];
  arrowSelected = null;
  hasMovedWithArrow = false;
  const box = document.getElementById("quizBox");
  box.innerHTML = `
    <div class="question">${q.pregunta}</div>
    <div class="options">
      ${q.opciones
      .map(
        (opt, i) =>
          `<button onclick="submitAnswer(${i})" id="btn${i}">${opt}</button>`
      )
      .join("")}
      <button onclick="submitAnswer(null)" id="btnPass">Pasar</button>
    </div>
    <div id="feedback"></div>
    <button id="nextBtn" style="display:none" onclick="nextQuestion()">Siguiente</button>
  `;
  awaitingNext = false;
}

function submitAnswer(selected) {
  if (awaitingNext) return;
  awaitingNext = true;
  const q = preguntas[current];
  const correctaLetra = q.correcta.trim().charAt(0).toLowerCase();
  const correctaIdx = q.opciones.findIndex(
    (opt) => opt.trim().charAt(0).toLowerCase() === correctaLetra
  );

  const isCorrect = selected === correctaIdx;
  const feedbackBox = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");

  document.querySelectorAll(".options button").forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove(
      "selected",
      "correct-answer",
      "incorrect-answer",
      "highlighted"
    );
    if (i === correctaIdx) btn.classList.add("correct-answer");
  });

  if (selected !== null) {
    const selectedBtn = document.getElementById(`btn${selected}`);
    if (selectedBtn) {
      if (isCorrect) selectedBtn.classList.add("selected");
      else selectedBtn.classList.add("incorrect-answer");
    }
  } else {
    const passBtn = document.getElementById("btnPass");
    if (passBtn) passBtn.classList.add("selected");
  }

  const key = q._origen + "::" + q._index;

  if (selected === null || !isCorrect) {
    errores[key] = (errores[key] || 0) + 1;
  } else {
    if (errores[key]) errores[key] = Math.max(0, errores[key] - 1);
  }

  actualizarBotonReforzar();

  const formattedComment = q.comentario.replace(/\n/g, "<br>");

  if (selected === null) {
    feedbackBox.innerHTML = `<div class="feedback">Pasada. ${formattedComment}</div>`;
    answers.push({ selected: null, correct: false });
  } else if (isCorrect) {
    feedbackBox.innerHTML = `<div class="feedback correct">¡Correcta!</div>`;
    answers.push({ selected, correct: true });
  } else {
    feedbackBox.innerHTML = `<div class="feedback"><span class="incorrect">Incorrecta.</span> ${formattedComment}</div>`;
    answers.push({ selected, correct: false });
  }

  nextBtn.style.display = "inline-block";
  localStorage.setItem("errores", JSON.stringify(errores));
}

function nextQuestion() {
  current++;
  if (current < preguntas.length) showQuestion(current);
  else showSummary();
}

function showSummary() {
  document.getElementById("quizBox").style.display = "none";
  const summary = document.getElementById("summary");
  summary.style.display = "block";

  const total = preguntas.length;
  const correct = answers.filter((a) => a.correct).length;
  const passed = answers.filter((a) => a.selected === null).length;
  const incorrect = total - correct - passed;

  summary.innerHTML = `
<h2>Resumen del cuestionario</h2>
<p>Correctas: <strong>${correct}</strong></p>
<p>Incorrectas: <strong>${incorrect}</strong></p>
<p>Pasadas: <strong>${passed}</strong></p>
<h3>Revisar preguntas con error o pasadas</h3>
${preguntas
      .map((q, i) => {
        const user = answers[i];
        if (user.correct) return "";
        const selectedText =
          user.selected === null ? "—" : q.opciones[user.selected];
        const correctText = q.correcta;
        const statusClass = user.selected === null ? "pasada" : "incorrecta";
        const statusLabel = user.selected === null ? "Pasada" : "Incorrecta";
        const comentario = q.comentario?.replace(/\n/g, "<br>") || "";
        return `
  <div class="resumen-pregunta ${statusClass}">
    <p><strong>Pregunta ${i + 1}:</strong> ${q.pregunta}</p>
    <p><strong>Tu respuesta:</strong> ${selectedText}</p>
    <p><strong>Respuesta correcta:</strong> ${correctText}</p>
    <p><strong>Estado:</strong> <span class="${statusClass}">${statusLabel}</span></p>
    <div class="comentario"><em>${comentario}</em></div>
    <hr>
  </div>
`;
      })
      .join("")}
`;
  document.getElementById("backBtn").style.display = "block";
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (awaitingNext) {
    if (key === " " || key === "spacebar" || key === "enter") {
      nextQuestion();
    } else if (key === "escape") {
      showMenu();
    }
    return;
  }

  const keyMap = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: null,
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    p: null,
  };
  if (key in keyMap) {
    submitAnswer(keyMap[key]);
    return;
  }

  if (key === "arrowdown" || key === "arrowup") {
    const optionButtons = Array.from(
      document.querySelectorAll(".options button")
    );
    if (!hasMovedWithArrow) {
      arrowSelected = 0;
      hasMovedWithArrow = true;
    } else {
      arrowSelected += key === "arrowdown" ? 1 : -1;
      if (arrowSelected < 0) arrowSelected = optionButtons.length - 1;
      if (arrowSelected >= optionButtons.length) arrowSelected = 0;
    }
    optionButtons.forEach((btn, i) => {
      btn.classList.toggle("highlighted", i === arrowSelected);
    });
  }

  if (key === "enter" && hasMovedWithArrow) {
    submitAnswer(arrowSelected);
  }
});

function borrarErrores() {
  localStorage.removeItem("errores");
  for (const k in errores) delete errores[k];
  actualizarBotonReforzar();
  alert("Errores borrados.");
}
