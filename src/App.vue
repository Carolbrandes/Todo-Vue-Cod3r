<template>
  <div>
    <Header />
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/Header.vue"),
    AddTodo: () => import("@/components/AddTodo.vue"),
    TodoList: () => import("@/components/TodoList.vue"),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1180px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.input {
  border: 1px solid #a9bbe5;
  outline: none;
  border-radius: 30px;
  width: 400px;
  height: 50px;
  color: #acb6e5;
  padding-left: 20px;

  &::placeholder {
    color: #acb6e5;
  }
}

.button {
  background-color: #8092bd;
  color: #fff;
  border: none;
  outline: none;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  margin-left: 1rem;
}
</style>
