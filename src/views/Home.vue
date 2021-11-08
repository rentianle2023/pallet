<template>
  <div class="mid">
    <div class="hero">
    <img src="http://img202.yun300.cn/img/banner1.png?tenantId=221484&viewType=1&k=1625485789000" alt="">
  </div>

  <div class="content">
    <div class="index">
        <h4>产品搜索</h4>
        <img src="http://img202.yun300.cn/img/ab4.jpg?tenantId=221484&viewType=1&k=1625485789000" alt="">
        <img src="http://img202.yun300.cn/img/ab5.jpg?tenantId=221484&viewType=1&k=1625485789000" alt="">
    </div>
    <div class="introduction">
      <h4>公司简介</h4>
      <img src="http://www.qinghao.com/img/ab8.jpg" alt="">
      上海庆豪塑料托盘制造有限公司位于上海市金山区漕泾镇共建路138号，专业从事生产塑料托盘。公司前身自1992年从意大利引进三万克注塑机生产塑料托盘，是国内较早的生产塑料托盘生产企业，公司已通过质量管理体系认证、职业健康安全管理体系认证、环境管理体系认证，也是中国物流与采购联合会托盘专业委员会常务理事单位，2009年被中国物流与采购联合会托盘专业委员... 
    </div>
    <div class="factory">
      <h4>工厂车间</h4>
      <img src="http://img202.yun300.cn/img/xxxx.jpg?tenantId=221484&viewType=1&k=1625485789000">
    </div>
  </div>
  


  <div class="display">
    <img src="http://img202.yun300.cn/img/ab9.jpg?tenantId=221484&viewType=1&k=1625485789000" alt="">
  </div> 
    
    
    
  </div>
  

</template>

<script>
export default {

}
</script>

<style scoped>

.hero img{
  width: 100%;
}

h4{
  font: bolder;
  color: grey;
}

.content{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.index{
  width: 15em;
}

.introduction{
  width: 20em;
  overflow: hidden;
}

.introduction img{
  float: left;
  width: 50%;
}

.factory{
  width: 15em;
}

.display img{
  margin-top: 2em;
  min-height: 20px;
  width: 100%;
}



</style>