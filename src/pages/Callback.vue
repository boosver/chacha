<template>
  <div>
      callback
      <Tab :active="2"></Tab>
  </div>
</template>

<script>
import Tab from './components/Tab'
export default {
  data() {
    return {

    };
  },
  created() {
        this.$ajax
    .get("/api/wxcallback", {
        params: {
        'code':this.$route.query.code,
        'state':this.$route.query.state
        }
    })
    .then(r => {
        //window.location.href=r.data.url
      
    })
    .catch(error => { });
  },
  components:{
      Tab
  }
};
</script>
<style>
.van-tabbar-item__icon img{
    height:41px;
}
</style>