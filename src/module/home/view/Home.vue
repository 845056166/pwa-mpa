<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <my-nav></my-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/nav.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    myNav: Nav,
  },
}
</script>
