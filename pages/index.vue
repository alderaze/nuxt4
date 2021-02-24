<template>
  <v-container>
    <h1
    :class="colortext"
    class="text-center pa-16 pt-8 mb-8 font-weight-black text-md-h1 text-sm-h3 tit"> 
    frontend web  
    </h1>
    <v-card class="px-7"  flat color="transparent">
      <v-row>
       
        <v-col md="6" sm="6" cols="12">
          <v-card  class=" pt-4" flat color="transparent">
            <v-card-title :class="colortext" class="display-1  font-weight-black">
              sadek aldi
            </v-card-title>
            <p class="pl-5" >frontend web developer</p>
            <v-card-text class="title">
              I am Frontand web developer An online learner, a graduate, I can create a website from scratch to the end, using all the necessary tools
            </v-card-text>
          </v-card>
        </v-col>

         <v-col md="6" sm="6" cols="12">
          <v-card height="300px">
            <v-img height="100%" width="100%">
              <img width="100%" height="100%" src="../assets/img/main.jpg" alt="main">
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-divider class="mt-14"></v-divider>
    <v-card flat color="transparent" class="pt-16">
      <v-card  class="text-center py-16">
        <v-card-title 
        :class="colortext"
         class="d-block display-2 font-weight-black text-uppercase  text-center">information for me</v-card-title>
        <v-list height="50" class="text-center">
          <v-list-item-content >
            <v-list-item-title  class="title pr-3 text-uppercase">
            name : <span class="text-capitalize">sadek ali sadek</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list>
        <v-list height="50" class="text-center">
          <v-list-item-content>
          <v-list-item-title class="title pr-3 text-uppercase"> 
            age : <span class="text-capitalize">26 Year</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list >
        
        <v-list height="50" class="text-center "> 
          <v-list-item-content>
          <v-list-item-title class="title pr-3 text-uppercase">
            I am from: <span class="text-capitalize">Minya Mallawi</span> 
            </v-list-item-title>
          </v-list-item-content>

        </v-list>
        <v-list height="50" class="text-center ">
          <v-list-item-content>
        <v-list-item-title class="title pr-3 text-uppercase">
          graduate : <span class="text-capitalize">University of Arts Department of Philosophy</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list>
       
      

      </v-card>

    </v-card>
  </v-container>
</template>

<script>

import {  mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["colortext", "maincolor"]),

  },
}
</script>
