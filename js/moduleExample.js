const quiz = {
  yourAns: [],
  score: 0,
  getAnswer(question, answer) {
    this.yourAns[question] = answer;
  },
  getScore() {
    let answerText = '';
  }
};

var answerText = 'Results:\n';
for (var i = 0; i < questions.length; ++i) {
  var num = i + 1;
  if (yourAns[i] != null) {
    answerText = answerText + '\n Question#' + num + '';
    if (yourAns[i] != questions[i].correctAnswer) {
      answerText = answerText + ': Wrong ';
    } else {
      answerText = answerText + ': Right ';
      ++score;
    }
  } else {
    answerText = answerText + '\n Question#' + num + ': No answer';
  }
}
answerText = answerText + '\nRight answers: ' + score + '\n';

alert(answerText);
yourAns = [];
score = 0;
clearForm('quiz');
