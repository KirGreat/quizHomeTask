var yourAns = [];
var res = 0;

function engine(question, answer) {
  yourAns[question] = answer;
}

function clearForm(name) {
  var f = document.forms[name];
  for (var i = 0; i < f.elements.length; ++i) {
    if (f.elements[i].checked) f.elements[i].checked = false;
  }
}

function score() {
  var answerText = 'Results:\n';
  for (var i = 0; i < questions.length; ++i) {
    var num = i + 1;
    if (yourAns[i] != null) {
      answerText = answerText + '\n Question#' + num + '';
      if (yourAns[i] != questions[i].correctAnswer) {
        answerText = answerText + ': Wrong ';
      } else {
        answerText = answerText + ': Right ';
        ++res;
      }
    } else {
      answerText = answerText + '\n Question#' + num + ': No answer';
    }
  }
  answerText = answerText + '\nRight answers: ' + res + '\n';

  alert(answerText);
  yourAns = [];
  res = 0;
  clearForm('quiz');
}
