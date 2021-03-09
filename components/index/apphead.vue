<template>
    <div class="headmain">
        <v-parallax class="imgheader" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
            <v-card
            :class="$vuetify.breakpoint.mobile?'':'heaccardmd'" 
            width="291" 
            class="cardhead ind">
                    <h1 class="ind">asd</h1>
                    <h1 class="ind">asd</h1>
                    <h1 class="ind">asd</h1>
                    {{$vuetify.breakpoint.width}}
                    <h1 class="ind">asd</h1>
                    <h1 class="ind">asd</h1>
                    <div class="bot" :class="$vuetify.breakpoint.width <= 350?'nonebot':''"></div>
                    <img
                    :class="$vuetify.breakpoint.width <= 350?'nonebot':''" 
                    src="../../assets/img/bottom-shadow.png" 
                    alt="img" 
                    class="sa">
            </v-card>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>

.imgheader{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 60vh!important;

}

.cardhead{
    position: relative;
    z-index: 5;

}
.heaccardmd{
    left: 156px;

}
.bot{
   border: solid;
    border-width: 46px 146px 0px 145px;
    border-color: #fff transparent transparent transparent;
    bottom: -47px;
    position: absolute;
    left: 0;
}
.nonebot{
    display: none;
}
.sa{
    position: absolute;
    left: 0;
    bottom: -86px;
    z-index: -2;
}

    
</style>