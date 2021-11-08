<template>
   
  <div>
    <div class="top">
      <Nav></Nav>
    </div>
  <div class="menu">
    <div><Menu></Menu></div>
  </div>

  <div class="router-view">
    <router-view/>
  </div>

  <div class="bottom-line">
    <img src="http://static202.yun300.cn/img/dibu_bg.jpg?tenantId=221484&viewType=1" alt="" >
  </div>
  <p style="text-align: center; line-height: 1.5em; margin-top: 0em; text-indent: 0em; margin-bottom: 0em; letter-spacing: 0em;">
    <br>
  <span style="color: #666666;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑, tahoma, arial, sans-serif;">地址：上海市金山区漕泾镇共建路138号　邮编：201507 电话：<a href="tel:021-57251955">021-57251955</a>&nbsp;<a href="tel:021-57251542">57251542</a>&nbsp;<a href="tel:021-57255966">57255966</a>&nbsp;<br>
    传真：021-57254057　手机：<a href="tel:13801633153">13801633153</a> &nbsp; &nbsp;<br>
    网址：</span></span></span><span style="font-size: 14px;"><span style="font-family: 微软雅黑, tahoma, arial, sans-serif;"><a href="http://www.qinghao.com"><span style="color: #ffb000;"><span>http://www.qinghao.com</span></span></a><span style="color: #666666;">　E-mail：</span><a href="mailto:sales@qinghao.com"><span style="color: #ffb000;"><span>sales@qinghao.com</span></span></a></span></span><span style="font-size: 14px;"><span style="font-family: 微软雅黑, tahoma, arial, sans-serif;">　<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"><span style="color: #ffb000;">沪ICP备09062423号-2</span></a> </span></span>网站建设：<a href="http://www.300.cn/" target="_blank"><span style="color: #ffb000;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑, tahoma, arial, sans-serif;">中企动力</span></span></span></a> <a href="http://shanghaipx.300.cn/" target="_blank"><span style="color: #ffb000;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑, tahoma, arial, sans-serif;">浦西</span></span></span></a><br>
  <span style="color: #666666;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑, tahoma, arial, sans-serif;">Copyright © 2010 Shanghai Qinghao Plastic Pallet Manufacture Co.,Ltd. </span></span></span></p>

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Nav,Menu
  },
  methods: {
    
  },
}
</script>

<style>


body{
  background-image: url(http://static202.yun300.cn/img/bg01.jpg?tenantId=221484&viewType=1);
  background-repeat: no-repeat;
  background-position: top center;
  font-family: "微软雅黑";
  font-size: 14px;
}

html,body{
  margin: 0px;
  height: 100%;
}

.top{
  margin-left: 10%;
  margin-right: 10%;
}

.router-view{
    width: 100%;
    max-width: 1004px;
    min-width: 0px;
    height: auto;
    margin: 0px auto;
}

.bottom-line{
  margin-top: 5em;
  text-align: center;
}

.bottom-line > img {
  width: 100%;
}


.hero{
    text-align: center;
}

.hero > img + img{
    margin-top: 1.5em;
}

</style>
