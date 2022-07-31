import axios from "axios";
import config from "@/config";
const API_HOST = config.api_host;

export const posts = {
  namespaced: true,
  state: () => ({
    posts: [],
    postId: {},
    comments: [],
    page: 0,
    limit: 10,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getPosts({ commit, state }) {
      try {
        commit("IS_LOADING", true);
        const response = await axios.get(API_HOST + "posts", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit("SET_POSTS", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("IS_LOADING", false);
      }
    },
    async getPostId({ commit }, id) {
      try {
        commit("IS_LOADING", true);
        const response = await axios.get(API_HOST + "posts/" + id);
        commit("ADD_POST_ID", response.data);
      } catch (e) {
        console.log("Ошибка", e);
      } finally {
        commit("IS_LOADING", false);
      }
    },
    async getPostIdComments({ commit }, id) {
      try {
        commit("IS_LOADING", true);
        const response = await axios.get(
          API_HOST + "posts/" + id + "/comments"
        );
        commit("ADD_COMMENTS", response.data);
      } catch (e) {
        console.log("Ошибка", e);
      } finally {
        commit("IS_LOADING", false);
      }
    },
    async loadPost({ commit, state }) {
      try {
        commit("IS_LOADING", true);
        commit("NEXT_PAGE");
        const response = await axios.get(API_HOST + "posts", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit("ADD_POSTS", response.data);
      } catch (e) {
        console.log("Ошибка", e);
      } finally {
        commit("IS_LOADING", false);
      }
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    NEXT_PAGE(state) {
      state.page = state.page + 1;
    },
    ADD_POSTS(state, newPosts) {
      state.posts = [...state.posts, ...newPosts];
    },
    ADD_POST_ID(state, newPost) {
      state.postId = newPost;
    },
    ADD_COMMENTS(state, comments) {
      state.comments = comments;
    },
  },
};
