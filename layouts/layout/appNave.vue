<template>
  <div class="px-5 index">
    <app-Navheader class="index"/>
  </div>
</template>

<script>
import appNavheader from "./appNavheader";
import { mapGetters, mapMutations } from "vuex";

export default {

  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext", "groundnav"]),

  },
  methods: {
    ...mapMutations("naving", ["setdr", "setmini"]),
  },

  components: {
    appNavheader,
  },
};
</script>
<style >

.index{
  z-index: 100!important;
}
  
</style>




