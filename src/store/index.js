import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: "",
    todosList: [],
    selectedTodo: "",
  },
  mutations: {
    SET_NEW_TODO(state, payload) {
      state.newTodo = payload;
    },

    ADD_NEW_TODO(state, payload) {
      state.todosList.unshift(payload);
    },

    SET_SELECTED_TODO(state, payload) {
      state.selectedTodo = payload;
    },
  },
  actions: {},
  modules: {},
});
