<template>
	<div class="wrapper">
		<div class="mark">
			<div class="purple"></div>
			<img src="../assets/search_background_small.jpg">
		</div>
		
		<div class="search">
			<h2>人脸识别</h2>
			<div class="serarch_box">
				<img src="../assets/icon/weibiaoti1.png" class="search_icon" />
				<span>点击上传人脸照片...</span>
				<img src="../assets/icon/fangdajing.png" class="search_icon" />
			</div>
		</div>
		<div class="content">
			<div class="main">
				<p>
				  利用人工智能和大数据进行全网人脸搜索(<strong>尤其是成人网站</strong>)，帮您及时检测您的肖像是否被盗用或偷拍并非法公布于互联网。 
				  <strong>人脸搜索为您提供最精准的搜索结果。我们不会保存您的搜索图像，因为这是法律不允许的(同时也违反我们的网站准则).</strong>
				</p>
			</div>
			<div class="icon_container">
				<div class="icon_list bgc">
					<img src="../assets/img_1.png">
					<p>1.上传照片</p>
					<span>上传多张图片将<strong>提高搜索结果的质量</strong></span>
				</div>
				<div class="icon_list">
					<img src="../assets/img_2.png">
					<p>2.选择人脸</p>
					<span>上传的人脸必须属于<strong>一个人</strong>，并且照片中的人脸必须<strong>清晰可见</strong></span>
				</div>
				<div class="icon_list bgc">
					<img src="../assets/img_3.png">
					<p>3.搜索我们的网络数据库</p>
					<span>我们的网络数据库拥有完善的管理，搜索结果将在<strong>几秒内</strong>准备好！</span>
				</div>
				<div class="icon_list">
					<img src="../assets/img_4.png">
					<p>4.订阅提醒</p>
					<span>每次人脸搜索遇到您正在寻找的人脸，您将收到<strong>短信通知</strong></span>
				</div>
			</div>
			<div class="reasons-container">
				<div class="container">
					<div>
						<div class="pad">
							<h3>最先进的</h3>
							<h4>人脸跟踪器</h4>
						</div>
					</div>
					<div>
						<div class="pad">
							<div class="pads">
								<span>200</span>
								<span>数百万<br>独一无二的人脸</span>
							</div>
							<div class="pads">
								<span>50</span>
								<span>数百万<br>访问的网站</span>
							</div>
							<div class="pads">
								<span>1TB</span>
								<span>图像<br>每天被分析</span>
							</div>
						</div>
						
					</div>
					
				</div>
			</div>
			<h3 class="h3_title">人脸搜索示例</h3>
			<div class="app-screen">
				<img src="../assets/app_screen.jpg">
			</div>
			<div class="features">
				<div class="container pads">
					<h2>功能</h2>
				</div>
			</div>
			<div class="try-alerts">
				<div class="container">
					<div>
						<h1>私查查 <span>提醒</span></h1>
						<p>您的脸出现在<br>互联网上</p>
						<p>您是否想过您上传到网上的照片发生了什么？</p>
						<p>您想知道是否有人非法使用您的图像吗？</p>
						<p>……如果是的话，那么这对您来说是一项完美的服务！</p>
						<a href="javascript:;"><span>了解更多</span></a>
					</div>
					<div>
						
					</div>
				</div>
			</div>
			<div class="paliscope">
				<div class="container">
					<div>
						<p>私查查竭尽全力，不间断的抓取国外X站数据，以保证最全最精准的匹配，帮助您及时发现隐私漏洞以防被不法分子利用<br><br>马上利用私查查开始您的隐私安全生活吧！</p>
					</div>
				</div>
			</div>
			<div class="try-premium">
				<div class="container">
					<img src="../assets/logo-white.png"/>
					<div>
						<p>
							最好的私查查结果只提供给高级会员。高级会员搜索可提高搜索结果的质量，并解锁每一个结果。
						</p>
						<router-link to="/pay" href="javascript:;" class="btn">
							<span>前往购买</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
    	      <Tab :active="0"></Tab>
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