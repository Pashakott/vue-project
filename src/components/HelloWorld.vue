<template>
<div class="main ">
 <router-link to="/homework">Homework</router-link>
  <div class="flex-wrapper">
 <div class="flex-child ">
  <p> <img src="mac.png" ></p>
  <router-link to="/macpro">Обзор Mac Pro</router-link>
 </div>
 <div class="flex-child ">
  <p> <img src="Macbook.png"></p>
  
  <router-link to="/macbook">Обзор MacBook Air</router-link>
 
 </div>
 <div class="flex-child ">
   <p> <img src="macm.png"></p>
 <router-link to="/macmini">Обзор Mac Mini</router-link>
 </div>
 <div class="flex-child ">
  <p> <img src="iphone11.png"></p>
  <router-link to="/macbook">Обзор iPhone 11</router-link>
 </div>
 <div class="flex-child ">
  <p> <img src="s20.png"></p>
  <router-link to="/macbook">Обзор Samsung S20</router-link>
 </div>
 <div class="flex-child ">
  <p> <img src="galaxy.png"></p>
  <router-link to="/macbook">Обзор Samsung Galaxy Buds +</router-link>
 </div>

 <div class="flex-child ">
  <p> <img src="p40.png" ></p>
  <router-link to="/macbook">Обзор Huawei P40</router-link>
  <footer class="footer">
  <p>Спасибо за просмотр нашего сайта</p>
  <a href=""> Facebook</a>
  <a href="">Instagram</a>
  <a href="">Twitter</a>
 

 </footer>
</div>
 </div>
 </div>
 



</template>



<script>
export default {
    name:"HelloWorld"
}
</script>

<style scoped>
.main{
   
	font-family: Aqum;
	background: orange;
 }
 
 h1,h2 {
 color: white;

}
 h1 {
 font-size: 30pt;
 }
 p{
 font-size: 15pt;
 }
 .flex-wrapper{
 display:flex;
 background-color: white;
 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content: space-around;
}

input{
padding-left:100px;
margin-left:500px;
}
</style>