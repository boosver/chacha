<template>
  <div>
  请稍后...
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
        this.$router.push({
            path:'/'
        })
        //window.location.href=r.data.url
      
    })
    .catch(error => { 
                this.$router.push({
            path:'/'
        })
    });
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