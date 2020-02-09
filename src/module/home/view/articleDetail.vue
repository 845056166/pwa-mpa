<template>
  <panel class="home">
    <myHeader slot="header" title="详情"></myHeader>
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <main slot="main">
      <div v-html="html" class="articleDetail"></div>
    </main>
    <my-nav slot="footer"></my-nav>
  </panel>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/nav.vue';
import Header from '@/components/header.vue';
import listItem from '@/components/listItem.vue';
import panel from '@/components/panel.vue';

export default {
  name: 'home',
  data() {
    return {
      html: '',
    }
  },
  components: {
    HelloWorld,
    myNav: Nav,
    myHeader: Header,
    listItem: listItem,
    panel
  },
  methods: {
    clickItem(item) {
      console.log('click......', item);
    }
  },
  created() {
    fetch(`http://huidoo.com.cn:9000/blogAdmin/blogUI/queryArticle.action?arId=${this.$route.params.arId}`).then(res => res.json()).then(res => {
      this.html = res[0].data[0].arContent;
    });
  }
}
</script>
<style lang="stylus">
.articleDetail
  text-align left
  padding 10px;
</style>