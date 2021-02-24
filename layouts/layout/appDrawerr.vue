<template>
  <div >
    <v-list-item class="d-block text-center pa-0">
        <v-list-item-avatar   v-if="minii"  width="80" height="80">
          <v-img height="100%" width="100%" >
            <img src="../../assets/img/main.jpg" alt="main" width="100%" height="100%">
          </v-img>
        </v-list-item-avatar>

        <v-list-item-avatar v-else width="150" height="150">
          <v-img height="100%" width="100%" >
            <img src="../../assets/img/main.jpg" alt="main" width="100%" height="100%">
          </v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text">sadik ali</v-list-item-title>
        </v-list-item-content>


      </v-list-item>
    <v-list-item class="text-center">
      <v-list-item-title class="text-h5 text-uppercase">
        <strong class="white--text font-weight-black">front</strong>
        <span class="font-weight-light" :class="colortext"> end</span>
      </v-list-item-title>
    </v-list-item>

     <v-list-item class="text-center d-block" >

      <v-list-item-icon class="pa-0 mx-0">
        <v-btn class="mx-1 pa-0" 
      link
      target="_blank"
      href="https://github.com/alderaze"
      fab
      dark
      x-small
      height="30px"
      width="30px"
      large :color="maincolor">
        <v-icon size="20" class="fab white--text fa-github-alt "></v-icon>
        </v-btn>
      </v-list-item-icon>

      <v-list-item-icon class="pa-0 mx-0" 
      >
        <v-btn class="mx-1 pa-0" 
      link
      target="_blank"
      href="https://codepen.io/wdnchdch"
      fab
      dark
      x-small
      height="30px"
      width="30px"
      large :color="maincolor">
      <v-icon size="20" class="fab white--text fa-codepen "></v-icon>

        </v-btn>
      </v-list-item-icon>
      
      <v-list-item-icon class="pa-0">
        <v-btn class=""
        target="_blank"
        link
        href="https://www.facebook.com/profile.php?id=100010996873202"
        fab
        dark
        height="30px"
        width="30px"
        large
        :color="maincolor" >
        <v-icon size="20" class="fab white--text fa-facebook "></v-icon>
        
        </v-btn>
      </v-list-item-icon>
    </v-list-item>

    <v-divider class="mt-1 mx-2 pt-0" color="#616161 "></v-divider>

    <v-list-item
      class="px-2 mx-2 hov color-icon rounded mt-4 item-nav"
      style=""
      router
      v-for="(item, index) in items" :key="index"
      :to="item.router"
      active-class="activebar"
      @click="val(index)"

    
    >
      <v-list-item-icon class="pa-0"  >
        <v-icon :class="item.color?colortext:'white--text'"  size="20">{{item.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-title 
      color="red" 
      class="pa-0 body-1 text-capitalize "
      :class="item.color?colortext:'white--text'"

        >{{item.title}}</v-list-item-title
      >
      
    </v-list-item>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
       contactme:["codepen","fa-github-alt","fa-facebook"],
    items: [
      {color:false,title: "Home", icon: "mdi-home-city" ,router:"/"},
      {color:false,title: "skils", icon: "fa-pencil-ruler",router:"/skils" },
      {color:false,title: "portfo", icon: "fa-laptop-code",router:"/portfo" },
      {color:false,title: "cv", icon: " fa-file-invoice",router:"/cv" },
      {color:false,title: "contact", icon: "fa-envelope-open-text",router:"/contact" },
    ],
    hov:false
    };
  },
  computed: {
    ...mapGetters(["colortext", "maincolor"]),
    ...mapGetters("naving",["minii"]),

  },
  methods: {
    ...mapMutations("naving", ["setmini"]),
    val(val){
    for(let i = 0; i <= this.items.length-1; i++){
          this.items[i].color = false 
          this.items[val].color =  true  
        }
    }
  },
};
</script>
<style  >
.item-nav{
  transition: all .3s!important;

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

