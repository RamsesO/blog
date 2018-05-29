<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from '@/components/main/home'

export default {
  name: 'App',
  components: {
  	'home': Home
  }
}
</script>

<style>
#app {
	background-color: #fdf6e3;
}
</style>