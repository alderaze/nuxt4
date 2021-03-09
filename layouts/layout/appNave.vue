<template>
  <div class="px-5">
    <app-Navheader/>
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




