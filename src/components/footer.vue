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
        :key="link.name"
        color="white"
        text
        rounded
        class="my-0"
        :to="link.link"
      >
        {{ link.name }}
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
      links: [{
        name: 'Home',
        link: 'home'
      },{
        name: 'About Us',
        link: 'about'
      },{
        name: 'Registration',
        link: 'registration'
      },{
        name: 'School Policy',
        link: 'policy'
      },{
        name: 'Jobs',
        link: 'jobs',
      },{
        name: 'Contact Us',
        link: 'contactus'
      }],
    }),
    name: "footer"
  }
</script>