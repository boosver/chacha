<template>
  <div>
    <van-tabbar v-model="active" :safe-area-inset-bottom="true" :border="false">
      <van-tabbar-item icon="apps-o" url="/"></van-tabbar-item>
      <van-tabbar-item url="/serch">
        <img  height="50" slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item icon="contact" url="/user"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/tabbar/style";
import "vant/lib/tabbar-item/style";
Vue.use(Tabbar).use(TabbarItem);
export default {
  props:{
    active:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      icon: {
        active: "http://wx.gkapay.com/images/face.png",
        inactive: "http://wx.gkapay.com/images/face_hui.png"
      }
    };
  },
  methods:{
      goHome() {

          this.$router.push({
              pasth:'/'
          })
      }
  }
};
</script>
<style>
.van-tabbar-item__icon img{
    height:41px;
}
/* .van-tabbar--fixed{
    bottom:20px;
} */
</style>