<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 622814 */
  src: url('//at.alicdn.com/t/font_622814_fvgr798o2iq.eot');
  src: url('//at.alicdn.com/t/font_622814_fvgr798o2iq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_622814_fvgr798o2iq.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_622814_fvgr798o2iq.woff') format('woff'),
  url('//at.alicdn.com/t/font_622814_fvgr798o2iq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_622814_fvgr798o2iq.svg#iconfont') format('svg');
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
