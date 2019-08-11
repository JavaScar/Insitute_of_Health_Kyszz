<template>
  <div id="app">
    <!-- <MyHeader></MyHeader> -->
    <router-view />
    <!-- <MyFooter></MyFooter> -->
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'
export default {
  name: 'App',
  components: {
    MyHeader, MyFooter
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
  margin-top: 10px;
}
</style>
