<template >
	

<div id="giffy"></div>

  
</template>

<script >
	export default {
		computed: {
			total() {
				return this.$store.getters.total;
			}
		}
	}
</script>



<style  >
#giffy {
  position: absolute;
  top: 0;
  left: 0;
    background:url(../assets/img/front.gif) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
    z-index: -999
}
 .text-box {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; }

.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 100;
  animation-name: moveInleft;
  animation-duration: 2s;
  color: white;
  font-family:comfortaa;
   }

.heading-primary-sub {
  display: block;
  font-size: 16.5px;
  
  font-family: Arial;
  margin-top: 10px;
  animation-name: moveInright;
  animation-duration: 2s;
  color: white; }

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
    

    
</style>