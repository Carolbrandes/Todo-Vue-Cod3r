<template>
  <div class="add-todo">
    <input type="text" v-model="todo" placeholder="Adicionar Tarefa" />
    <button type="button" @click="addTodo">Adicionar</button>
  </div>
</template>

<script>
export default {
  methods: {
    addTodo() {
      if (this.todo) {
        this.$store.commit("ADD_NEW_TODO", this.todo);
        this.todo = "";
      }
    },
  },
  computed: {
    todo: {
      get() {
        return this.$store.state.newTodo;
      },

      set(value) {
        this.$store.commit("SET_NEW_TODO", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.add-todo {
  padding: 3rem 0;
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  input {
    border: 1px solid #055ee4;
    border-radius: 10px;
    padding-left: 15px;
    width: 400px;
    height: 50px;
    outline: none;
    margin-right: 1rem;

    &::placeholder {
      color: #055ee4;
    }
  }

  button {
    outline: none;
    border-radius: 10px;
    height: 50px;
    border: none;
    background-color: #db6f27;
    color: #fff;
    padding: 1rem;
  }
}
</style>
