<template>
  <panel class="home">
    <myHeader slot="header" title="文章列表"></myHeader>
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <main slot="main">
      <list-item @click.native="clickItem(item)" v-for="(item, index) in article" :key="index" :summary="item.arSubheading">
        <img :src="item.arImg" alt="" slot="left">
      </list-item>
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
      article: [],
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
      this.$router.push(`/describe/${item.arId}`);
    }
  },
  created() {
    fetch('http://huidoo.com.cn:9000/blogAdmin/blogUI/queryArticle.action', {
    }).then((res) => res.json()).then(res => {
      console.log(res);
      this.article = res[0].data;
    })
  }
}
</script>
