import { createStore } from "vuex";
import { users } from "./user.module";
import { posts } from "./post.module";
import { photos } from "./photo.module";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    posts,
    photos,
  },
});
