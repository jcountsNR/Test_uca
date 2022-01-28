<template>
    <v-overlay :value="overlay" :class="{ 'is-active': isOpen }">
        <v-img src="../assets/images/Jeremy.jpg">
        </v-img>
    </v-overlay>
</template>


<script>
  export default {
    data: () => ({
      overlay: false,
       isOpen: false,
      
    }),    

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 2000)
      },
    },
    isOpen: {
      type: Boolean,
      default: () => false,
    },
  }
</script>