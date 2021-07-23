<template>
  <div v-if="loadingStatus">
    <spinner />
  </div>
  <div v-else>
    <div id="movie-container">
      <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
import Spinner from "./Spinner.vue";
export default {
  components: {
    Movie,
    Spinner,
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
    loadingStatus() {
      return this.$store.getters.getLoadingStatus;
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