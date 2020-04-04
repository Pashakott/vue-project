<template>
<div class="main ">
  <h1>World of gadgets</h1>
  <h2>Все самые большие технологические изобретения, созданные человеком – самолет, автомобиль, компьютер – больше свидетельствуют о его лени, чем о высоком интеллекте.</h2>
  <a href=""> Новости</a>
  <a href="">Обзоры</a>
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
	background: rgb(158, 48, 5);
 }
 
 h1,h2 {
 color: white;

}
 
 a {
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 15px 30px;
  overflow: hidden;
  border: 2px solid;
  border-bottom-width: 4px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  color: black;
  background: rgba(255,255,255,1);
  transition: color .3s, background .5s;
}
a:hover {
  animation: stripes .75s infinite linear;
  background: linear-gradient(45deg, rgba(30,255,188,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(30,255,188,1) 50%,      rgba(30,255,188,1) 75%, rgba(255,255,255,1) 75%, rgba(255,255,255,1));
  background-size: 10px 10px;
  color: #FF50E5;
}
@keyframes stripes {
  0% {background-position: 0 0;}
  100% {background-position: 50px 0;}

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
.footer{
	flex-wrap: wrap;
	flex-direction: column;
	padding: 2px;
	background-color: purple;
}
</style>