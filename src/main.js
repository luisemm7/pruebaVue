// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//linea para poder usar los recursos (traer datos de una db)
import VueResource from 'vue-resource'
Vue.use(VueResource); //para poder usar lo de traer datos externos


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import test from './components/test';
import user from './components/user';

const router = new VueRouter({
  mode: 'history', //que en la url pongamos /user o /test y que nos mande a esa app
  base: __dirname, //constante de nodejs, le dice que todos los componentes estan aqui
  routes: [
    {
      path: '/', //cuando la app inicie mostrara: user
      component: user
    },
    {
      path: '/test',
      component: test
    }
  ]
})


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  //el: '#app', //quitamos este porque usaremos otro (se agrega abajo)
  router, //usamos el enrrutador
  components: { App },
  template: '<App/>'
}).$mount('#app') //usamos app que es el id del template de App.vue en el div
