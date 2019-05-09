<template>
	<dir id="Header">
  <nav>
   
    <router-link to="/" class="home">Home</router-link>   
    
    <router-link to="/Contact" class="items">Contact</router-link> 
    <router-link to="/Projects" class="items">Portfolio</router-link>
    <router-link to="/Me" class="items">About Me</router-link>
   
  </nav>

  </dir>


  
</template>


<style lang="scss">
     
     #Header nav {
       width: 95%;
       color: #E2BB7A;
       min-height: 50px;
       font-family:arcon;

     }
     

     #Header .home {
      margin-left: 1.5em;
      margin-top: 0.6em;
      float: left;
      height: 35px;
      font-family: arcon;
      color: #7C4A66;
      text-decoration: none;
      font-size: 16px;
     }

    

     #Header .items{
      margin-top: 1.4em;
      float: right;
      margin-left: 15px;
      outline: none;
      font-size: 15px;
      color: #E2BB7A;
     
      text-decoration: none;

            &:hover {
             outline: none;
             color: #7C4A66;
             text-decoration: none;
                 }
            &:focus {
             outline: none;
             color: #7C4A66;
             text-decoration: none;
                 }
                 
                 &:actived {
             outline: none;
             color: #7C4A66;
             text-decoration: none;
                 }     


     }


     

</style>


 