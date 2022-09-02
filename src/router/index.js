import VueRouter from "vue-router";
import MyHome from '../pages/MyHome'

// 初始化 Vue router 路由
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: MyHome,
    },
    {
      path: "/home",
      component: MyHome,
    },
  ],
});
