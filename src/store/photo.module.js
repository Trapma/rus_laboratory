import axios from "axios";
import config from "@/config";
const API_HOST = config.api_host;

export const photos = {
  namespaced: true,
  state: () => ({
    photos: [],
    page: 0,
    limit: 10,
    // totalPage: 0,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getPhotos({ commit, state }) {
      try {
        commit("IS_LOADING", true);
        const response = await axios.get(API_HOST + "photos", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        // commit("SET_TOTAL_PAGE", response.headers["x-total-count"]);
        commit("SET_PHOTOS", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("IS_LOADING", false);
      }
    },
    async loadPhoto({ commit, state }) {
      try {
        commit("IS_LOADING", true);
        commit("NEXT_PAGE");
        const response = await axios.get(API_HOST + "photos", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        // commit("SET_TOTAL_PAGE", response.headers["x-total-count"]);
        commit("ADD_PHOTO", response.data);
      } catch (e) {
        console.log("Ошибка", e);
      } finally {
        commit("IS_LOADING", false);
      }
    },
  },
  mutations: {
    SET_PHOTOS(state, photos) {
      state.photos = photos;
    },
    IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    NEXT_PAGE(state) {
      state.page = state.page + 1;
    },
    ADD_PHOTO(state, newPhotos) {
      state.photos = [...state.photos, ...newPhotos];
    },
    // SET_TOTAL_PAGE(state, totalCount) {
    //   state.totalPage = Math.ceil(totalCount / state.limit);
    // },
  },
};
