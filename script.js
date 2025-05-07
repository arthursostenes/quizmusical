function submitQuiz() {
  const answers = {
    q1: "7",
    q2: "Sol",
    q3: "𝅘𝅥"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const total = Object.keys(answers).length;
  document.getElementById("result").innerText =
    `Você acertou ${score} de ${total} perguntas.`;
}
