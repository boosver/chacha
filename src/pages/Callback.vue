<template>
  <div>
    <div class="d1">
    <img src="../assets/loding.jpg" />
    </div>

  </div>
</template>

<script>
import Tab from "./components/Tab";
export default {
  data() {
    return {};
  },
  created() {
    this.$ajax
      .get("/api/wxcallback", {
        params: {
          code: this.$route.query.code,
          state: this.$route.query.state
        }
      })
      .then(r => {
        this.$router.push({
          path: "/"
        });
        //window.location.href=r.data.url
      })
      .catch(error => {
        this.$router.push({
          path: "/"
        });
      });
  },
  components: {
    Tab
  }
};
</script>
<style>
.van-tabbar-item__icon img {
  height: 41px;
}
html{height:100%; width:100%;background-color:#ffffff;}
body{height:100%; width:100%}
.d1{width:300px;
height:200px;
position:fixed;
top:50%;
margin-top:-100px;
left:50%;
margin-left:-150px;
}
.d1 img{width:100%;height:100%}
</style>