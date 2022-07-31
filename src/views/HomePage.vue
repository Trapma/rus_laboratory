<template>
  <article class="wrapper">
    <h3 class="title">Описание</h3>
    <p class="info">
      Сделать приложение с 3 страницами, визуализирующие данные с
      <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a> .
      Можно выбрать 3 разных любых эндпоинта апи во вкладке resources. При
      выполнении задания необходимо использовать vuex/pinia и vue-router.
      Стилизовать приложение не обязательно.
    </p>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
}
.info {
  margin-top: 30px;
  padding: 0 30px;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
</style>
