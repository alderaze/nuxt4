<template>
  <v-card color="basil" class="px-10" height="100%">
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab
        class="over mr-4"
        @mouseover="mas1.hov = true"
        @mouseleave="mas1.hov = false"
        @click="activ1"
      >
      <v-btn
      class="rounded-pill activbtn pa-0"
      :class="mas1.hov||mas1.color?['white--text','mybtn']:''"
      :color="mas1.hov||mas1.color?maincolor:'transparent'"
      depressed
      >
        {{mas1.title}}
        {{mas1.color}}
      </v-btn>
      </v-tab>
      <v-tab
        class="over mr-4"
        @mouseover="mas2.hov = true"
        @mouseleave="mas2.hov = false"
         @click="activ2"
      >
      <v-btn 
      
      :class="mas2.hov||mas2.color?['white--text','mybtn']:''"
      class="rounded-pill activbtn pa-0"
      :color="mas2.hov || mas2.color?maincolor:'transparent'"
      depressed
      >
        {{mas2.title}}

      </v-btn>
      </v-tab>
       <v-tab
        class="over mr-4"
        @mouseover="mas3.hov = true"
        @mouseleave="mas3.hov = false"
         @click="activ3"
      >
      <v-btn 
      :class="mas3.hov?['white--text','mybtn']:''"
      class="rounded-pill activbtn pa-0"
      :color="mas3.hov || mas3.color?maincolor:'transparent'"
      depressed
      >
      {{mas3.title}}
      </v-btn>
      </v-tab>
    </v-tabs>
    

    <v-tabs-items v-model="tab" >
      <!-- firsi item -->
      <v-tab-item>
        <massenger/>
      </v-tab-item>
      <!-- nthe item -->

      <v-tab-item
      >
        <massenger2/>

      </v-tab-item>

      <!-- thre item -->
      <v-tab-item
      >
        <massenger3/>
      </v-tab-item>

    </v-tabs-items>

  </v-card>
</template>
<script>
import massenger from './messanger'
import massenger2 from './massge2'
import massenger3 from './message3'
import {mapGetters} from "vuex"
  export default {
   
    
    data () {
      return {
        tab: null,
        hover:false,
        mas1:{title:"chat",hov:false,color:false},
        mas2:{title:"list",hov:false,color:false},
        mas3:{title:"groups",hov:false,color:false},
        
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },

    computed:{...mapGetters(["maincolor",'colortext'])},
    methods:{
      activ1(){
        this.mas1.color = true
        this.mas2.color = false
        this.mas3.color = false
      },
      activ2(){
        this.mas2.color = true
        this.mas1.color = false
        this.mas3.color = false
      },
      activ3(){
        this.mas3.color = true
        this.mas2.color = false
        this.mas1.color = false
      },
    },
    components:{massenger,massenger2,massenger3}
  }
</script>

<style>
/* Helper classes */
.over{

    flex: none!important;
    background: transparent!important;
    color: transparent!important;
}

.activbtn{
  padding: 0px 6px !important;
  transition:all .3s !important;
}
.activbtn.mybtn{
  padding: 0px 16px !important;
}

.v-tabs-slider-wrapper{
    display: none;
}
</style>