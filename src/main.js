import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/index.css";
import ElementUI from "element-ui";
import moment from "moment";
import tab from "@/utils/tab";

Vue.use(ElementUI);
moment.locale("zh-cn");
Vue.prototype.$moment = moment;
Vue.prototype.$tab = tab;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
