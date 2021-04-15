<template>
  <section class="add-todo container">
    <input
      class="input"
      type="text"
      placeholder="Nova tarefa"
      v-model="newTask"
    />

    <button class="button" @click="addTask">Adicionar</button>
  </section>
</template>

<script>
import { storeLocalStorage } from "@/helpers.js";

export default {
  computed: {
    newTask: {
      get() {
        return this.$store.state.newTodo;
      },

      set(value) {
        this.$store.commit("SET_NEW_TODO", value);
      },
    },
  },

  methods: {
    addTask() {
      this.$store.commit("ADD_TODO", {
        texto: this.$store.state.newTodo,
        concluido: false,
      });
      this.$store.state.newTodo = "";
      storeLocalStorage(this.$store.state.todosList);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-todo {
  padding: 3rem 0;
  display: flex;
  justify-content: center;
}
</style>
