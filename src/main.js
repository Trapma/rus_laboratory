import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directives from "@/directives";
//? подключение scss
import "@/scss/main.scss";
//? подключение font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//? подключение иконок
import { faUser } from "@fortawesome/free-solid-svg-icons";

//? добавление иконок в библиотеку
library.add(faUser);

const app = createApp(App);

//? подключение директив
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router).mount("#app");
