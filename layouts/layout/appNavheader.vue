<template>
  <v-app-bar fixed app  :class="{clipped:clipped}">
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
   <div class="pos">

      <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="transparent"
          depressed
          class=" px-2 mx-3"
        >
        login
        <v-icon  class="pa-2">mdi-account</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="username*"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

   </div>
    

  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["drawer","clipped"],
  data() {
    return {
      toggel:true,
      dialog:false,
      messages: 4,
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
  restclipped() {
      let r = this.clipped;
      r = !r;
      this.$emit("changeclipped", r);
    
    
  },
  },

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