var state = {};

var button = document.getElementById('clicker');
button.addEventListener('click', handleClick);
var input = document.getElementById('wordsInput');
input.addEventListener('change', handleChange);

function handleChange(e) {
  console.log('hi');
  state.words = e.target.value;
}
function handleClick(e) {
  state.words = state.words.split('').reverse().join('');
  render();
}

function init() {
  state.words = 'nothing to see here';
  render();
}

function render() {
  document.getElementById('words').textContent = state.words;
}

init();
