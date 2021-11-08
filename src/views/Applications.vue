<template>
    <div>
        <div class="hero">
            <img src="..\assets\applications.jpg" alt="">
            <img src="..\assets\applications2.jpg" alt="" class="title">
        </div>
       
        <SelectButtons :buttons="buttons" @select="changeSeleced">

        </SelectButtons>

        <div class="content">
            <div v-if="selected == 'customers'"><img src="../assets/customers.jpg" class="customerImg" ></div>
            <div v-if="selected == 'scope'">{{scope}}</div>
            <div v-if="selected == 'scenario'"><img :src="scenarioImg" class="scenarioImg"></div>
        </div>
        
    </div>
</template>

<script>
import SelectButtons from '@/components/SelectButtons.vue';
export default {
    components: {
        SelectButtons
    },
    data() {
        return {
            buttons: [{
                cn : "主要客户",
                en : "Major customers",
                name : "customers"
            },
            {
                cn : "业务范围",
                en : "Business Scope",
                name : "scope"
            },
            {
                cn : "应用领域",
                en : "Scenario shows",
                name : "scenario"
            }],
            selected : "customers"
        }
    },
    computed: {
        scope() {
            if(this.$store.state.cn){
                return "出口到国外，包括毛里求斯，苏丹，美国，韩国，日本等发达国家"
            }else{
                return "Export to foreign countries, including Mauritius, Sudan, the United States, South Korea, Japan and other developed countries"
            }
        },
        scenarioImg(){
            if(this.$store.state.cn){
                return require("../assets/scenario.jpg")
            }else {
                return require("@/assets/scenario2.jpg")
            }
        }
    },
    methods: {
        changeSeleced(name) {
            this.selected = name;
        }
    },
    

}
</script>

<style scoped>
.content{
    margin-top: 1em;
    text-align: center;
}


.scenarioImg,.customerImg,.hero img{
    width: 100%;
}

.hero .title{
    width: 20em;
}

</style>