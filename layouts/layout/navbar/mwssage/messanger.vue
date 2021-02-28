<template>
    <div class="pt-10">
        <v-card class="rounded-tr-xl pa-2 d-flex" color="red">
          <v-avatar class="d-inline">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
          <v-card class="" flat color="transparent" >
            <v-card-text class="body-1">
              welcom alsderaze frontend web developer
              welcom alsderaze frontend web developer
              welcom alsderaze frontend web developer
            </v-card-text>
          </v-card>
        </v-card>
        <v-card class="rounded-tl-xl pa-2 mt-5 d-flex" color="green">
         
          <v-card class="" flat color="transparent" >
            <v-card-text class="body-1">
              welcom alsderaze frontend web developer
            </v-card-text>
          </v-card>
           <v-avatar class="d-inline">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
        </v-card>
        <v-textarea
          outlined
          class="mt-4"
          height="auto"
          name="input-7-4"
          label="Outlined textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
        <v-btn :color="maincolor">send</v-btn>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {

  data(){
return{
}},
  computed:{
    ...mapGetters("sendmessage",["message"]),
    ...mapGetters(["maincolor"]),
    
    }
}
</script>