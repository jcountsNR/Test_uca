 <template>
<div>
        <v-app-bar
      app
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      src="@/assets/images/blocks.jpg"
          >
          
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
 
      <router-link to="/home"
       tag="button" 
       class="d-flex ml-5 align-center font-weight-bold text-large "  
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
    temporary
    floating
    app
    color="green darken-4"
    class="navdrawer"
    >
      <v-list nav dense style="margin-top:1em;">
          <div v-for="(link, i) in links" :key="i">

              <v-list-item
                  v-if="!link.subLinks"
                  :to="link.to"
                  avatar
                  class="v-list-item"
                  :name="link.name"
              >
              <v-list-item-icon >
                <v-icon color="white">{{ link.icon }}</v-icon>
            </v-list-item-icon>

                  <v-list-tile-title class="navtext" v-text="link.name"/>
              </v-list-item>

              <v-list-group
                  v-else
                  :key="link.name"
                  no-action
                  :value="false"
              >
                  <template v-slot:activator>
                    <v-list-item-icon>
                      <v-icon color="white">{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title class="navsubtext" v-text="link.name" style="font-size:1.5em"/>
                  </template>

                  <v-list-item
                      v-for="sublink in link.subLinks"
                      :to="sublink.to"
                      :key="sublink.name"
                      avatar                      
                  >
                      <v-list-item-icon >
                         <v-icon color="white">{{ sublink.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title class="navsubtext" v-text="sublink.name" style="font-size:1.4em;"/>
                  </v-list-item>

              </v-list-group>

          </div>
      </v-list>
               
  
  </v-navigation-drawer>
 </div>
</template> 



<script>
export default {
  name: "navbar",
  data: () => ({
  drawer: false,
  group: null,
  links : [
    {
      to   : '/home',
      name : 'Home',
      icon : 'fa-home'
    },
    {
      to   : '/contactus',
      name : 'Contact Us',
      icon : 'fa-address-card'
    },
    {
      to   : '/about',
      name : 'About',
      icon : 'fa-school',
    },
    {
      to   : '/apparel',
      name : 'Apparel',
      icon : 'fa-tshirt',
    },
    {
      to   : '/convention',
      name : 'Convention',
      icon : 'fa-hotel',
    },
    {
      to   : '/athletics',
      name : 'Athletics',
      icon : 'fa-running',
      subLinks : [
        {
            to   : '/basketball',
            name : 'Basketball',
            icon : 'fa-basketball-ball'
        },
        {
            to   : '/volleyball',
            name : 'Volleyball',
            icon : 'fa-volleyball-ball'
        },
      ]
    },
    {
      to: '/elementary',
      name : 'Elementary',
      icon : 'fa-child'
    }
  ]   
    })
  }

</script>

<style lang="scss" scoped>
.navtext {
  font-size: 1.5em !important;
  color: white;
  text-shadow:2px 2px black;
  padding-bottom: 3px;
  padding-top: 3px;  
};
.navsubtext {
  color: white;
  text-shadow:2px 2px black;
  padding-bottom: 3px;
  padding-top: 3px;  
};
</style>