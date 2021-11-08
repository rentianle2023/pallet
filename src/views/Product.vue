<template>

     <div>
        <div class="hero">
            <img src="..\assets\about.jpg" alt="">
            <img src="..\assets\about2.jpg" alt="" class="title">
        </div>
       
        <SelectButtons :buttons="buttons" @select="changeSeleced">

        </SelectButtons>
        <div v-if="pallets != null">
            <div class="pallet"  v-for="pallet in pallets" :key="pallet.id">
                <router-link :to="{ name: 'PalletDetails',params: {id: pallet.id,series:selected}}"> 
                    <Pallet :pallet="pallet"/>
                </router-link>  
            </div>  
        </div>
    

        <!-- <div class="row">
            <button class="pagination-button" @click="changePage(currentPage - 1)">&lt-</button>
            <span v-for="(item,index) in Array(totalPage)" :key="(index)" >
                <button class="pagination-button" @click="changePage(index + 1)">{{index + 1}}</button>
            </span>
            <button class="pagination-button" @click="changePage(currentPage + 1)">-&gt</button>
        </div> -->

    </div>
   


</template>

<script>
import SelectButtons from '@/components/SelectButtons.vue';
import Pallet from '@/components/Pallet.vue';
import axios from "axios";

export default {
    components: {
        Pallet,SelectButtons
    },
    data() {
        return {
            buttons: [{
                cn : "标准系列",
                en : "Standard Series",
                name : "standard"
            },
            {
                cn : "货架系列",
                en : "Shelf Series",
                name : "shelf"
            },
            {
                cn : "超轻系列",
                en : "Ultralight Series",
                name : "light"
            }],
            selected : "standard",
            pallets : [],
            totalPage : 10
        }
    },
    created(){
        axios.get("http://localhost:3001/light").then((response) => {
            this.pallets = response.data
        })
    },
    methods: {
        changeSeleced(name) {
            this.selected = name;
        }
    },
    
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

    .pallet{
        width: 10em;
        height: 10em;
        display: inline-block;
        margin: 3em;
    }

    a{
	text-decoration: none;
    }

    .row{
        margin-top: 0.5em;
        text-align: center;
    }

    .pagination-button{
        padding: 5px;
        margin: 2px;
        border-radius: 3px;
        font-size: 1em;
        cursor: pointer;
    }

</style>