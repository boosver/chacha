<template>
  <div>
    <van-button plain hairline type="info" @click="jssdk(1)">点击查看详情</van-button>
    <van-button plain hairline type="info" @click="jssdk(2)">2</van-button>
    <van-button plain hairline type="info" @click="jssdk(3)">3</van-button>
    <van-button plain hairline type="info" @click="jssdk(4)">4</van-button>
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
    return {
      key: []
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
      this.$ajax
        .post("/api/pay/place/an/order", {
          total_fee: toto
        })
        .then(r => {
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
            function(res) {
              this.key = res.data;
              alert(JSON.stringify(res));
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                // res.err_msg将在用户支付成功后返回
                // ok，但并不保证它绝对可靠。
              }
            }
          );
        })
        .catch(error => {});
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