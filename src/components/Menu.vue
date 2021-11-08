<template>
 
<!-- 导航 -->
	<div class="container">
        <div class="navbar">
				<li class="button"><router-link :to="{ name: 'Home'}">{{ home }}</router-link></li>
				<li class="button"><router-link :to="{ name: 'About',params:{id: '1'}}">{{ about }}</router-link></li>
				<li class="button"><router-link :to="{ name: 'Product',params:{series: 'standard'}}">{{ products }}</router-link></li>
				<li class="button"><router-link :to="{ name: 'Applications'}">{{ applications }}</router-link></li>
				<li class="button"><a class="navNameLink" href="/intro/7.html" target="_self">{{ cases }}</a></li>
				<li class="button"><a class="navNameLink" href="/intro/9.html" target="_self">{{ service }}</a></li>
				<li class="button"><a class="navNameLink" href="/intro/10.html" target="_self">{{ qualification }}</a></li>
				<li class="button"><a class="navNameLink" href="/contact.html" target="_self">{{ contact }}</a></li>
        </div>
		
	</div>
</template>

<script>
export default {
	computed: {
		home() {
			return this.$store.state.cn ? "网站首页" : "Home" 
		},
		about() {
			return this.$store.state.cn ? "关于庆豪" : "About" 
		},
		products() {
			return this.$store.state.cn ? "产品中心" : "Products" 
		},
		applications() {
			return this.$store.state.cn ? "产品应用" : "Applications" 
		},
		cases() {
			return this.$store.state.cn ? "经典案例" : "Case" 
		},
		service() {
			return this.$store.state.cn ? "服务承诺" : "Service" 
		},
		qualification() {
			return this.$store.state.cn ? "企业资质" : "Qualification" 
		},
		contact() {
			return this.$store.state.cn ? "联系我们" : "Contact" 
		}
	},
}
</script>

<style scoped>
.container{
    width: 100%;
    background-color: white;
	border-bottom: 1px solid blue;
}

.navbar{
	height: 100%;
    display: flex;
    flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
    
}
.button{
	padding: 13px 3px;
	
    list-style: none;
}

.button:not(:first-child){
    border-left: 0.5px solid lightgray;
}



a{
	text-decoration: none;
    font-weight: bold;
    color: #565656;
    font-size: 15px;
	margin: 1em;
}

.router-link-exact-active {
	border-bottom: 2px solid black;
	color: black;
}
</style>