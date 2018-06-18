const key = "d9d1b9fa937ccba01b56d208be6f3753"; // \\

export default {
  search(keyword) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${keyword}`;
    // returns promise
    // return fetch(url)
    //   .then(res => res.json())
    //   .then(res => ({
    //     return res.results;
    //   }));
    return fetch(url).then(res => res.json()).then(res => res.results);
  }
};