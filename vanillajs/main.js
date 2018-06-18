const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', formSubmitted);
const key = 'd9d1b9fa937ccba01b56d208be6f3753'; // \\ 

function formSubmitted(e) {
  e.preventDefault();
  const keyword = input.value;
  console.log(keyword);
  search(keyword);
}

function search(keyword) {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${keyword}`

  fetch(url).then(res => res.json()).then(res => console.log(res));

  console.log(url);
}