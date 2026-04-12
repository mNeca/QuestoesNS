(function () {
  "use strict";

  const TOTAL_QUESTIONS = 20;
  const PASS_THRESHOLD = 0.75;

  const screenTopics = document.getElementById("screen-topics");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenResults = document.getElementById("screen-results");
  const selectAll = document.getElementById("select-all");
  const topicInputs = () =>
    Array.from(document.querySelectorAll('input[name="topic"]'));
  const topicError = document.getElementById("topic-error");
  const topicPoolWarning = document.getElementById("topic-pool-warning");
  const btnStart = document.getElementById("btn-start");
  const btnNext = document.getElementById("btn-next");
  const btnRestart = document.getElementById("btn-restart");

  const questionTopicEl = document.getElementById("question-topic");
  const questionTextEl = document.getElementById("question-text");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const progressText = document.getElementById("quiz-progress-text");
  const progressFill = document.getElementById("quiz-progress-fill");
  const progressBar = document.querySelector(".quiz-progress-bar");

  const resultsScore = document.getElementById("results-score");
  const resultsVerdict = document.getElementById("results-verdict");

  /** @type {{ topic: string, question: string, correct: string, distractors: string[] }[]} */
  let deck = [];
  let index = 0;
  let correctCount = 0;
  /** @type {{ label: string, text: string, isCorrect: boolean }[]} */
  let currentShuffled = [];
  let answered = false;

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showScreen(which) {
    [screenTopics, screenQuiz, screenResults].forEach((el) => {
      el.hidden = true;
      el.classList.remove("screen--active");
    });
    which.hidden = false;
    which.classList.add("screen--active");
  }

  function getSelectedTopics() {
    return topicInputs()
      .filter((i) => i.checked)
      .map((i) => i.value);
  }

  function buildPool(topics) {
    const set = new Set(topics);
    return QUIZ_BANK.filter((q) => set.has(q.topic));
  }

  function syncSelectAll() {
    const inputs = topicInputs();
    if (!inputs.length) return;
    const all = inputs.every((i) => i.checked);
    const none = inputs.every((i) => !i.checked);
    selectAll.checked = all;
    selectAll.indeterminate = !all && !none;
  }

  selectAll.addEventListener("change", () => {
    const on = selectAll.checked;
    topicInputs().forEach((i) => {
      i.checked = on;
    });
    selectAll.indeterminate = false;
    topicError.hidden = true;
    topicPoolWarning.hidden = true;
  });

  topicInputs().forEach((i) => {
    i.addEventListener("change", () => {
      syncSelectAll();
      topicError.hidden = true;
      topicPoolWarning.hidden = true;
    });
  });

  syncSelectAll();

  btnStart.addEventListener("click", () => {
    const topics = getSelectedTopics();
    topicError.hidden = true;
    topicPoolWarning.hidden = true;

    if (!topics.length) {
      topicError.hidden = false;
      return;
    }

    const pool = buildPool(topics);
    if (pool.length < TOTAL_QUESTIONS) {
      topicPoolWarning.textContent =
        "Não existem questões suficientes para os temas escolhidos. Selecione mais temas (são necessárias pelo menos 20 questões no conjunto).";
      topicPoolWarning.hidden = false;
      return;
    }

    deck = shuffleInPlace([...pool]).slice(0, TOTAL_QUESTIONS);
    index = 0;
    correctCount = 0;
    answered = false;
    showScreen(screenQuiz);
    renderQuestion();
  });

  function renderQuestion() {
    answered = false;
    btnNext.hidden = true;
    feedbackEl.hidden = true;
    feedbackEl.className = "feedback";
    feedbackEl.textContent = "";

    const q = deck[index];
    const options = shuffleInPlace([
      { text: q.correct, isCorrect: true },
      ...q.distractors.map((text) => ({ text, isCorrect: false })),
    ]);

    currentShuffled = options.map((o, i) => ({
      label: `Opção ${i + 1}`,
      text: o.text,
      isCorrect: o.isCorrect,
    }));

    questionTopicEl.textContent = q.topic;
    questionTextEl.textContent = `Q${index + 1}: ${q.question}`;

    const n = index + 1;
    progressText.textContent = `Pergunta ${n} de ${TOTAL_QUESTIONS}`;
    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(n));
      progressBar.setAttribute("aria-valuemax", String(TOTAL_QUESTIONS));
    }
    progressFill.style.width = `${(n / TOTAL_QUESTIONS) * 100}%`;

    optionsEl.innerHTML = "";
    currentShuffled.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = `${opt.label}: ${opt.text}`;
      btn.dataset.index = String(i);
      btn.addEventListener("click", () => onOptionClick(i));
      optionsEl.appendChild(btn);
    });
  }

  function onOptionClick(optionIndex) {
    if (answered) return;
    answered = true;

    const choice = currentShuffled[optionIndex];
    const buttons = optionsEl.querySelectorAll(".option-btn");

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      const opt = currentShuffled[i];
      if (opt.isCorrect) {
        btn.classList.add("option-btn--correct");
      } else if (i === optionIndex && !opt.isCorrect) {
        btn.classList.add("option-btn--wrong");
      }
    });

    if (choice.isCorrect) {
      correctCount++;
      feedbackEl.hidden = false;
      feedbackEl.className = "feedback feedback--ok";
      feedbackEl.textContent = "Correto.";
    } else {
      feedbackEl.hidden = false;
      feedbackEl.className = "feedback feedback--bad";
      const correctOne = currentShuffled.find((o) => o.isCorrect);
      feedbackEl.textContent = `Incorreto. A resposta correta: ${correctOne ? correctOne.text : ""}.`;
    }

    btnNext.hidden = false;
  }

  btnNext.addEventListener("click", () => {
    index++;
    if (index >= TOTAL_QUESTIONS) {
      showResults();
    } else {
      renderQuestion();
    }
  });

  function showResults() {
    showScreen(screenResults);
    const pct = correctCount / TOTAL_QUESTIONS;
    resultsScore.textContent = `Acertou em ${correctCount} de ${TOTAL_QUESTIONS} questões (${Math.round(pct * 100)}%).`;

    resultsVerdict.classList.remove("results-verdict--apto", "results-verdict--inapto");
    if (pct < PASS_THRESHOLD) {
      resultsVerdict.classList.add("results-verdict--inapto");
      resultsVerdict.textContent = "inapto 😠";
    } else {
      resultsVerdict.classList.add("results-verdict--apto");
      resultsVerdict.textContent = "Apto 😊";
    }
  }

  btnRestart.addEventListener("click", () => {
    showScreen(screenTopics);
    syncSelectAll();
  });
})();
