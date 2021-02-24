<template>
    <v-app dark >
          <v-navigation-drawer
            permanent
            width="250px"
            fixed
            app
            dark
          >
          <span class="po"></span>
            <v-list-item class="px-2">
              <v-list-item-avatar width="200" height="200" class="d-block">
                <v-img :src=img></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item class="text-center">
            <v-list-item-title class="text-h5 text-uppercase">
              <strong :class="colortext" class=" text-md-h4 font-weight-black">sadik</strong>
              <strong class="white--text text-md-h4 font-weight-black">ali</strong>
              <strong :class="colortext" class=" text-md-h4 d-block font-weight-black">sadik</strong>
            </v-list-item-title>
          </v-list-item>

            <v-divider class="mt-4"></v-divider>
            <h4 class="text-md-h5 font-weight-bold text-center white--text " >frontend</h4>
            <v-divider></v-divider>
            
            
            <div class="text-center pt-5">
              <v-icon size="30px" class="d-block text-center">
              fas fa-user-secret
            </v-icon>
            </div>

            <v-divider class="mt-4 "></v-divider>
            <p
              color="red" 
              class="pa-0  ma-0 title text-capitalize white--text text-center"
                >contact information</p>
            <v-divider class="pt-0"></v-divider>
            




            <v-list class="">
              
              <v-list-item
              v-for="item in info"
              :key="item.title"
              link
            >
              <v-list-item-icon class="pr-0 mr-1">
                <v-icon size="15">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="body-2">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
            <v-divider class="pt-0"></v-divider>
            <p
              color="red" 
              class="pa-0  ma-0 title text-capitalize white--text text-center"
                >personal information
            </p>
            <v-divider class="pt-0"></v-divider>

             <v-list class="">
              
              <v-list-item
              v-for="item in infopres"
              :key="item.title"
              link
            >
              <v-list-item-content>
                <v-list-item-title class="body-2">{{ item.icon }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="body-2 pr-0 mr-0">{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
          </v-navigation-drawer>
          <v-main>
            <v-container fluid>
              <nuxt />
            </v-container>
          </v-main>
      
    </v-app>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name:"laycv",
  data() {
    return {
      img:require("../assets/img/main.jpg"),
      info: [
          { title: 'Minya Mallawi', icon: 'fas fa-map-marker-alt' },
          { title: '01157332800', icon: 'fas fa-phone-alt' },
          { title: 'mohamed0120460@gamil.com', icon: 'far fa-envelope' },
        ],
      infopres: [
          { name: 'sadik ali sadik ', icon: 'name:' },
          { name: '1995/3/9', icon: 'Date of Birth :' },
          { name: 'Egyptian', icon: 'Nationality :' },
          { name: 'single', icon: 'Marital status :' },
        ],
    }

  },
  computed:{
    ...mapGetters(["maincolor","colortext"])
  },

}
</script>

<style scoped>
.po{
  position: absolute;
  top:0;
  left:0;
  border-top: 112px solid hsl(201deg 100% 60%);
  border-left: 125px solid hsl(201deg 100% 60%);
  border-right: 125px solid transparent;
  border-bottom: 125px solid transparent;
}

</style>