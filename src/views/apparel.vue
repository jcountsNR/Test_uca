<template>
<div class="apparel mb-12">
  
 <title class="title center">UCA Merchendise Catalog</title> 
 <br />
 <v-row class="row" cols="12">
   <v-col cols="6">
    <title class="title subtitle">Print Logo</title>
   </v-col>
   <v-col cols="6">
    <title class="title subtitle">Embroidery Logo</title>
   </v-col>
 </v-row>
 <v-row class="row mb-12">
   <v-col cols="6">
     <title>Print Logo</title>
     <v-card max-height="200" max-width="auto">
     <v-img 
      src="../assets/images/logo1.jpg"
      class="center image"
      contain
      max-height="200"
      max-width="auto"
     ></v-img>
     </v-card>
   </v-col>
    <v-col cols="6">
     <title>Print Logo</title>
     <v-card max-height="200" max-width="auto">
     <v-img 
      src="../assets/images/logo 2.jpg"
      class="center image"
      contain
      max-height="200"
      max-width="auto"
     ></v-img>
     </v-card>
   </v-col>
 </v-row>
 <br />
          
<v-row>
  <Table />
</v-row>
<v-row class="button">
     <v-btn class="button my-12 mr-12" elevation="8" color="green darken-3" dark @click="placeOrder()">Place Order</v-btn>
</v-row>
<v-row>
  <v-card-text class="note mb-12">**Orders will be emailed to Jeremy, then payments will be made to him for all orders</v-card-text>   
</v-row>
</div>

</template>
<script>
import Table from '../components/apparelTable.vue'

  export default {
    
    data: () => ({
      
      search: '',
  Print_Styles: [
          '',
          'Style 1',
          'Style 2',
        ],
             
         }),
          components: {
      Table
    },
    
    methods: {
      placeOrder() {
     //   console.log('color')
      }
    },
   
  }
</script>

<style lang="scss" scoped>
.image {
max-width: 100%;
max-height: 100%;
}
.subtitle {
  font-weight: 400  ;
  .note {
    text-align: left;
    color: black;
  }
}
</style>