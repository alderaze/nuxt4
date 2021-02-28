<template>
  <div >

    <v-list-item class="px-2 main" route to="/" >
        <v-list-item-avatar class="rounded-sm">
          <v-img :src="require('../../assets/img/icon.svg')"></v-img>
        </v-list-item-avatar>
        <div class="pl-2">
        <v-list-item-title class="headline font-weight-regular">Oculux</v-list-item-title>
        </div>
      </v-list-item>

      <v-divider class="py-1"></v-divider>
     <v-list-item class="px-2 ">
        <v-list-item-avatar class="rounded-sm">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <div class="pl-2">
          <p class="mb-1 font-weight-light body-1">Welcom</p>
        <v-list-item-title class="font-weight-bold">Louis Pierce</v-list-item-title>
        </div>
      </v-list-item>


      <!-- start item groups drowbdon -->

       <v-list-group
      class="color-icon pl-2 mb-0 "
      prepend-icon=""
      append-icon=""
      color="white"
      @click="colorbtn()"
      
    >
      <template  class="pl-0 ma-0 " style="margin:0px !important" v-slot:activator>
        <v-btn
        
        class="pa-1 py-0  "
        :class="$vuetify.rtl?'ml-5':'mr-5'"
        height="30"
        min-width="10"
        depressed
        :dark="hov"
        :color="hov?maincolor:'transparent'"
        >
        <v-icon size="18">
         fas fa-home
        </v-icon>
        </v-btn>
        <v-list-item-title :class="toggelicon?'':colortext">My Pages</v-list-item-title>
        <v-icon size="15" :class="toggelicon?'':colortext">{{toggelicon?"fas fa-plus":"fas fa-minus"}}</v-icon>
      </template>


      <v-list-item
      class="pl-0 ma-0 alderaze"
        v-for="(i,index) in items"
        :key="index"
        link
        @click="val(index)"
        @mouseover="ho(index)"
        @mouseleave="i.hov = false"
        router
        :to="i.router"
      >
      <div class="pl-8 d-flex">
        <span class="bord " :class="i.color || i.hov?[maincolor,'bord2']:'grey'" ></span>
        <v-list-item-title  :class="i.color || i.hov?[colortext,'activee']:''" >{{ i.title }}</v-list-item-title>

      </div>
      </v-list-item>
    </v-list-group>

    <!-- end items groups drowpdown -->



    <!-- start main pages -->

    <v-list
        dense
        nav
        class="pl-1 pt-0"
        :class="$vuetify.rtl?'pl-2':'pr-1'"
      >
        <v-list-item
          v-for="(item,index) in mypages"
          :key="index"
          link
          class="pl-0"
          @click="setpages(index)"
          @mouseover="hopage(index)"
          @mouseleave="item.hov = false"
          router
          :to="item.router"
        >
          <v-list-item-icon class="pr-0 pb-5 mr-0 ">
            <v-btn
              class="pa-1  "
              :class="$vuetify.rtl?'ml-3':'mr-3'"

              min-width="35"
              height="35"
              depressed
              :color="item.color || item.hov?maincolor:'transparent'"

              >
              <v-icon size="18">
                {{item.icon}}
              </v-icon>
              </v-btn>
          </v-list-item-icon>

          <v-list-item-content class="pb-0">
            <v-list-item-title 
              :class="item.color || item.hov?colortext:''"
            >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    <!-- end main pages -->
  


  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {

    toggelicon:true,
    coloricon:true,
    items: [
      {color:false,hov:false,title: "My Dashboard",router:"/"},
      {color:false,hov:false,title: "Web Analytics",router:"/Analytics" },
      {color:false,hov:false,title: "Event Monitoring",router:"/Monitoring" },
      {color:false,hov:false,title: "Finance Performance",router:"/Performance" },
      {color:false,hov:false,title: "Hospital Management",router:"/Management" },
      {color:false,hov:false,title: "Campaign Monitoring",router:"/Monitoring" },
    ],
    mypages:[
      {color:false,hov:false,router:"Dashboard",title:"Dashboard",icon:"fas fa-tachometer-alt"},
      {color:false,hov:false,router:"Crypto",title:"Crypto Coin",icon:"fas fa-gem"},
      {color:false,hov:false,router:"HRMS",title:"HRMS System",icon:"fas fa-rocket"},
      {color:false,hov:false,router:"Job",title:"Job Portal",icon:"fas fa-ribbon"},
      {color:false,hov:false,router:"Landing",title:"Landing Page",icon:"fas fa-mouse-pointer"},
    ],
    hov:true
    };
  },
  computed: {
    ...mapGetters(["colortext", "maincolor"]),
    ...mapGetters("naving",["minii"]),

  },
  methods: {
    ...mapMutations("naving", ["setmini"]),

    colorbtn(){
       for(let i = 0; i <= this.mypages.length-1; i++){
          this.mypages[i].color = false 
        }

      return this.toggelicon = !this.toggelicon,
            this.hov = true


    },
    val(val){
    for(let i = 0; i <= this.items.length-1; i++){
          this.items[i].color = false 
          this.items[val].color =  true  
        }
    },
     ho(val){
    for(let i = 0; i <= this.items.length-1; i++){
          this.items[i].hov = false 
          this.items[val].hov =  true  
        }
    },




    setpages(val){
    for(let i = 0; i <= this.mypages.length-1; i++){
          this.mypages[i].color = false 
          this.mypages[val].color =  true  
        }
        this.hov = false
    },
    hopage(val){
    for(let i = 0; i <= this.mypages.length-1; i++){
          this.mypages[i].hov = false 
          this.mypages[val].hov =  true  
        }
    }
  },
};
</script>
<style  scope>
.theme--light.v-list-item:not(.v-list-item--disabled){
      color: rgba(0, 0, 0, 0.87) !important;
}
.theme--dark.v-list-item:not(.v-list-item--disabled){
      color: #fff !important;
}
.main{
  cursor: pointer;
}
.bord{
  height: 2px;
  width: 10px;
  margin: 8px 8px 0px 0;
  transition: all .5s;
}

.activee{
  font-weight: 600;
}
.bord2{
  width: 40px!important;
}
.v-list-item:hover .bord{

  width: 30px;

}
.item-nav{
  transition: all .3s!important;

}
.v-list-item{
  padding-left: 0px;
  margin: 0px!important;
}
.hov:hover{
  transform: matrix(1.2, 0, 0, 1.2, 25, 0)!important;
}
.activebar{
  transform: matrix(1.2, 0, 0, 1.2, 25, 0)!important;
}

.color-icon .v-icon.v-icon {
}

</style>

