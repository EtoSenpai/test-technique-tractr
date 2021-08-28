import Vue from "vue";
import Router from "vue-router";
import home from "./vue/home"
import add from "./vue/add"
import detail from "./vue/detail"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home 
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: detail 
    },
    {
        path: "/add",
        name: "add",
        component: add 
    }
  ]
});