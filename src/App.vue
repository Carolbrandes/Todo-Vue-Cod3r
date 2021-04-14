<template>
  <div>
    <Header />

    <div class="container">
      <AddTodo :todo="todo" label="Adicionar Tarefa">
        <button slot="button" type="button" @click="addTodo">Adicionar</button>
      </AddTodo>

      <Todos />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {
    Header: () => import("@/components/Header.vue"),
    AddTodo: () => import("@/components/AddTodo.vue"),
    Todos: () => import("@/components/Todos.vue"),
  },

  data: () => ({
    //
  }),

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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 1040px;
  margin-left: auto;
  margin-right: auto;
}
</style>
