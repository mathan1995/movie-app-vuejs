<template>
  <div id="movie-container">
    <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import Movie from "./Movie.vue";
export default {
  components: {
    Movie,
  },
  data() {
    return {
      // movies: [],
    };
  },
  computed: {
    // Its like useEffect in react
    movies() {
      return this.$store.getters.getMovies;
    },
  },
  created() {
    // one of the lifecycle events of our components
    this.$store.dispatch("fetchMovies");
  },
};
</script>

<style lang='scss' scoped>
#movie-container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  justify-content: center;
}
</style>