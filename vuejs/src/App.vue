<template>
  <div id="app">
    <h1>{{title}}</h1>
    <form @submit.prevent="formSubmitted()">
      <label for="keyword">Keyword</label>
      <input v-model="keyword" class="u-full-width" type="text" id="keyword" name="keyword">
      <button type="submit">search</button>
  </form>
  <img v-if="loading" src="./loader.gif" alt="" srcset="">
  <section class="results">
    <img :key="result.id" v-for="result in results" :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + result.poster_path" alt="">
  </section>
  </div>
</template>

<script>
import API from "./API";

export default {
  name: "app",
  data() {
    return {
      title: "Vue Movie Search",
      keyword: "",
      results: [],
      loading: false
    };
  },
  methods: {
    formSubmitted() {
      this.results = [];
      this.loading = true;
      API.search(this.keyword).then(results => {
        this.results = results;
        this.loading = false;
      });
    }
  }
};
</script>

<style>
body {
  width: 80%;
  margin: 2em auto 0 auto;
}

.results {
  column-count: 3;
}

img {
  width: 100%;
}
</style>
