$(document).ready(function () {
  var state = {};
  var template = $('#template').html();
  $('#clicker').on('click', handleClick);
  $('#wordsInput').on('change', handleChange);

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
    var rendered = Mustache.render(template, { words: state.words });
    document.getElementById('content').innerHTML = rendered;
  }

  init();
});
