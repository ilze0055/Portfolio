<template>

	<div class="projects-container">


		<div class="projects-content">

<!------------------------------------------------------------------------------------------------- -->
			<div class="header">
			 
			</div>

<!------------------------------------------------------------------------------------------------- -->

		   <!-- WEB -->


			<div class="container " v-if="projects==1">

               <div class="row">  

				 
				<!------------------------------------------------------------------------------------------------ - --> 	
                   <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    
                             <div class="card-cover ">
                               
                             	    <a href="../assets/img/original6.png" target="_blank" class="animated fadeInUp">
                                  <img class="A" src="../assets/img/picture6.png" alt="">
                                  <img class="B" src="../assets/img/original6.png" alt="">
                                  </a> 
                                   <h2 id="imgheadline">Mobile App design</h2>        
                             </div>                       
                     
                   </dir>
                <!------------------------------------------------------------------------------------------------- -->
                   <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                     
                             <div class="card-cover ">
                             	<a href="../assets/img/original2.png" target="_blank" class="animated fadeInUp">
                                  <img class="A" src="../assets/img/picture2.jpg" alt="">
                                  <img class="B" src="../assets/img/original2.png" alt=""> 
                                  </a>      
                                  <h2 id="imgheadline">Visual brief</h2>    
                             </div>                       
                     
                   </dir>
                <!------------------------------------------------------------------------------------------------ - -->
                   <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                     
                             <div class="card-cover ">
                             	<a href="../assets/img/original4.jpg" target="_blank" class="animated fadeInUp">
                                  <img class="A" src="../assets/img/picture4.jpg" alt="">
                                  <img class="B" src="../assets/img/original4.jpg" alt=""> 

                                  </a>    
                                  <h2 id="imgheadline">Green screen removal</h2>      
                             </div>                       
                     
                   </dir>

                <!------------------------------------------------------------------------------------------------- -->
                 <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    
                             <div class="card-cover ">
                             	<a href="../assets/img/original5.png" target="_blank" class="animated fadeInUp">
                                  <img class="A" src="../assets/img/picture5.png" alt=""> 
                                  <img class="B" src="../assets/img/original5.png" alt="">
                                  </a>    
                                  <h2 id="imgheadline">Business card</h2>      
                             </div>                       
                     
                   </dir>

                <!------------------------------------------------------------------------------------------------- -->
                   <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                   
                             <div class="card-cover ">
                             	<a href="../assets/img/original3.jpg" target="_blank" class="animated fadeInUp">
                                  <img class="A" src="../assets/img/picture3.jpg" alt=""> 
                                  <img class="B" src="../assets/img/original3.jpg" alt=""> 
                                  </a>     
                                   <h2 id="imgheadline">Double exposure in Photoshop</h2>     
                             </div>                       
                     
                   </dir>
                   <!------------------------------------------------------------------------------------------------- -->
                   <dir class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    
                             <div class="card-cover ">
                             	<a href="../assets/img/original1.jpg" target="_blank" class="animated fadeInUp">
                                  <img class="A" src="../assets/img/picture1.jpg" alt=""> 
                                  <img class="B" src="../assets/img/original1.jpg" alt=""> 

                                  </a>    
                                  <h2 id="imgheadline">Sunset picture</h2>      
                             </div>                       
                     
                   </dir>
          	    

               </div>
			</div>





		</div>


	</div>
</template>



<style lang="scss">
#imgheadline {
  color:#7C4A66;
  font-size:18px;
  padding-bottom: 6px;
  font-family: arcon;
}
.projects-container {
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }
}

.projects-content {
  
  
  box-sizing: border-box;
  
  width: 100%;
  margin: auto;
}

.header {
  
  text-align: center; 
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 30px;


  button {
    background-color: transparent;
      
      text-align: center;
      border:none;
      cursor: pointer;
      outline: none;
      font-size: 20px;
      
      margin-left: 0px;
      color: #474747;  
  }

  .active-btn {
    background-color: transparent;
      
      text-align: center;
      border:none;
      cursor: pointer;
      outline: none;
      
      
      margin-left: 0px;
      color: #ff4d5a; 
  }
}





.card-cover {
	
     
     text-align: center;
     margin-bottom: 20px;
      box-shadow: 0 0 10px 2px #606060;
  
  img {
    width: 100%;
    height: auto;
        
  }
  .B{
      display: none;
    }
}

.card-cover:hover {
  
  
       .A{
        display: none;
       }
       .B{
        display: block;
       }
  
 
}

.mobile-cover {
  
     
     text-align: center;
     margin-bottom: 20px;
  
  img {
    
    height: 200px;
    width: auto;

    
  }
}

.active-btn {
  background: royalblue;
  transition: all 0.2s;
}



@media (max-width: 1069px) {
  .projects-content {
    padding-top: 90px;
  }
}

@media (max-width: 460px) {
  .projects-content {
    width: 100%;
    padding-right:0;
    padding-left:0;



    .header{
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>



<script>

import  { mapActions } from 'vuex'

export default {
  name: "projects",
  data() {
    return {
      projects: 1,
      
    }
  },

  methods : {
    ...mapActions({
      openModal : 'openModalAction',
    }),
  }
}
</script>
