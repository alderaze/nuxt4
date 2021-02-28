<template>
  <div class="px-5">
    <v-navigation-drawer
      id="default-drawer"
      v-model="drawer"
      color="teransparent"
      :mini-variant.sync="mini"
      :clipped="clipped"
      :src="groundnav"
      width="260"
      height="100vh"
      mini-variant-width="85"
      enable-resize-watcher
      app
      :right="$vuetify.rtl"
      
    >
      <app-Drawerr class="px-2" />
    </v-navigation-drawer>
    <app-Navheader 
    :drawer="drawer" 
    :showmessage="showmessage"
    :showmessage2="showmessage2"
    :drawer2="drawer2" 
    @changemini2="drawer2= $event" 
    @Ishowmessage="showmessage= $event" 
    @Ishowmessage2="showmessage2= $event" 
    @changemini="drawer = $event" 
    @changeclipped="clipped = $event" 
    :clipped="clipped"
    />


    <!-- drawr messge -->
    <v-navigation-drawer
    width="500"
      v-model="drawer2"
      right
      temporary
      fixed
    >
    <message v-if="showmessage"/>
    <message2 v-if="showmessage2"/>
    </v-navigation-drawer>
  </div>
</template>

<script>
import message from "./navbar/mwssage/massge"
import message2 from "./navbar/mwssage/massge2"
import appNavheader from "./appNavheader";
import appDrawerr from "./appDrawerr";
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["message"],

  data() {
    return {
      drawer2: false,
      drawer: true,
      clipped:false,
      showmessage:false,
      showmessage2:false
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext", "groundnav"]),
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        return this.$store.commit("naving/setmini");
      },
    },

    restdraw() {
      let r = this.drawerr;
      return r;
    },
  },
  methods: {
    ...mapMutations("naving", ["setdr", "setmini"]),
  },

  components: {
    appNavheader,
    appDrawerr,
    message,
    message2
  },
};
</script>


<style scope>
.v-navigation-drawer__border{

  background: transparent  !important;
}  
</style>


<style lang='sass'>
.nav
  overflow-y: auto !important
  overflow-x: hidden !important

#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>

