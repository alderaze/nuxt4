<template>
  <div class="px-5">
    <v-navigation-drawer
      id="default-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      :clipped="clipped"
      style="background: #363636"
      :src="groundnav"
      width="260"
      height="100vh"
      mini-variant-width="85"
      enable-resize-watcher
      app
      :right="$vuetify.rtl"
    >
      <v-overlay
        z-index="-1"
        style="background: rgba(0, 0, 0, 0.5)"
      ></v-overlay>
      <app-Drawerr class="px-2" />
    </v-navigation-drawer>
    <app-Navheader 
    :drawer="drawer" 
    @changemini="drawer = $event" 
    @changeclipped="clipped = $event" 
    :clipped="clipped"
    />
  </div>
</template>

<script>
import appNavheader from "./appNavheader";
import appDrawerr from "./appDrawerr";

import { mapGetters, mapMutations } from "vuex";
export default {
  // props: ["drawerr"],

  data() {
    return {
      drawer: true,
      clipped:false,
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
  },
};
</script>





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

