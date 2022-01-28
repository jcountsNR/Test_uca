 <template>
 <div class="Nav">
        <v-app-bar
      app
      color="green darken-3"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      src="@/assets/images/blocks.jpg"
          >
          
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
 
      <router-link to="/home"
       tag="button" 
       class="d-flex align-center font-weight-bold text-large "  
       text-color="white"
              >
                <v-img
                  alt="Mustang Logo"
                  class="shrink mr-2 "
                  contain
                  src= '@/assets/logo.png'
                  transition="scale-transition"
                  width="40"                 
                />
          <div class="navheader">United Christian Acadamy</div>
      </router-link>
             <v-spacer />
             
    </v-app-bar>
             <v-navigation-drawer
             v-model="drawer"
             absolute
             temporary
             src="@/assets/images/blocks.jpg" 
             >
               <v-list
                  nav
                  dense
                  color="green darken-3">
                 <v-list-item-group
                 v-model="group"
                 active-class="text--accent-4"
                 dark
                                 
                 >
                 <v-list-item to="/home" class="d-flex align-center" text-color="white">              
        <div class="fa fa-home mr-2"/>
          Home
                       </v-list-item>
                 <v-list-item to="/registration" class="d-flex align-center" text-color="white">
                     <div class="fa fa-pencil-square-o mr-2" />
                      Registration
                       </v-list-item>
<v-list-item to="/academics" class="d-flex align-center" text-color="white">
              <div class="fa fa-book mr-2" />
              Academics
           </v-list-item >
<v-list-item to="/athletics" class="d-flex align-center" text-color="white">
              <div class="fa fa-soccer-ball-o mr-2" />
               Athletics
            </v-list-item>

<v-list-item to="/apparel" class="d-flex align-center" text-color="white">
<div class="fa fa-shirtsinbulk mr-2" />
            Apparel
           </v-list-item>
<v-list-item to="/convention" class="d-flex align-center" text-color="white">
              <div class="fa fa-group mr-2" />
              Convention
              </v-list-item>
<v-list-item to="/contactus" class="d-flex align-center" text-color="white">
             <div class="fa fa-user-circle mr-2" />
              Contact Us
           </v-list-item>
<v-list-item to="/about" class="d-flex align-center " text-color="white">
              <div class="fa fa-file-text-o mr-2" />
               About
               </v-list-item>  
      
<v-list-item  to="/jobs" class="d-flex align-center" text-color="white">
               <div class="fa fa-briefcase mr-2" />
              Jobs
           </v-list-item>
                 </v-list-item-group>
               </v-list>
               <v-spacer />
               
  
             </v-navigation-drawer>

 </div>
        
     
    
</template> 



<script>


export default {
  name: "navbar",
  data: () => ({
  drawer: false,
  group: null,
   
    })
  }

</script>