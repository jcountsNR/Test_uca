<template>
    <v-footer
    color="green darken-2"
    padless
    class="footer"
    fixed
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-0"
        :to="link"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="green darken-4 py-1 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>United Christian Academy</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>



<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Registration',
        'Policy',
        'Jobs',
        'Contact Us',
      ],
    }),
    name: "footer"
  }
</script>