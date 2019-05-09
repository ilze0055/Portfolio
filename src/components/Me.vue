<template >
	<div>
     <div class="home-content">

        <div class="img-container zoomIn animated">
          <img class="me" src="../assets/img/moi.jpg" alt="" style="width: 250px;">
        </div>

        <h1><span>Ilze </span>Freimane-Locmele</h1>


        <h4>Inspired by nature, inspired by everything around me. Searching for new and innovative ways to see ordinary things differently. A bit of something abstract a bit outside the rules.</h4>

        <div class="socialMedia animated fadeInUp">
              <a href="https://1drv.ms/b/s!AqK5dn6tlV1vgewOVPf8cdF6zQltWg" target="_blank"><i class="#">CV</i></a>
              <a href="https://linkedin.com/in/ilze-freimane-locmele-187257180" target="_blank"><i class="fab fa-linkedin"></i></a>
        </div>

     </div>
  </div>
</template>





<style lang="scss">
   
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");



.home-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 350px;

  }
  
.img-container{
    height: 240px;
    width: 240px;
    margin:0 auto;
    display:block;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    animation-delay: 0.4s;
   }
   
h4{
    font-weight: normal;
    animation-name: moveInright;
    animation-duration: 2s;
    font-size: 14px;
    color: #C9BACF;
    line-height: 19px;
    }

h1{
    display: inline-block;
    animation-name: moveInleft;
    animation-duration: 2s;
    font-weight: normal;
    font-family: arcon;
    font-size: 30px;
    color:#7C4A66;

  }
    span{
      color:#C9BACF;
    }
  


@keyframes homeSkew{
  from{transform: translateY(50px) skewY(20deg);}
  50%{transform: translateY(0) skewY(20deg);}
  to{transform: skewY(0)}
}


@keyframes moveInleft {
  0% {
    opacity: 0;
    transform: translateX(-20px); }
  80% { }
  100% {
    opacity: 1;
    transform: translate(0); } }

@keyframes moveInright {
  0% {
    opacity: 0;
    transform: translateX(20px); }
  80% { }
  100% {
    opacity: 1;
    transform: translate(0); } }



 .socialMedia{
  font-size: 16px;
  margin-top: 20px;
  text-decoration: none;
  a {
    color: #E2BB7A;
    padding: 8px;
    text-decoration: none;
  }
  a:hover {
    color: #7C4A66;
    text-decoration:none;
    
  }

 }   
       
</style>