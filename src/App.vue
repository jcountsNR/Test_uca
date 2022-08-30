<template id="app">
   <v-app>
    <Navbar />
      <v-main class="mb-12">
       <router-view class=" ma-8"/>
      </v-main>
       <br/>
    <Footer  />
  </v-app>
</template>

<script>
import Navbar from '@/components/navBar.vue'
import Footer from '@/components/footer.vue'


export default {
  name: 'App',

  components: {
    Navbar,
    Footer  
  },
  
};
</script>
<style lang="scss">
@import '@/styles/index.scss';
</style>