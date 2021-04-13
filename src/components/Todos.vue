<template>
  <div>
    <table>
      <thead>
        <th>Tarefa</th>
        <th>Concluir</th>
        <th>Editar</th>
        <th>Remover</th>
      </thead>

      <tbody v-if="$store.state.todosList.length > 0">
        <tr v-for="(todo, index) in $store.state.todosList" :key="index">
          <td>{{ todo }}</td>
          <td>
            <span>
              <img src="@/assets/check.svg" alt="Concluir" />
            </span>
          </td>

          <td>
            <span>
              <img src="@/assets/pencil.svg" alt="editar" />
            </span>
          </td>

          <td>
            <span>
              <img src="@/assets/remove.svg" alt="editar" />
            </span>
          </td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td colspan="4">Nenhum Todo Cadastrado</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
table {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;

  td,
  th {
    text-align: center;
    padding: 1rem;
  }

  tr,
  thead {
    border-bottom: 1px solid #055ee4;
  }

  tbody {
    p {
      text-align: center;
      padding: 1rem 0;
    }
  }
}

img {
  width: 30px;
  cursor: pointer;
}
</style>
