<template>
  <header>
      <div class="left" @click="leftAction">&#xe637;</div>
      <div class="title">{{title}}</div>
      <div class="right"></div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '我是标题'
    },
    leftAction: {
      type: Function,
      default: () => {
        window.history.back()
      }
    }
  }
}
</script>
<style lang="stylus">
header
  display flex;
  justify-content space-between
  align-items center
  width 100%
  padding 10px 18px
  background-color #FFF
  height 44px;
  line-height 44px;
  .left
    font-family iconfont
</style>
