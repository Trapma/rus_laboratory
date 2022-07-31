<template>
  <nav>
    <ul class="nav">
      <li v-for="item in nav" :key="item.id">
        <router-link class="nav__link" :to="item.path">
          {{ item.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { id: 1, name: "О задании", path: "/" },
        { id: 2, name: "Пользователи", path: "/user" },
        { id: 3, name: "Посты", path: "/post" },
        { id: 4, name: "Фото", path: "/photo" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
%df-xc-yc {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav {
  @extend %df-xc-yc;
  list-style-type: none;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;

  &__link {
    @extend %df-xc-yc;
    cursor: pointer;
    width: 200px;
    height: 50px;
    color: white;
    border-radius: 10px 10px 0 0;
    text-decoration: none;

    &:hover {
      background: #e19100;
    }
  }
  .router-link-active {
    background-image: linear-gradient(180deg, #e19100 60%, #fff6b7 100%);
  }
}
</style>
