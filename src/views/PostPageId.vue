<template>
  <article>
    <section class="row wrapper">
      <h2 class="title">Пост №{{ post.id }}</h2>
      <div class="row">
        <div class="post">
          <h3 class="post__title">{{ post.title }}</h3>
          <p class="post__body">{{ post.body }}</p>
        </div>
      </div>
    </section>
    <hr />
    <h3 class="title">Комментарии к посту</h3>

    <ul class="cards">
      <c-page-loader v-if="isLoading" />
      <li class="card" v-for="comment in comments" :key="comment.id">
        <div class="card__title">{{ comment.name }}</div>
        <p class="card__text">{{ comment.body }}</p>
        <span class="card__email">{{ comment.email }}</span>
        <hr class="card__apply" />
      </li>
    </ul>
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CPageLoader from "@/components/Ui/loader/CPageloader.vue";
export default {
  components: { CPageLoader },
  mounted() {
    this.getPostId(this.$route.params.id);
    this.getPostIdComments(this.$route.params.id);
  },
  computed: {
    ...mapState({
      post: (state) => state.posts.postId,
      comments: (state) => state.posts.comments,
      isLoading: (state) => state.posts.isLoading,
    }),
  },
  methods: {
    ...mapActions("posts", ["getPostId", "getPostIdComments"]),
  },
};
</script>

<style lang="scss" scoped>
/*$gradient: radial-gradient(#1fe4f5, #3fbafe), radial-gradient(#fbc1cc, #fa99b2),
  radial-gradient(#76b2fe, #b69efe), radial-gradient(#60efbc, #58d5c9),
  radial-gradient(#f588d8, #c0a3e5);*/

%default {
  position: relative;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper {
  margin-bottom: 20px;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow";
  /* RESPONSIVE */
  @media (max-width: 1600px) {
    justify-content: center;
  }
}

.title {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
}
.post {
  padding: 0 20px;
  width: 500px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 30px 80px 1fr 50px;
  border-radius: 10px;
  transition: all 0.2s;
  background: radial-gradient(#1fe4f5, #3fbafe);
  &__title {
    grid-row: 2/3;
    font-size: 18px;
    font-weight: 700;
  }
  &__body {
    font-size: 16px;
    list-style: none;
    grid-row: 3/4;
    font-weight: 400;
  }
}
.body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.cards {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow";
  /* RESPONSIVE */
  @media (max-width: 1600px) {
    justify-content: center;
  }
}

.card {
  padding: 0 80px;
  width: 100%;
  display: grid;
  grid-template-rows: 10px 1fr 1fr 25px;
  border-radius: 10px;
  transition: all 0.2s;

  &__title {
    @extend %default;
    grid-row: 2/3;
    font-size: 18px;
    font-weight: 600;
  }

  &__text {
    font-size: 16px;
    list-style: none;
    grid-row: 3/4;
    font-weight: 400;
  }

  &__email {
    grid-row: 4/5;
    align-self: center;
    display: flex;
    justify-content: flex-end;
  }
  &__apply {
    grid-row: 5/6;
    align-self: center;
  }
}
</style>
