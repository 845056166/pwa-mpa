<template>
  <nav class="nav">
    <ul>
        <router-link to='/'>
            <span class="icon">&#xe625;</span>
            <span>文章</span>
        </router-link>
        <router-link to='source'>
            <span class="icon">&#xe888;</span>
            <span>资源</span>
        </router-link>
        <router-link to='note'>
            <span class="icon">&#xe7d0;</span>
            <span>笔记</span>
        </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'mynav',
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
  ul
    width 100%;
    display flex;
    justify-content center;
    a
      flex: 1
      padding 1rem
      &.router-link-exact-active
        color: green
      span.icon
        display block
        font-family iconfont
      


</style>