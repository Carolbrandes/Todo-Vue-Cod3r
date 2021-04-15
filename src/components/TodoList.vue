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
          <td :ref="task">{{ task }}</td>
          <td>
            <img
              src="@/assets/check.svg"
              alt="concluir"
              class="task-conclude"
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
          <td><img src="@/assets/remove.svg" alt="excluir" /></td>
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
export default {
  components: {
    EditTodo: () => import("@/components/EditTodo.vue"),
  },

  methods: {
    editTask(task) {
      this.$store.commit("SET_SELECTED_TODO", task);
      this.$store.state.modalEdit = true;
    },

    concludeTask(task) {
      const answer = confirm("Deseja realmente concluir essa tarefa?");
      console.log(this.$refs[task].forEach((td) => console.log(td)));

      answer &&
        this.$refs[task].forEach((td) => {
          td.classList.add("conclude");
          td.nextElementSibling.querySelector(".task-conclude").style.opacity =
            "0.3";
        });
    },
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
}
</style>
