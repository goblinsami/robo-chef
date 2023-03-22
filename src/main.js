import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import html2canvas from "html2canvas";
createApp(App).use(store).use(router).mount("#app");
createApp(App).use(html2canvas);
