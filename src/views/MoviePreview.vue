<template>
  <div id="movie-preview">
    <navbar />
    <div id="movie-container">
      <div id="movie-poster">
        <img :src="movie.poster" alt="movie-poster" />
      </div>
      <div id="movie-info">
        <div>
          <h1>{{ movie.name }}</h1>
          <h3>{{ movie.year }}</h3>
          <h3>{{ movie.genre }}</h3>
          <h3>
            <span
              id="movie-rating"
              :style="{ 'background-color': getRatingColor() }"
              class="span"
              >{{ movie.rating }}</span
            >
          </h3>
          <h3>Budget: {{ movie.budget }}</h3>
          <h3>BoxOffice: {{ movie.boxOffice }}</h3>
          <div>
            Actors:
            <span v-for="(actor, index) in movie.actors" :key="index">
              {{ actor.name }},
            </span>
          </div>
          <h3>
            <strong> Storyine: </strong>
            {{ movie.storyline }}
          </h3>
        </div>
        <div id="options">
          <button class="edit" @click="showModal = true">Edit</button>
          <button class="delete" @click="deleteMovie">Delete</button>
        </div>
      </div>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3 class="m-0">Create new movie</h3>
      </template>
      <template v-slot:body>
        <form @submit.prevent="updateMovie" ref="movieForm" id="movie-form">
          <p>Fill out the details bellow</p>
          <input required v-model="movie.name" type="text" placeholder="Name" />
          <input
            required
            v-model="movie.year"
            type="number"
            placeholder="Year"
          />
          <input
            required
            v-model="movie.rating"
            type="number"
            placeholder="Rating"
          />
          <input
            required
            v-model="movie.budget"
            type="text"
            placeholder="Budget"
          />
          <input
            required
            v-model="movie.poster"
            type="text"
            placeholder="Poster"
          />
          <input
            required
            v-model="movie.boxOffice"
            type="text"
            placeholder="Box Office"
          />

          <hr />

          <div>
            <div id="actor-input">
              <p class="m-0">Actors</p>
              <span @click="addActor" class="add-actor">+</span>
            </div>

            <input
              required
              v-for="(actor, index) in movie.actors"
              :key="index"
              v-model="movie.actors[index].name"
              type="text"
              placeholder="Actor"
            />
          </div>

          <hr />

          <textarea
            required
            v-model="movie.storyline"
            placeholder="Storyline"
            rows="6"
          />
        </form>
      </template>
      <template v-slot:footer>
        <button id="update-movie" @click="$refs.movieForm.requestSubmit()">
          Save
        </button>
      </template>
    </modal>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ratingMixin from "../mixins/getRatingColor";
import Modal from "../components/Modal.vue";
import moviesApi from "../services/moviesApi";
export default {
  mixins: [ratingMixin],
  components: {
    Navbar,
    Modal,
  },
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      showModal: false,
      movie: {},
    };
  },
  methods: {
    updateMovie() {
      this.$store.dispatch("updateMovie", this.movie);
      this.showModal = false;
    },
    deleteMovie() {
      this.$store
        .dispatch("deleteMovie", this.id)
        .then((res) => this.$router.push("/"));
    },
  },

  created() {
    // call from store
    const movie = this.$store.getters.getMovieById(parseInt(this.id));
    if (movie) {
      this.movie = movie;
    } else {
      moviesApi
        .getMovieById(this.id)
        .then((res) => (this.movie = res))
        .catch((error) => console.log(error));
    }
  },
};
</script>

<style lang='scss' scoped>
#movie-preview {
  display: flex;
  overflow: auto;

  #movie-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-top: 90px;
    padding: 0 1rem;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    #movie-poster {
      flex-grow: 1;
      min-width: 400px;

      img {
        max-width: 300px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
          0 10px 10px rgba(0, 0, 0, 0.473);
        margin-bottom: 7px;
        border-radius: 15px;
      }
    }

    #movie-info {
      display: flex;
      flex-grow: 2;
      text-align: left;
      flex-direction: column;
      justify-content: space-evenly;

      h1 {
        color: white;
        margin-bottom: 2rem;
      }

      h3 {
        color: rgb(143, 143, 143);
        @media only screen and (max-width: 600px) {
          widows: 50%;
        }
        #movie-rating {
          display: flex;
          justify-content: center;
          border-radius: 50px;
          font-size: 20px;
          width: 53px;
          color: white;
        }

        span {
          margin-right: 5px;
        }
      }

      #options {
        max-width: 180px;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        .edit {
          padding: 10px;
          width: 80px;
          background-color: #5eb85e;
          border: none;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 50px;
          outline: none;
          color: #fff;
          cursor: pointer;
        }

        .delete {
          padding: 10px;
          width: 80px;
          background-color: #e10505;
          border: none;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 50px;
          outline: none;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  #movie-form {
    display: flex;
    flex-direction: column;
    text-align: left;

    & > div {
      display: flex;
      flex-direction: column;

      #actor-input {
        display: flex;
        justify-content: space-between;
      }
    }

    .add-actor {
      background-color: green;
      text-align: center;
      color: white;
      margin-left: 5px;
      height: 100%;
      padding: 2px 10px;
      font-size: 20px;
      padding: 1re;
      align-self: center;
      cursor: pointer;
    }
  }

  #update-movie {
    background-color: #5eb85e;
    border: none;
    padding: 5px;
    width: 70px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
  }
}
</style>