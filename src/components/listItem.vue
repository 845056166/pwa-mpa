<template>
  <div class="pwa-list" @click="clickItem">
    <div class="pwa-list-left">
        <!-- <img src="../assets/logo.png" alt=""> -->
        <slot name="left"></slot>
    </div>
    <div class="pwa-list-right">
        <p class="pwa-list-right-summary" v-text="summary"></p>
        <div class="pwa-list-right-detail">
          <slot name="time"></slot>
          <span v-text="subtitle"></span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'listitem',
  props: {
    summary: {
      type: String,
      default: '经常我们进行前端开发的时候会遇到px、rem、em、vh、vw来表示对象所占的空间的单位1.px就是一个单位，指定固定值。px是html长度单元像素。譬如咱们电脑、手机显示屏均使用因而像素为单元，也即是px为单位。透露表现屏区分率1200*800其实便是指1200px * 800px。'
    },
    subtitle: {
      type: String,
      default: '2019年11月22日'
    },
    clickItem: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style lang="stylus">
.pwa-list
  display flex
  padding 10px
  align-items center
  position relative
  overflow hidden
  &:after
    display block
    content ''
    position absolute
    width 100%
    height 1px
    background-color #EEE
    bottom 0
  &-left
    min-width: 80px;
  &-right
    text-align: left;
    margin-left: .4rem;
    .pwa-list-right-summary
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    &-detail
      margin-top 2px;
      color #999;
</style>
