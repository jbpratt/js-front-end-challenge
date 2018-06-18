const form = document.querySelector("form");
const input = document.querySelector("input");
const resultSection = document.querySelector(".results");
const key = "d9d1b9fa937ccba01b56d208be6f3753"; // \\
const loadingImage = document.querySelector("#loadingImage");

form.addEventListener("submit", formSubmitted);

loadingImage.style.display = "none";

function formSubmitted(e) {
  e.preventDefault();
  const keyword = input.value;
  resultSection.innerHTML = "";

  search(keyword).then(displayResults);
}

function search(keyword) {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${keyword}`;
  loadingImage.style.display = "";
  // returns promise
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res.results;
    });
}

function displayResults(results) {
  results.forEach(result => {
    const resultElement = document.createElement("img");r
    resultElement.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${
      result.poster_path
    }`;
    resultSection.appendChild(resultElement);
  });
  loadingImage.style.display = "none";
}