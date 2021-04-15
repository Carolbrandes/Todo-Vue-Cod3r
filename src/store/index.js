import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodo: "",
    todosList: [],
    selectedTodo: "",
    modalEdit: false,
  },
  mutations: {
    SET_NEW_TODO(state, payload) {
      state.newTodo = payload;
    },

    ADD_TODO(state, payload) {
      state.todosList.unshift(payload);
    },

    DELETE_TODO(state, payload) {
      state.todosList.splice(payload, 1);
    },

    SET_SELECTED_TODO(state, payload) {
      state.selectedTodo = payload;
    },
  },
  actions: {},
  getters: {
    listFormatter: (state) => {
      return state.todosList.filter((todo) => todo !== null);
    },
  },
});
