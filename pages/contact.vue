<template >
    <div>
        <h1 class="text-center text-md-h2 text-sm-h3 ma-16" :class="colortext">contact me</h1>
        <v-card class="pa-8">
            <v-card-text class="text-center title">
                Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to simon.doe@yourwebsite.com

Want to get connected? Follow me on the social channels below.
            </v-card-text>
            <div class="text-center">
                 
                    <v-btn class="mr-6"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100010996873202"
                    fab
                    dark
                    small
                    :color="maincolor" >
                    <v-icon  class="fab white--text fa-facebook"></v-icon>
        
                    </v-btn>


                    <v-btn class=""
                    target="_blank"
                    href="https://mail.google.com/mail/u/0/?tab=km#inbox"
                    fab
                    dark
                    small
                    :color="maincolor" >
                    <v-icon  class="fab white--text fa-google-plus-g "></v-icon>
        
                    </v-btn>
                </div>
        </v-card>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{...mapGetters(["colortext","maincolor"])}
    
}
</script>