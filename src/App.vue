<template>
  <div>
    <Header />

    <div class="container">
      <AddTodo />

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
