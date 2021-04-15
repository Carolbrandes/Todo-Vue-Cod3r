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

    SET_TODO_LIST(state, payload) {
      state.todosList = payload;
    },

    ADD_NEW_TODO(state, payload) {
      state.todosList.unshift(payload);
    },

    EDIT_TODO(state, payload) {
      state.todosList[payload.index] = payload.value;
    },

    DELETE_TODO(state, payload) {
      state.todosList.filter((todo) => todo !== payload);
    },

    SET_SELECTED_TODO(state, payload) {
      state.selectedTodo = payload;
    },
  },
  actions: {
    addTodo(context, payload) {
      context.state.todosList.unshift(payload);
      context.commit("SET_TODO_LIST", context.state.todosList);
    },

    editTodo(context, payload) {
      context.state.todosList.splice(payload.index, 1);
      context.state.todosList.unshift(payload.value);
      context.commit("SET_TODO_LIST", context.state.todosList);
    },

    deleteTodo(context, payload) {
      const newList = context.state.todosList.filter(
        (todo) => todo !== payload
      );
      context.commit("SET_TODO_LIST", newList);
    },
  },
  modules: {},
});
