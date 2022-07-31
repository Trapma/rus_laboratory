<template>
  <header class="header">
    <header-title :text="title" />
    <nav-bar />
  </header>
  <main class="main">
    <article>
      <router-view />
    </article>
  </main>
</template>

<script>
import config from "@/config";
import NavBar from "@/components/NavBar.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
export default {
  components: {
    NavBar,
    HeaderTitle,
  },
  computed: {
    title() {
      return config.title.home;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  background-image: linear-gradient(135deg, #77befe 10%, #013f88 100%);
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
}
.app {
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}
ol {
  list-style-type: decimal;
  list-style-position: inside;
}
ul ul,
ol ul {
  list-style-type: circle;
  list-style-position: inside;
  margin-left: 15px;
}
ol ol,
ul ol {
  list-style-type: lower-latin;
  list-style-position: inside;
  margin-left: 15px;
}
.main {
  padding-top: 60px;
  min-height: 100vh;
  background: #fff7b748;
}
</style>
