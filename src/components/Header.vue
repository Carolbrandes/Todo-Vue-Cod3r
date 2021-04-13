<template>
  <header>
    <div class="container">
      <h1>TodoApp</h1>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: #055ee4;
  padding: 1rem 0;

  h1 {
    color: #fff;
  }
}
</style>
