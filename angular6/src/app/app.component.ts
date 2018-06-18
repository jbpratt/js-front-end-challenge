import { Component } from "@angular/core";
import { MoviesService } from "./movies.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private movieService: MoviesService) {}
  title = "Angular Movie Search";
  keyword = "";
  results = [];
  loading = false;

  onSubmit() {
    this.results = [];
    this.loading = true;
    this.movieService.search(this.keyword).subscribe((result: any) => {
      this.results = result.results;
      this.loading = false;
    });
  }
}
