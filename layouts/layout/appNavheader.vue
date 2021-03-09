<template>
  <v-app-bar
      class="mynave shownav"
      fixed
    >
    <v-container class="d-flex">
      
      <v-card width="100" height="50" class="mt-md-13 mt-sm-2" flat   color="transparent">

        <v-img max-width="100%" max-height="100%" :src="$vuetify.theme.dark?require('../../assets/img/logo2.png'):require('../../assets/img/logo.png')"></v-img>

      </v-card>

      <v-spacer></v-spacer>
     
            <v-row   class="my-5 hidden-sm-and-down">
              <v-col>
              </v-col>
              <v-col md="8">
              <div style="width:100%;position:relative">
                  <v-text-field
                  placeholder="search"
                  outlined
                  filled
                  size="10"
                  class=" rounded-pill inputseach mt-6 "


                ></v-text-field>
                <v-icon size="15" class="iconse">
                  fas fa-search
                </v-icon>
              </div>
            </v-col>
            
            </v-row>

          <v-list color="transparent" class="d-sm-flex hidden-sm-and-down">
            <v-list-item v-for="(i,n) in info" :key="n">
            <v-menu offset-y nudge-left="130" nudge-bottom="20">
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-title
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="d-flex"
                    >
                    {{i.name}}
                    <v-icon class="ml-1" size="17">fa-angle-down</v-icon>
                      
                    </v-list-item-title>
                  </template>
                  <v-list width="200">
                    <v-list-item
                      v-for="(item, index) in i.items"
                      :key="index"
                      class="moveitem"
                    >
                      <v-list-item-title 
                      @mouseleave="item.hovernav = false" 
                      @mouseover="item.hovernav = true" 
                      :class="item.hovernav?colortext:''"
                      >{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>contact</v-list-item-title>
            </v-list-item>
          </v-list>


          <!-- nav mobil -->
          <v-app-bar-nav-icon  @click="expand = !expand" class="hidden-sm-and-up"></v-app-bar-nav-icon >
          <v-card
          flat
          :class="{'shownavsm':expand,'navsm':expand}"
          class="navsm trannavsm hidden-sm-and-up">
            <v-list color="transparent"  >
              <v-list-item v-for="(i,n) in info" :key="n" class="py-1">
              <v-menu flat offset-y nudge-left="130" nudge-bottom="20">
                    <template v-slot:activator="{ on, attrs }">
                      <v-list-item-title
                        dark
                        v-bind="attrs"
                        v-on="on"
                        
                      >
                      {{i.name}}
                      <v-icon class="ml-1" size="17">fa-angle-down</v-icon>
                        
                      </v-list-item-title>
                    </template>
                    <v-list  flat style="height:100%!important"  width="100%">
                      <v-list-item
                      width="100%"
                        v-for="(item, index) in i.items"
                        :key="index"
                      >
                        <v-list-item-title 
                        class="d-flex"
                        @mouseleave="item.hovernav = false" 
                        @mouseover="item.hovernav = true" 
                        :class="item.hovernav?colortext:''"
                        >{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>contact</v-list-item-title>
              </v-list-item>
          </v-list>
          <v-divider class="mx-3 my-2"></v-divider>
          
          <v-row  >
              <v-col>
              <div style="width:100%;position:relative">
                  <v-text-field
                  placeholder="search"
                  outlined
                  filled
                  size="10"
                  class=" rounded-pill inputseach mt-6 "


                ></v-text-field>
                <v-icon size="15" class="iconse">
                  fas fa-search
                </v-icon>
              </div>
            </v-col>
            
            </v-row>
          </v-card>          
        
    </v-container>

    


    </v-app-bar>
</template>
<script>

import { mapMutations, mapGetters } from "vuex";

export default {
  mounted() {

    let el = document.querySelector(".mynave")
    window.addEventListener('scroll',() => {

      if(window.scrollY <= 0){

        el.classList.add("shownav")
      }else{
        el.classList.remove("shownav")

        
      }

    })
  },
 
  props: ["drawer","drawer2","showmessage","showmessage2","clipped"],
  data() {
    return {
        expand: true,
        info:[
          {name:"home",items:[
            {hovernav:false,title:"home1"},
            {hovernav:false,title:"home2"}
          ]
          },
          {name:"newsfeed",items:[
            {hovernav:false,title:"Newsfeed"},
            {hovernav:false,title:"Poeple Nearly"},
            {hovernav:false,title:"My friends"},
            {hovernav:false,title:"Chatroom"},
            {hovernav:false,title:"image"},
            {hovernav:false,title:"videos"},
          ]
          },
          {name:"timeline",items:[
            {hovernav:false,title:"timeline about"},
            {hovernav:false,title:"timeline album"},
            {hovernav:false,title:"timeline frinds"},
            {hovernav:false,title:"edit : basic info"},
            {hovernav:false,title:"edit : work"},
            {hovernav:false,title:"edit : intrest"},
            {hovernav:false,title:"acount sittings"},
            {hovernav:false,title:"change passowrd"}
          ]},
          {name:"pages",items:[
            {hovernav:false,title:"main1"},
            {hovernav:false,title:"main2"},
            {hovernav:false,title:"main3"},
            {hovernav:false,title:"main4"},
          ]}

        ],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext"]),
    },
    
  methods: {

    

  },



};
</script>

<style>

.shownav{
  position: absolute !important;
  top: -80px!important;
  transition:all .2s;
}
.mynave{
  transition:all .4s;

}
.inputsearch.v-text-field--filled > 
.v-input__control >
.v-input__slot, 
.v-text-field--full-width > 
.v-input__control > 
.v-input__slot, .v-text-field--outlined > 
.v-input__control > 
.v-input__slot{

  min-height: 30px;
  max-height: 30px;

}
.iconse{
  position: absolute!important;
  top:5px!important;
  right:10px!important
}
.inputsearch .v-text-field__details{
  display: none!important;
}

.inputsearch .fa-search {
      margin: 0 0 31px 0  !important;
    padding: 0 !important;
    font-size: 17px !important;
}

.trannavsm{
  transition:all .5s;
}
.navsm{
  position: fixed;
  top:56px;
  left:0;
  width: 100%;
  height: 0px;
  overflow: hidden;

}
.shownavsm{
  position: fixed;
  top:56px;
  left:0;
  width: 100%;
  height: 60vh;
}
</style>
<style scoped>
.moveitem{
  cursor: pointer;
}
</style>
