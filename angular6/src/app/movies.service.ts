import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  key = "d9d1b9fa937ccba01b56d208be6f3753"; // \\

  API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.key}`;
  search(keyword) {
    const url = `${this.API_URL}&query=${keyword}`;
    return this.http.get(url);
  }
}
