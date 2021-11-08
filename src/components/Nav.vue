<template>
    
    <div class="container">
        <div class="logo">
            <img src="http://img202.yun300.cn/img/logo1.png?tenantId=221484&viewType=1&k=1625485789000" alt="">
        </div>

        <div class="right">
            <div class="international">
                    <img src="http://www.qinghao.com/img/lanuge1.jpg" alt="" class="chinese" @click="changeChinese"> &nbsp
                    <img src="http://www.qinghao.com/img/lanuge2.jpg" alt="" class="english" @click="changeEnglish">
                
            </div>

        <!-- <div class="search">
            <input type="text" value="" placeholder="请输入产品编号（三位数）">
            <button class="go">搜索</button>
        </div> -->
    </div>
    <div style="clear:both"></div>
    </div>
  
</template>

<script>
export default {
    methods: {
        changeChinese(){
            this.$store.state.cn = true;
            console.log(this.$store.state.cn)
        },
        changeEnglish(){
            this.$store.state.cn = false;
        }
    },

}
</script>

<style scoped>

.container{
    display: flex;
    justify-content: flex-end;
}


.logo{
    flex:1 0.5 1;
}

.logo > img {
    width: 100%;
    min-width: 300px;
}

.right{
    flex: 1;
}

.international{
    margin-top: 1.5em;
    text-align: right;
}

.chinese, .english{
    width: 20px;
    cursor: pointer;
}

</style>