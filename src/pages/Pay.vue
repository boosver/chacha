<template>
  <div class="wrapper">
    <div class="mark">
      <div class="purple"></div>
      <img src="../assets/search_background_small.jpg" />
    </div>

    <div class="search">
      <h2>欢迎使用我们的服务</h2>
      <div class="icon_container">
        <div class="icon_list bgc">
          <img src="../assets/pay.png" />
          <p>购买一次查询服务20元</p>
          <span>
           <van-button plain hairline type="info" @click="jssdk(20)">点击购买</van-button>

          </span>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import Vue from "vue";
import { Button,Dialog } from "vant";
import "vant/lib/button/style";
import "vant/lib/dialog/style";
Vue.use(Button);
export default {
  data() {
    return {
      key: [],
      toto:1
    };
  },
  created() {
    //this.jssdk();
    //this.customerInfo2();

  },
  mounted() {

    console.log(Vue.apis);
  },
  methods: {
    jssdk(toto) {
      this.$data.toto = toto
      this.$ajax
        .post("/api/pay/place/an/order", {
          total_fee: toto
        })
        .then(r => {
          let self = this;
          WeixinJSBridge.invoke(
            "getBrandWCPayRequest",
            {
              appId: r.data.appId,
              timeStamp: r.data.timeStamp,
              nonceStr: r.data.nonceStr,
              package: r.data.package,
              signType: r.data.signType,
              paySign: r.data.paySign
            },
            (res)  => {
            
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                // res.err_msg将在用户支付成功后返回
                // ok，但并不保证它绝对可靠。
                Dialog.alert({
                  title: '恭喜',
                  message: '您一定等不及了快去查询吧'
                }).then(() => {
                  self.$router.push({
                    path:'/serch'
                  })
                });
              }
              if(res.err_msg == 'get_brand_wcpay_request:cancel'){
                  Dialog.confirm({
                    title: '亲!',
                    message: '您真的不想查一下自己有没有暴露在互联网吗?',
                    confirmButtonText:'还是查一下吧',
                    cancelButtonText:'算了吧'
                  }).then(() => {
                    self.jssdk(this.$data.toto);
                  }).catch(() => {
                    // on cancel
                  });
              }
              if(res.err_msg == 'get_brand_wcpay_request:fail'){
                Dialog.alert({
                  title: '抱歉',
                  message: '支付失败，如有问题请联系客服微信:boosver'
                }).then(() => {
                  // on close
                });
              }
            }
          );
        })
        .catch(error => {
        });
    },
    goPay() {
      wx.chooseWXPay({
        timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: this.$data.key.nonceStr, // 支付签名随机串，不长于 32 位
        package: this.$data.key.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType: this.$data.key.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: this.$data.key.paySign, // 支付签名
        success: function(res) {
          console.log(res);
          // 支付成功后的回调函数
        }
      });
    }
  }
};
</script>
<style>
@import "../assets/main.css";
</style>