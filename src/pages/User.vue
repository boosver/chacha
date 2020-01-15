<template>
  <div class="wrapper">
    <div class="mark">
      <div class="purple"></div>
      <img src="../assets/search_background_small.jpg" />
    </div>
    <div class="mine">
      <div class="user-poster">
        <div class="head_img">
          <img :src="info.avatarUrl" />
          <p>{{info.nickName}}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- <div class="user-links">
					<van-row>
					  <van-col span="6">
					    <van-icon name="like-o" />
					    更多传单
					  </van-col>
					</van-row> 
      </div>-->
      <div>
        <van-cell-group>
          <van-cell :title="'您的剩余查询次数为:'  + info.second" />
          <van-collapse v-model="activeNames">
            <van-collapse-item title="私查查是什么?有什么用!" name="1">私查查是反向搜索引擎。您可以将脸部图像发送到私查查，私查查将在互联网上找到给定的人或类似人物。私查查使用现代人脸识别算法和机器学习功能来生成高质量的搜索结果(人脸识别技术使用阿里云人脸匹配技术保障匹配结果准确)。私查查只看面孔，构图和颜色在搜索中并不重要。我们的引擎没有比较发型和脸部亮度。关键因素仅仅是面部特征。</van-collapse-item>
            <van-collapse-item title="上传到私查查的图像会怎样？" name="2">您的图像和裁切过的面孔永远不会保存。私查查每天都会在网络上添加数百万个新面孔。我们不会存储用户的任何私人数据。使用私查查进行搜索是安全且私密的。脸部的特征码用URL地址编码的。</van-collapse-item>
            <van-collapse-item title="我能做些什么，当我发现没有我的许可使用我的照片？" name="3">您可以直接向网站所有者发送电子邮件。或者其他方式联系网站所有者要求他删除相关资源图片以及视频</van-collapse-item>
			<van-collapse-item title="私查查可免费使用吗？" name="4">使用免费的私查查，你将不能解锁查看详细信息。所有的搜索结果只有私查查高级会员才可以查看。高级会员有机会还要附加功能，例如搜索过滤器。</van-collapse-item>
          </van-collapse>
        </van-cell-group>
      </div>
      <div>
        <!-- <van-cell-group class="user-group">
					  <van-cell icon="location" title="地址管理" is-link/>
					  <van-cell icon="close" title="修改密码" is-link/>
					  <van-cell icon="close" title="退出登录" is-link @click="loginOut"/>
					  <van-cell icon="info-o" title="关于我们" is-link/>
        </van-cell-group>-->
      </div>
    </div>

    <Tab :active="2"></Tab>
  </div>
</template>

<script>
import Vue from "vue";
import "vant/lib/index.css";
import Tab from "./components/Tab";
import { Row, Col } from "vant";
import { Toast } from "vant";
import { Icon } from "vant";
import { Cell, CellGroup, Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Row).use(Col);
export default {
  data() {
    return {
      info: [],
      activeNames: []
    };
  },
  created() {
    this.customerInfo();
  },
  methods: {
    customerInfo() {
      this.$ajax
        .post("/api/customer/info", {})
        .then(r => {
          this.$data.info = r.data;
        })
        .catch(error => {});
    }
  },
  components: {
    Tab
  }
};
</script>
<style scoped>
@import "../assets/main.css";
.van-tabbar-item__icon img {
  height: 41px;
}
.mine .head_img {
  text-align: center;
  margin-top: 85px;
}
.mine .head_img img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.mine .head_img p {
  line-height: 16px;
  font-weight: bolder;
  color: aliceblue;
}
.cont {
  width: 90%;
  height: 150px;
  background: #fff;
  border-radius: 25px;
  margin: 0 auto;
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background: #fff;
}

.van-icon {
  display: block;
  font-size: 24px;
}
</style>