import React, { Component } from "react";
import API from "./API";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React.js Movie Search",
      keyword: "",
      loading: false,
      results: []
    };

    this.keywordChanged = this.keywordChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  keywordChanged(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    API.search(this.state.keyword).then(results => {
      this.setState({
        results,
        loading: false
      });
    });
  }

  render() {
    const { title, keyword, loading, results } = this.state;

    return (
      <div>
        <h1> {title} </h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="keyword">Keyword</label>
          <input
            value={keyword}
            className="u-full-width"
            type="text"
            id="keyword"
            name="keyword"
            onChange={this.keywordChanged}
          />
          <button type="submit">search</button>
        </form>
        {loading ? (
          <img src="https://i.imgur.com/LVHmLnb.gif" alt="Loading..." />
        ) : (
          ""
        )}
        <section className="results">
          {results.map(result => {
            return (
              <img
                key={result.id}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${
                  result.poster_path
                }`}
                alt={result.title}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
