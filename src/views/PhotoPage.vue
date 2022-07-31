<template>
  <article>
    <h2 class="title">Фотографии</h2>
    <ul class="cards">
      <c-page-loader v-if="isLoading" />
      <li class="card" v-for="photo in photos" :key="photo.id">
        <div class="card__icon">
          <img height="600" width="600" :src="photo.url" alt="" />
        </div>

        <p class="card__title">{{ photo.title }}</p>
      </li>
      <div v-intersection="loadPhoto" class="observer"></div>
    </ul>
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CPageLoader from "@/components/Ui/loader/CPageloader.vue";
export default {
  components: { CPageLoader },

  mounted() {
    this.getPhotos();
  },
  computed: {
    ...mapState({
      photos: (state) => state.photos.photos,
      isLoading: (state) => state.photos.isLoading,
    }),
  },
  watch: {
    isLoading(val) {
      console.log("test", val);
    },
  },
  methods: {
    ...mapActions("photos", ["getPhotos", "loadPhoto"]),
  },
};
</script>

<style lang="scss" scoped>
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
.observer {
  height: 30px;
}

.cards {
  display: flex;
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
  margin: 20px;
  padding: 20px;
  width: 650px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 30px 600px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgb(0 0 0 / 25%);
  transition: all 0.2s;

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
