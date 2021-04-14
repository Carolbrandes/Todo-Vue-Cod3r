<template>
  <div class="modal-bg">
    <div class="modal">
      <img class="modal-close" src="@/assets/close.svg" alt="fechar" />
      <AddTodo :todo="todo" :label="label">
        <button slot="button" type="button" @click="editTodo">Alterar</button>
      </AddTodo>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo", "label"],
  components: {
    AddTodo: () => import("@/components/AddTodo.vue")
  },
  methods: {
    editTodo() {}
  }
};
</script>

<style scoped lang="scss">
.modal {
  background-color: #fff;
  border-radius: 10px;
  width: 800px;
  height: 400px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &-bg {
    background-color: rgba(51, 51, 51, 0.425);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-close {
    width: 30px;
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
