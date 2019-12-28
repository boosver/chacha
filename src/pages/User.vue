<template>
  <div>
      12312312
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