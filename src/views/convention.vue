<template>
  <div class="convention">
    <v-container >
      <title class="title center">
      {{statement}}
      </title>
     </v-container>
    <v-divider />
    <v-container>
      <title class="title">
        About Convention
      </title>
      <v-card-text>
        {{about}}
      </v-card-text>
    </v-container>
    <v-row>
        <v-col cols="6">
            <v-card-text class="title center">
                Solo Events
            </v-card-text>           
            
            <v-row>
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
            v-for="(solo, i) in solos"
            :key="i"
            :src="solo.src"
            reverse-transition="fade-transition"
            transition="fade-transition" 
            max-height="200" 
            max-width="320"
            contain
            >
             </v-carousel-item>
         </v-carousel>

     </v-card>
  </v-row>
  <v-row>
      <v-card-text class="center">
        Students can enter a variety of solo events & competitions.
      </v-card-text>
  </v-row>
        </v-col>
       <v-col cols="6">
            <v-card-text class="title center">
                Music/Small Group Events
            </v-card-text>           
            
            <v-row>
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
            v-for="(music, i) in music"
            :key="i"
            :src="music.src"
            reverse-transition="fade-transition"
            transition="fade-transition" 
            max-height="200" 
            max-width="320"
            contain
            >
             </v-carousel-item>
         </v-carousel>

     </v-card>
  </v-row>
  <v-row>
      <v-card-text class="center">
        Students can enter a variety of music/small group events & competitions.
      </v-card-text>
  </v-row>
        </v-col>
       
        
    </v-row>
     <v-row>
        <v-col cols="12">
            <v-card-text class="title center">
                Group Events
            </v-card-text>           
            
            <v-row>
           <v-card   
            max-width="605"
            outlined
            elevation="6"
            class="mx-auto align-content mt-1"
            max-height="455" 
            >

          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            max-height="450" 
            max-width="600"
            hide-delimiters     
         >
            <v-carousel-item
            v-for="(group, i) in group"
            :key="i"
            :src="group.src"
            reverse-transition="fade-transition"
            transition="fade-transition" 
            max-height="450" 
            max-width="600"
            contain
            >
             </v-carousel-item>
         </v-carousel>

     </v-card>
  </v-row>
  <v-row>
      <v-card-text class="center">
        Students can enter a variety of group events, and win awards.
      </v-card-text>
  </v-row>
        </v-col>
     </v-row>
    
  </div>
</template>

<script>

import solo1 from '../assets/images/conventionsolo1.jpg'
import solo2 from '../assets/images/conventionsolo2.jpg'
import solo3 from '../assets/images/conventionsolo3.jpg'
import music1 from '../assets/images/conventionmusic.jpg'
import group1 from '../assets/images/Convention.jpg'
import group2 from '../assets/images/congirls.jpg'
import group3 from '../assets/images/conventionawards.jpg'


export default {
    data () {
      return {
       solos: [
         {
           src: solo1,
         },
         {
           src: solo2,
         },
         {
           src: solo3,
         },
       ],
       music: [
           {
               src: music1
           },
       ],
        group: [
           {
               src: group1
           },
           {
               src: group2
           },
           {
               src: group3
           },
       ],
       statement: 'ACE Student Convention',
    about: "UCA attends annually two student conventions, one for 9-12 year olds, which is Jr. Convention, and one for 13 year olds and up which is Varsity Convention.  At the varsity level, our school competes for 5 days in many different fields of competition. The main categories include Academics, Art, Athletics, Music, Drama and Platform events. This page features sample photos of the week!"
 
      
     
      };
    }
}


</script>