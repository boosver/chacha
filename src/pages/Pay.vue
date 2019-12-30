<template>
  <div>
    <van-button plain hairline type="info">点击查看详情</van-button>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import Vue from "vue";
import { Button } from "vant";
import "vant/lib/button/style";
Vue.use(Button);
export default {
  data() {
    return {};
  },
  created() {
      this.jssdk();
  },
  mounted() {
      console.log(Vue.apis)
  },
  methods: {
    jssdk() {
      this.$ajax
        .post(Vue.apis + "/pay/jssdk", {

        })
        .then(r => {
            console.log(r)
        })
        .catch(error => {});
    }
  }
};
</script>