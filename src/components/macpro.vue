<template>
 <div>
 <h1>World of gadgets</h1>
  <h2>Все самые большие технологические изобретения, созданные человеком – самолет, автомобиль, компьютер – больше свидетельствуют о его лени, чем о высоком интеллекте.</h2>
   <div>В начале недели к нам приехал полный комплект: новенький Mac Pro, Pro Display XDR и Pro Stand. Стойку и дисплей я уже показал вам: А теперь давайте посмотрим на непосредственно сам Mac Pro.На самом деле, первое, на что обращаешь внимание в новом Mac Pro вовсе не «тёрка для сыра», а ручки, расположенные сверху системного блока. За них удобно таскать компьютер (правда, он очень тяжёлый). И ещё они являются частью шасси компьютера (о чём ниже).Самое крутое — модульность и то, как легко можно получить доступ к внутренним элементам «прошки»:Берётесь за ручку, расположенную в центре, поднимаете и разворачиваете:За эту же ручку удобно поднимать крышку корпуса:А за ним начинается уж совсем красота:Но это не самая интересная сторона. Самое интересное начинается вот тут:Не видно ничего. Но как же сладко!Прямо над картой Radeon Pro Vega II находится плата ускорителя Apple AfterburnerТолько посмотрите, как выглядят платы:У нас версия с двумя картами Radeon Pro Vega II. Они обе спрятаны под специальными пластиковыми кожухами:Эта пластинка является связующим звеном обеих карт. Вот только пластиковые кожухи пачкаются довольно сильно:Тут уже видны части задних кулеров:Технически, их должно хватить на обдув всего корпуса. Именно для свободного попадания воздуха к кулерам и сделаны прорези в корпусе, напоминающие тёрку.Плашки памяти также находятся под защитным кожухом. Всего доступно два блока, куда можно вставить оперативную память. Максимум — 12 плашек.Чтобы открыть кожух, нужно потянуть за те языки, что находятся слева от кожухов.А это очень наглядная инструкция, как устанавливать оперативную память. Максимальный объём — 1,5 ТБ.Наша же комплектация такая:
	16-ядерный процессор Intel Xeon 
</div>
  
  <a href=""> Новости</a>
  <a href="">Обзоры</a> 
  </div>
</template>


<script>
export default {
    name:'macpro'
}
</script>

<style  scoped>
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
.footer{
	flex-wrap: wrap;
	flex-direction: column;
	padding: 2px;
	background-color: purple;
}
</style>



