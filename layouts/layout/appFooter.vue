<template>
  <v-footer
    padless
  >
  <v-container>
     <v-card
      flat
      color="transparent"
      tile
      class=""
      width="100%"
    >

    <v-card
    flat 
    width="100%"
      color="transparent"
      class="d-md-flex justify-space-around"
    >
      <v-list 
      color="transparent"
      class="d-block"
     >
     <v-list-item-title class="ml-3 d-block" :class="colortext">my pages</v-list-item-title>
       <div 
      class="d-flex text-end align-start"
       >
          <v-list-item class="pa-0 ma-0" color="transparent">
          <v-btn icon>
            <v-icon>
              fab fa-facebook-f
            </v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item color="transparent" class="pa-0 ma-0">
          <v-btn icon>
            <v-icon>
              fab fa-twitter
            </v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item color="transparent" class="pa-0 ma-0">
          <v-btn icon>
            <v-icon>
              fab fa-google-plus-g
            </v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item color="transparent" class="pa-0 ma-0">
          <v-btn icon>
            <v-icon>
              fab fa-invision
            </v-icon>
          </v-btn>
        </v-list-item>
       </div>
      </v-list>
      
      <v-list 
      color="transparent"
      v-for="(i,n) in info" :key="n"
      >
      <v-list-item class="d-sm-block" :class="$vuetify.breakpoint.mobile?'d-block':''" >
        <v-list-item-title class="mb-3" :class="colortext">
          {{i.name}}
        </v-list-item-title>
        <v-list-item style="min-height:35px" class="ml-0 pl-0" v-for="(f,nn) in i.items" :key="nn">
          <v-list-item-subtitle class="ml-0 pl-0 m" height="20">
            <v-icon size="10" class="mr-1" :color="maincolor">
              fa-circle
            </v-icon>
            {{f}}
          </v-list-item-subtitle>

        </v-list-item>


        </v-list-item>
      </v-list>
       
        <v-list
      color="transparent"
        >
        <v-list-item class="d-block" >
          <v-list-item-title :class="colortext" class="mb-5">contact</v-list-item-title>
          <v-list-item-subtitle class="my-4" v-for="(i,n) in items" :key="n">
            <v-icon size="15" class="mr-2">{{i.icon}}</v-icon>
            {{i.name}}
          <v-divider class="py-2 mt-2"></v-divider>

          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-container>
  </v-footer>
</template>
<script>
import {mapGetters} from "vuex"
  export default {
    data: () => ({

        info:[
          {name:"For individuals",items:["Signup","login","Explore","Finder app","Features","Language settings"]},
          {name:"For businesses",items:["Business signup","Business login","Benefits","Resources","Advertise","Setup"]},
          {name:"about",items:["About us","Contact us","Privacy Policy","Terms","Help"]},
        ],
        items:[
          {icon:"fa-phone",name:"+1 (234) 222 0754"},
          {icon:"fa-comment-alt",name:"info@thunder-team.com"},
          {icon:"fas fa-map-marker-alt",name:"228 Park Ave S NY, USA"},

        ]

      
    }),
    computed:{...mapGetters(["maincolor","colortext"])}
  }
</script>