
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul class ="navbar-nav mr-auto">
        <li class="btn btn-primary border-dark">
          <router-link class=" list-group-item-action" to="/">
            <h3>Menú Principal</h3>
          </router-link>
        </li>
        <li class="btn btn-primary border-dark">
          <router-link class=" list-group-item-action" to="/Tasks">
            <h3>Tasks</h3>
          </router-link>
        </li>
        <li class="btn btn-primary border-dark">
          <router-link class=" list-group-item-action" to="/Operadores">
            <h3>Operadores</h3>
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Operadores from "./Operadores.vue";
import Tasks from "./Tasks.vue";

export default {
    name: 'app',
    components:{
        Operadores,
        Tasks,
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
