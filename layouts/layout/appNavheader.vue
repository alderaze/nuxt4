<template>
  <v-app-bar 
  fixed 
  app 
  elevation="0" 
  height="57"
  :color="$vuetify.theme.isDark?'transparent':'white'"  
  :class="{clipped:clipped}">
    <v-app-bar-nav-icon v-if="toggel" @click.stop="restdraw" >
      <v-icon>
        mdi-dots-vertical
      </v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon v-else @click.stop="restdraw" >
      <v-icon>
      mdi-format-list-bulleted
      </v-icon>
    </v-app-bar-nav-icon>
    

    <v-btn
        icon
      @click="setmini"
      >
        <v-icon>mdi-{{ `chevron-${mini ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
    <v-btn
    icon
    @click.stop="restclipped"
    >
      <v-icon>
        mdi-application
      </v-icon>
    </v-btn>

    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="restdraw"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>
      <v-badge
      color="green"
      content="2"
      class="mr-3"
      overlap
        >
    <v-btn icon
    @click.stop="
    restdraw2(drawer2),
    Ishowmessage(showmessage),
    Ishowmessage2(showmessage2)
    ">
      <v-icon>
      far fa-comments
      </v-icon>
    </v-btn>
    </v-badge>

    <v-badge
      color="green"
      content="6"
       overlap
       class="mr-2"
        >
    <v-btn icon
    class="pa-0" 
    @click.stop="
    restdraw2(drawer2),
    Mshowmessage(showmessage),
    Mshowmessage2(showmessage2)
    ">
      <v-icon>
      far fa-bell
      </v-icon>
    </v-btn>
    </v-badge>


    <v-divider class="py-1 divid"></v-divider>

  </v-app-bar>
</template>
<script>
import massge from "./navbar/mwssage/massge"
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["drawer","drawer2","showmessage","showmessage2","clipped"],
  data() {
    return {
      toggel:true,
      dialog:false,
      show: false,
      model: 1,
      infos: [
        "Mike John Responded to your email",
        "You have 5 new tasks",
        "You're now friends with Andrew",
        "Another Notification",
        "Another one",
      ],
      user: ["portfile", "sitting"],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext"]),
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        console.log("asdsd");
      },
    },
    
  },
  methods: {
    ...mapMutations("naving", ["setmini", "retdrawer"]),
    restdraw() {
      this.toggel = !this.toggel
      let r = this.drawer;
      r = !r;
      this.$emit("changemini", r);
      console.log(this.drawer);
    },
    
    restdraw2(val) {
      let r = val
      r = !r;
      this.$emit("changemini2", r);
    },


    Ishowmessage(val) {
       let r = val
      r = true;
      console.log("alderaze1")
      this.$emit("Ishowmessage", r);

    },
    Ishowmessage2(val) {
      let r = val
      r =false
      this.$emit("Ishowmessage2", r);
    },



    Mshowmessage(val) {
       let r = val
      r = false;
      console.log("alderaze1")
      this.$emit("Ishowmessage", r);

    },
    Mshowmessage2(val) {
      let r = val
      r =true
      this.$emit("Ishowmessage2", r);
    },






  restclipped() {
      let r = this.clipped;
      r = !r;
      this.$emit("changeclipped", r);
  },
  },


  components:{massge}

};
</script>

<style>
.clipped{
  left: 0!important;
}
.bar {
  background: transparent !important;
}
</style>

<style scoped>
.divid{
  position: absolute;
  bottom: -8px;
  width: 100%;
}
.home.v-btn:not(.v-btn--round).v-size--default {
  min-width: 60px !important;
}
.v-list-item :hover .v-list-item--link:before {
  background-color: red !important;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>