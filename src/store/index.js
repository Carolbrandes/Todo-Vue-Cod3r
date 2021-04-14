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

    ADD_NEW_TODO(state, payload) {
      state.todosList.unshift(payload);
    },

    EDIT_TODO(state, payload) {
      state.todosList[payload.index] = payload.value;
    },

    SET_SELECTED_TODO(state, payload) {
      state.selectedTodo = payload;
    },
  },
  actions: {},
  modules: {},
});
