<template>
  <div class="mypanel">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main" :style="{ height: fixheight}">
      <slot name="main"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'panel',
  data() {
    return {
      fixheight: '100px',
    }
  },
  created() {
    const height = window.innerHeight;
    this.fixheight = `${height-44-58}px`;
  }
}
</script>
<style lang="stylus" scoped>
.main
  height calc(100% - 102px)
  overflow: scroll
  .footer
    position fixed;
    bottom 0;
    width 100%;
    height 58px
    background #FFF
</style>