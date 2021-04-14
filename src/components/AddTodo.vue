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
      this.$store.commit("ADD_NEW_TODO", this.$store.state.newTodo);
      this.$store.state.newTodo = "";
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
