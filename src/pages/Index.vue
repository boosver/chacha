<template>
  <div>
    <van-button type="default">默认按钮</van-button>
          <Tab></Tab>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/button/style';
import Tab from './components/Tab'
Vue.use(Button);
export default {
  components:{
      Tab
  }
};
</script>
<style>
</style>