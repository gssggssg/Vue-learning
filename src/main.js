import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false; // 取消开发提示

new Vue({
  render: (h) => h(App),
}).$mount("#app");
