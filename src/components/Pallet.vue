<template>
  <div>
      <img :src="pallet.img" alt="">
    <p>{{pallet.model}}</p>
  </div>
  
</template>

<script>
export default {

    props:['pallet'],

}
</script>

<style scoped>
    img{
        border: 1px solid black;
        width: 200px;
    }

    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }
</style>