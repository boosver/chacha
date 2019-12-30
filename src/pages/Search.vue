<template>
  <div class="wrapper">
    <div class="mark">
      <div class="purple"></div>
      <img src="../assets/search_background_small.jpg" />
    </div>

    <div class="search">
      <h2>人脸识别</h2>
      <div class="serarch_box">
        <img src="../assets/icon/weibiaoti1.png" class="search_icon" />
        <span>点击上传人脸照片...</span>
        <img src="../assets/icon/fangdajing.png" class="search_icon" />
      </div>
      <br />
      <div class="icon_container">
        <div class="icon_list bgc">
          <img src="../assets/jinzhi.png" />
          <p>相似度80%</p>
          <span>
            <a style="color:#1989fa;">http://www.baidu.com</a>
            <br />
			<br />
           <van-button plain hairline type="info">点击查看详情</van-button>

          </span>
        </div>
      </div>
      <br />
    </div>
    <Tab :active="1"></Tab>
  </div>
</template>

<script>
import Tab from "./components/Tab";
import Vue from "vue";
import { Button } from "vant";
import "vant/lib/button/style";
Vue.use(Button);
export default {
  data() {
    return {};
  },
  components: {
    Tab
  }
};
</script>
<style>
@import "../assets/main.css";
</style>