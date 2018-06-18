const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', formSubmitted);

function formSubmitted(e) {
  e.preventDefault();
  const keyword = input.value;
  console.log(keyword);
}