<template>
  <div class="modal">
    <div class="modal-wrapper">
      <input
        class="input"
        type="text"
        v-model="taskEdit"
        :placeholder="$store.state.selectedTodo"
      />

      <button class="button" @click="edit">Atualizar</button>
    </div>
  </div>
</template>

<script>
import { storeLocalStorage } from "@/helpers.js";

export default {
  data() {
    return {
      oldValue: this.$store.state.selectedTodo,
    };
  },
  computed: {
    taskEdit: {
      get() {
        return this.$store.state.selectedTodo;
      },

      set(value) {
        this.$store.commit("SET_SELECTED_TODO", value);
      },
    },
  },

  methods: {
    edit() {
      console.log("editar");
      const index = this.$store.state.todosList.indexOf(
        this.$store.state.todosList.find((t) => t.texto == this.oldValue)
      );
      const status = this.$store.state.todosList.find(
        (t) => t.texto == this.oldValue
      ).concluido;
      console.log(index);
      console.log(status);
      this.$store.commit("DELETE_TODO", index);
      this.$store.commit("ADD_TODO", {
        texto: this.$store.state.selectedTodo,
        concluido: status,
      });
      this.$store.state.modalEdit = false;

      storeLocalStorage(this.$store.state.todosList);
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(48, 47, 47, 0.555);
  @extend %center;

  &-wrapper {
    background-color: #fff;
    padding: 4rem;
    border-radius: 10px;
    @extend %center;
  }
}
</style>
