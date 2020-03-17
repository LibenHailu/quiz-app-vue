<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import First from './components/First'

export default {
  name: 'App',
  components: {
    First
  }
}
</script>

<style>
#app {
  color: #333333;
    font-family: Arial, Helvetica, sans-serif;
    max-width: 650px;
    margin: 0 auto;
    padding: 0 16px;
}
</style>
