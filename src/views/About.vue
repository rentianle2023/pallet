<template>
    <div>
        <div class="hero">
            <img src="..\assets\about.jpg" alt="">
            <img src="..\assets\about2.jpg" alt="" class="title">
        </div>
       
        <SelectButtons :buttons="buttons" @select="changeSeleced">

        </SelectButtons>

        <div class="content">
            <div v-if="selected == 'profile'" class="profile">
                <p>{{paragraph1}}</p>
                <p>{{paragraph2}}</p>
                <p>{{paragraph3}}</p>
            </div>
            <div v-if="selected == 'equipment'"><img :src="equipment" alt=""></div>
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
                cn : "公司简介",
                en : "Company Profile",
                name : "profile"
            },
            {
                cn : "技术设备",
                en : "Technical Equipment",
                name : "equipment"
            }],
            selected : "profile"
        }
    },
    computed: {
         paragraph1() {
            if(this.$store.state.cn){
                return "上海庆豪塑料托盘制造有限公司位于上海市金山区漕泾镇共建路138号，专业从事生产塑料托盘。公司前身自1992年从意大利引进三万克注塑机生产塑料托盘，是国内较早的生产塑料托盘生产企业，公司已通过质量管理体系认证、职业健康安全管理体系认证、环境管理体系认证，也是中国物流与采购联合会托盘专业委员会常务理事单位，2009年被中国物流与采购联合会托盘专业委员会评为“中国十大明星托盘企业”，2010年度被上海市中小企业品牌建设推进委员会评为“品牌企业”，2015年被中国物流与采购联合会托盘专业委员会评为“中国托盘质量品牌企业”，2017年被中国物流与采购联合会托盘专业委员会评为“托盘行业突出贡献企业”。"
            }else{
                return "Founded in 1983, Shanghai Qinghao Plastic Pallet Manufacture Co., Ltd., a professional manufacturer of plastic pallets, is a member of China Plastic Pallet Association and one of the top 100 plastic product manufacturers in China. Moreover, the company takes the lead in passing the certifications of ISO and SGS. Our plastic pallets not only are popular in China, but also have been exported to more than ten countries and areas such as Europe, America, South Africa, East Asia and Hong Kong."
            }
        },
        paragraph2() {
            if(this.$store.state.cn){
                return "公司占地面积30000平方米，建筑面积18000平方米，注塑机22台，塑料热焊机7台，机械手13台，试验测试设备若干。公司现有近二百余种规格型号的塑料托盘，能满足各行各业的仓储物流对塑料托盘的需求。产品畅销全国，出口十多个国家和地区。本公司多年来形成一支专业从事研制和开发高新技术的专业人员。从2001年就为西安杨森药业研制生产的阻燃型托盘，其阻燃性达到V0级，并在该项目上成功的运用了较先进的塑料托盘内置钢管结构；为上海联华超市设计生产的上流水线托盘，其性能达到了比较先进的水平；本公司经过多年的积累，攻克了塑料托盘内置钢管特性难关，近年来不断创新分别为众多企业设计开发了新品，2003年为上海长桥物流中心设计生产的高位立体库货架一体成型内置钢管单面托盘，货架载重量超过1吨;2004年为上海医药物流中心设计生产的内置钢管型塑料托盘，完全能满足托盘上高位立体库货架时高速自动化操作要求；2005年为北京烟草物流中心设计生产了烟草行业使用的塑料托盘；2006年为江苏省新华图书物流中心设计生产了上货架1吨一次成型内置钢管平板川字型；2008年为浙江新华物流自动库自创了上货架1.5吨变形量小于4MM的双平面川字型托盘；2012年为杭州贝因美母婴营养品有限公司提供了立体仓库使用托盘；2013年为韩国耐克森轮胎定制1616平板双面立体库使用托盘；2014年为湖南中烟工业有限公司配送烟草使用托盘，2016年为上海现代物流投资发展有限公司专门定制高强度租赁托盘，近几年还为山东金宇实业股份有限公司、南京锦湖轮胎有限公司、赛轮集团有限公司、江苏恒科新材料有限公司、桐昆集团浙江恒腾差别化纤维有限公司等公司设计使用托盘。"
            }else{
                return "The company makes constant research and improvement on the styles and practicability of the plastic pallets by actively introducing advanced technologies from German and Japan. In 2001, the company successfully developed built-in steel tube plastic pallets with a loading capacity of over 1T, which have been applied in Xi’an Jassen Pharmaceutical Co., Ltd. Through years of experience accumulation, the company has obtained a number of national patents for the third generation products, which enjoy world advanced level in terms of manufacturing method and have been widely applied to high-rise stereoscopic warehouses and high-speed pipelines in Shanghai Pharmaceutical Logistics Center, Beijing Tobacco Logistics Center and Yili Dairy Co., Ltd. In addition, the company has provided ultra-large built-in steel tube double-faced pallets with extremely less distortion for Hankook Tire Co., Ltd. Our special tobacco pallets have become the first choice for China Tobacco Industry. The company has become a designated light pallet supplier of Samsung, one of World Top 100 Enterprises."
            }
        },
        paragraph3() {
            if(this.$store.state.cn){
                return "2020年我公司生产销售达到了新的高峰，产值不断提高。我公司将一如继往，本着以客户为先、以质量求发展的宗旨为广大客户提供更好的塑料托盘和服务。"
            }else{
                return "With rapid economic development, plastic pallets play an increasingly important role in warehouse and logistics, and distribution. As the professional manufacturer, the company will research and develop various advanced plastic pallets used in all industries according to customers’ requirements."
            }
        },
        equipment(){
            if(this.$store.state.cn){
                return require("../assets/equipment.jpg")
            }else {
                return require("@/assets/equipment2.jpg")
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

.hero img {
    width: 100%;
}
.hero .title{
    width: 28em;
}

.scenarioImg{
    width: 100%;
}

p{
    TEXT-INDENT: 2em;
    LETTER-SPACING: 0em;
    LINE-HEIGHT: 2em;
    text-align: left;
    color: rgb(71, 71, 71);
}

.profile{
    margin: 0 2em;
}
</style>