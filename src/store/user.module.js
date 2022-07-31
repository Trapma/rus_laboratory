import axios from "axios";
import config from "@/config";
const API_HOST = config.api_host;

export const users = {
  namespaced: true,
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {
    async getUsers({ commit }) {
      try {
        const users = await axios.get(API_HOST + "users");
        commit("SET_USERS", users.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
};
