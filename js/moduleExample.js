const quiz = {
  yourAns: [],
  score: 0,
  selectors: {
    scoreBtn: 'check-res',
    clearBtn: 'clear-res',
    radioBtns: 'radio-btn'
  },
  getAnswer(question, answer) {
    this.yourAns[question] = answer;
  },
  getScore() {
    let answerText = 'Results: ';
    const that = this;
    questions.forEach(function(quest, i) {
      const num = i + 1;
      if (that.yourAns[i] != null) {
        answerText = answerText + '\n Question#' + num + '';
        if (that.yourAns[i] != questions[i].correctAnswer) {
          answerText = answerText + ': Wrong ';
        } else {
          answerText = answerText + ': Right ';
          that.score += 1;
        }
      } else {
        answerText = answerText + '\n Question#' + num + ': No answer';
      }
    });
    answerText = answerText + '\nRight answers: ' + this.score + '\n';
    alert(answerText);
  },
  clear() {
    this.yourAns = [];
    this.score = 0;
    document.getElementById('quiz').reset();
  },
  addEventListeners() {
    const that = this;
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains(that.selectors.scoreBtn)) {
        that.getScore();
      }
      if (e.target.classList.contains(that.selectors.clearBtn)) {
        that.clear();
      }
      if (e.target.classList.contains(that.selectors.radioBtns)) {
        that.getAnswer(e.target.dataset.question, e.target.value);
      }
    });
  }
};

quiz.addEventListeners();
