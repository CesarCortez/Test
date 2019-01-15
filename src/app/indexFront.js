import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import App from './components/App.vue';
import Operadores from './components/Operadores.vue';
import Tasks from './components/Tasks.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

//configurar router
const router = new VueRouter({
    mode:'history',
    base: __dirname,
    routes: [
      {
        path:'/Tasks',
        component: Tasks
      },
      {
        path: '/Operadores',
        component: Operadores
      }
    ]
  })

Vue.use(BootstrapVue);
new Vue({
    router,
    render: h=> h(App)
}).$mount('#app');