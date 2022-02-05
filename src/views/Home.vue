<template>
  <div class="home">
<!--         WEBSITE IMAGE       -->
   
      <v-row no-gutters class="row collapse">
        <v-col >
      <v-card class="mx-auto pa-1 align-content homepage" elevation="6" >
        <expandable-image  
           :src="require('../assets/images/2017.jpg')"
           class="image "
           :class="{ expanded }"
           @click="expanded = true"
           >
           <i
           v-if="expanded"
           class="close-button"><svg style="width:24px;height:24px"
        viewBox="0 0 24 24"><path fill="#666666" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" 
        />
        </svg>
           </i>
           <i
           v-else
           class="expand-button">
           <svg
           style="width:24px;height:24px"
           viewBox="0 0 24 24"
           >
        <path
          fill="#000000"
          d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
        />
      </svg>
    </i>
        </expandable-image>
        
      </v-card>
      </v-col>
       
      
     <v-col >
              
  <v-card
    class="mx-auto align-content"
    max-width="320"
    outlined
    elevation="6"
      >
   
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-2 backsplash">
          School Verse
        </div>
        <v-list-item-title class="headline mb-1">
          Philippians 2:2
        </v-list-item-title>
        <v-list-item-action-text>Make my joy complete by being of the same mind, maintaining the same love, 
          <span class="highlight">UNITED</span>
           in spirit, intent on one purpose. 
        </v-list-item-action-text>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="green darken-3"        
      >
      <v-img
      src="@/assets/images/horsehead.jpg" contain/>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/schoolpolicy"
      >
        View School Policy
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card   
    max-width="320"
    outlined
    elevation="6"
    class="mx-auto align-content mt-1"
    max-height="205" 
        >

      <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    max-height="205" 
    max-width="320"
    hide-delimiters     
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      reverse-transition="fade-transition"
      transition="fade-transition" 
      max-height="200" 
      max-width="320"
    >
   </v-carousel-item>
  </v-carousel>

  </v-card>

     </v-col>
      </v-row>
    <v-divider class="mt-7"/>
<v-container class="backsplash mt-4 mx-12">
  <v-row class="center">
  <div class="ucaheader">Schedules</div>
  </v-row>
  <v-row class="center">
  <div class="subtitle">* PLEASE NOTE:  The schedules below are tentative only.  There may be some changes to this schedule prior to the first day of school.</div>
  </v-row>
</v-container>

    <!--         CLASS Schedules       -->
<v-container >
  <v-row no-gutters>

  <v-col cols="6" >
    <v-hover v-slot="{ hover }">
    <v-card
            :elevation="hover ? 12 : 2"            
            contain
            class="mx-10"             
    >
        <v-card class="ma-4 center" elevation="6" cols="6"  max-width="500px" >
          <expandable-image
          label="Tuesday Schedule" 
          :src="require('../assets/images/tuesday_schedule.jpg')" 
          max-height="200"
          class="center"
          contain
          />
    </v-card>
    </v-card>
    </v-hover>
    
   </v-col>
    
    
   <v-col cols="6" >
     <v-hover v-slot="{ hover }">
    <v-card
            :elevation="hover ? 12 : 2"            
            contain
            class="mx-10"            
    >
     <v-card class="ma-4 center" elevation="6" cols="6" max-width="450px">
      <expandable-image
        :src="require('../assets/images/Thursday_Schedule.jpg')" 
        max-height="175"
        class="center"
        contain
        />   
    </v-card>  
    </v-card>
     </v-hover> 
   </v-col>
</v-row>
</v-container>

<v-hover v-slot="{ hover }">
  <v-card
            :elevation="hover ? 12 : 2"
            height="30px" width="30px"
            contain
            icon
          >
      <v-btn height="30px" width="30px" contain icon  >
      <v-img src="@/assets/images/fb.jpg" contain height="30px" width="36px" class=" border" @click="facebook()"/>
      </v-btn>
  </v-card>
</v-hover>

    </div>
</template>


<script>
import photo1 from '../assets/images/Jeremy.jpg'
import photo2 from '../assets/images/class1.jpg'
import photo3 from '../assets/images/bball1.jpg'
import photo4 from '../assets/images/congirls.jpg'



export default {
    data () {
      return {
       slides: [
         {
           src: photo1,
         },
         {
           src: photo2,
         },
         {
           src: photo3,
         },
         {
           src: photo4,
         },
       ],
      
     
      };
    },
    
    methods: {  facebook() {
      window.open(
        "https://www.facebook.com/United-Christian-Academy-Hartsville-TN-UCA-162707253849663"
      )
    }
    },
    components: {
      
      }

  }
</script>

<style lang="scss" scoped>
.overline {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>