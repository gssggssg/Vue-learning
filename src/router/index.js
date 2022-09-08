import VueRouter from "vue-router";
import MyHome from '../pages/MyHome'
import LifeCycle from '../pages/LifeCycle'

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
    {
      path: "/lifecycle",
      component: LifeCycle,
    },
  ],
});
