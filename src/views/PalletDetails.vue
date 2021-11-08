<template>
  <div>
      <!-- <div class="top-">
        <img src="http://img202.yun300.cn/img/productbanner.jpg?tenantId=221484&viewType=1&k=1625485789000" alt="">
    </div>
  
  <div class="mid-img">
      <img src="http://img202.yun300.cn/img/pro1.jpg?tenantId=221484&viewType=1&k=1625485789000" alt="">
  </div>

  <div class="button-container">
      <div class="collection standard" :class="{select:standard}" @click="standardClick">标准系列</div>
       <div class="collection goods" :class="{select:goods}" @click="goodsClick">货架系列</div>
        <div class="collection light" :class="{select:light}" @click="lightClick">超轻系列</div>
  </div>

    <div class="line"></div> -->
  </div>
</template>

<script>

export default {
    props:['id','series'],
    
}
</script>

<style scoped>
    .mid-img{
        margin-top: 3em;
        text-align: center;
    }

    .button-container{
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /*控制左右*/
    }

    .line{
        height: 2px;
        background-color: #0079b9;
        position: relative;
        bottom: 2px;
    }

    .collection {
        padding: 0.5em 1.3em;
        margin: 0.8em;
        margin-bottom: 0px;
        background-color: #0079b9;
        color: white;
        cursor: pointer;
        z-index: 100;
        font-weight: bold;
    }

    .select{
        background-color: white;
        color: #0079b9;
        border: 2px solid #0079b9;
        border-bottom: 2px solid white;
    }


</style>