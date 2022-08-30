import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false; // 取消开发提示

/**
 * 第一种方式：使用 VueComponents 实例原型
 */
// 创建一个新的
// const newVC = Vue.extend({});
// const Bus = new newVC();

/**
 * 第二种方式：直接使用 Vue 的实例原型
 */
// const Bus = new Vue()

// 挂载方式，直接在最 vue 创建之前放安装
// Vue.prototype.$bus = Bus;

// 全局事件总线

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
