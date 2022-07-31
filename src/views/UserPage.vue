<template>
  <article>
    <h2 class="title">Список пользователей</h2>
    <ul class="cards">
      <li class="card" v-for="user in users" :key="user.id">
        <div class="card__icon">
          <font-awesome-icon icon="fa-user" /> {{ user.name }} <br />
        </div>
        <span class="card__exit"> {{ user.username }}</span>

        <ul class="card__title">
          <li>phone: {{ user.phone }}</li>
          <li>email: {{ user.email }}</li>
          <li>
            <a class="card__link" href="#">website: {{ user.website }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapState({
      users: (state) => state.users.users,
    }),
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
  },
};
</script>

<style lang="scss" scoped>
$gradient: radial-gradient(#1fe4f5, #3fbafe), radial-gradient(#fbc1cc, #fa99b2),
  radial-gradient(#76b2fe, #b69efe), radial-gradient(#60efbc, #58d5c9),
  radial-gradient(#f588d8, #c0a3e5);

%default {
  position: relative;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
}
.main {
  padding-top: 30px;
}
.title {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.text-name {
  font-size: 15px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  font-family: "Courier New", Courier, monospace;
  /* RESPONSIVE */

  @media (max-width: 1600px) {
    justify-content: center;
  }
}

.card {
  margin: 20px;
  padding: 20px;
  width: 500px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 30px 80px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  @for $i from 1 through 5 {
    &:nth-child(#{0n + $i}) {
      background: nth($gradient, $i);
    }
  }
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  &__link {
    @extend %default;
    &::after {
      position: absolute;
      top: 25px;
      left: 0;
      content: "";
      width: 0%;
      height: 3px;
      background-color: rgba(255, 255, 255, 0.6);
      transition: all 0.5s;
    }
    &:hover::after {
      width: 100%;
    }
  }

  &__icon {
    @extend %default;
    grid-row: 2/3;
    font-size: 28px;
  }
  &__exit {
    grid-row: 1/2;
    justify-self: end;
    font-size: 24px;
  }

  &__title {
    font-size: 24px;
    list-style: none;
    grid-row: 3/4;
    font-weight: 400;
  }

  &__apply {
    grid-row: 4/5;
    align-self: center;
  }
}
</style>
