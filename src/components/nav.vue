<template>
  <nav class="nav">
    <ul>
        <router-link to='/'>
            <span>文章</span>
            <img src="" alt="">
        </router-link>
        <router-link to='/source'>
            <span>资源</span>
            <img src="" alt="">
        </router-link>
        <router-link to='note'>
            <span>笔记</span>
            <img src="" alt="">
        </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'nav',
  data() {
    return {

    }
  },
  created() {
    
  }
}
</script>
<style lang="stylus">
.nav 
  position fixed;
  bottom 0;
  width 100%;
  ul
    width 100%;
    display flex;
    justify-content center;
    a
      flex: 1
      padding 1rem
      &.router-link-exact-active
        color: green


</style>