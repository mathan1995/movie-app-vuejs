import { createStore } from "vuex";
import movies from "./module/movies";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { movies },
});

/*  

import { createStore } from "vuex";

const SET_USER = "SET_USER";

export default createStore({
  state: { user: {} },
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      // Call API
      commit(SET_USER, user);
    },
  },
  modules: {},
  getters: {
    isUserAdmin: (state) => {
      return state.user.role === "admin";
    },
  },
});

WHAT THE HELL IS VUEX ??

1.Vuex Uses a single state tree -> which means it contains single object
contain all our object states

2.only way to change the state is by doing mutation

3.Mutations are always use to have be in asyncronous way


// MASTER MUTATIONS

-> payload mean the data coming from outer bonds

 [SET_USER](state, payload) {
      state.user = payload;
    },
*/
