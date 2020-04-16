<template>
  <div id="app">
    
    <h1>Hola</h1>

    <test msg= "hola todos!!!!!" />

    <!-- usamos el archivo user -->
    <user/>

  </div>
</template>

<script>

//importamos los archivos para que los muestre
import test from "./components/test.vue";
import user from "./components/user";

export default {
  
  name: 'App',
  components: { //le indicamos que use los archivos
    test,
    user
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
