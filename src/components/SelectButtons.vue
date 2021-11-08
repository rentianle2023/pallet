<template>
    <div>
        <div class="button-container">
            <div class="collection" 
            v-for="(button,index) in buttons" :key="index" 
            :class="{select: selectedButton == button.name}"
            @click="selected(button.name)">
                {{ $store.state.cn ? button.cn : button.en }}
            </div>
            <slot name="selectedButton" :selected='selectedButton'></slot>
        </div>

        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: {
        buttons: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            selectedButton: this.buttons[0].name 
        }
    },
    methods: {
        selected(name) {
            this.selectedButton = name;
            this.$emit('select',name)
        }
    },
}
</script>

<style scoped>
.button-container{
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /*控制左右*/
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

    .line{
        height: 2px;
        background-color: #0079b9;
        position: relative;
        bottom: 2px;
    }
</style>