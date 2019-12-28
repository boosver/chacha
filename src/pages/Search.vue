<template>

  <div>
  		<div class="mark">
			<div class="purple"></div>
			<img src="../assets/search_background_small.jpg">
		</div>
        		<div class="search">
			<h2>开始搜索</h2>
			<div class="serarch_box">
				<img src="../assets/icon/weibiaoti1.png" class="search_icon" />
				<span>点击上传人脸照片...</span>
				<img src="../assets/icon/fangdajing.png" class="search_icon" />
			</div>
		</div>
        			<div class="icon_container">
				<div class="icon_list bgc">
					<img src="../assets/logo.png">
					<p>1.上传照片</p>
					<span>上传多张图片将<strong>提高搜索结果的质量</strong></span>
				</div>
			</div>
      <Tab :active="1"></Tab>
  </div>
</template>

<script>
import Tab from './components/Tab'
export default {
  data() {
    return {

    };
  },
  components:{
      Tab
  }
};
</script>
<style>
@import '../assets/main.css';
</style>