<template>
  <section class="container">
    <table>
      <thead>
        <th>Tarefa</th>
        <th>Concluir</th>
        <th>Editar</th>
        <th>Excluir</th>
      </thead>

      <tbody v-if="$store.state.todosList.length > 0">
        <tr v-for="(task, index) in $store.state.todosList" :key="index">
          <td :ref="task.texto" :class="task.concluido ? 'conclude' : ''">
            {{ task.texto }}
          </td>
          <td>
            <img
              src="@/assets/check.svg"
              alt="concluir"
              :class="task.concluido ? 'conclude-icon' : ''"
              @click="concludeTask(task)"
            />
          </td>
          <td>
            <img
              src="@/assets/pencil.svg"
              alt="editar"
              @click="editTask(task)"
            />
          </td>
          <td>
            <img
              src="@/assets/remove.svg"
              alt="excluir"
              @click="deleteTask(task)"
            />
          </td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td class="nenhuma-tarefa" colspan="4">Nenhuma Tarefa</td>
        </tr>
      </tbody>
    </table>

    <div v-if="$store.state.modalEdit">
      <EditTodo />
    </div>
  </section>
</template>

<script>
import { storeLocalStorage } from "@/helpers.js";

export default {
  components: {
    EditTodo: () => import("@/components/EditTodo.vue"),
  },

  methods: {
    editTask(task) {
      this.$store.commit("SET_SELECTED_TODO", task.texto);
      this.$store.state.modalEdit = true;
    },

    concludeTask(task) {
      this.$store.commit("DELETE_TODO", this.getIndex(task));
      this.$store.commit("ADD_TODO", { texto: task.texto, concluido: true });
      storeLocalStorage(this.$store.state.todosList);
    },

    getIndex(task) {
      return this.$store.state.todosList.indexOf(task);
    },

    deleteTask(task) {
      console.log("deletado");
      const answer = confirm("Deseja realmente excluir a tarefa?");
      if (answer) {
        this.$store.commit("DELETE_TODO", this.getIndex(task));
        storeLocalStorage(this.$store.state.todosList);
      }
    },
  },

  created() {
    const taskExists = localStorage.getItem("tasks");
    taskExists ? (this.$store.state.todosList = JSON.parse(taskExists)) : "";
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;

  thead,
  tr {
    border-bottom: 1px solid #8092bd;
  }

  th,
  td {
    color: #333;
    padding: 1rem;
    text-align: center;
  }

  img {
    cursor: pointer;
    width: 30px;
  }

  .nenhuma-tarefa {
    text-align: center;
  }

  .conclude {
    text-decoration: line-through;
  }

  .conclude-icon {
    opacity: 0.3;
  }
}
</style>
