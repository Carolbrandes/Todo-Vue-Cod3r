<template>
  <div class="add-todo">
    <input type="text" v-model="todo" placeholder="label" />
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  props: ["todo", "label"],
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
