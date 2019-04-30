<template lang="pug">
    #cover 
        .container
            img(src="https://www.allaccesswithjack.co.uk/images/lock-up.svg")
        .container
            InputCode
</template>

<script>
import InputCode from './InputCode.vue'

export default {
    name: "CoverPage",
    components: {
        InputCode
    }
}

</script>



<style lang="stylus" scoped>

img 
    width 300px

.container
    display flex
    flex-wrap wrap
    justify-content center
    width 100%
    
    
#cover
    display flex
    flex-wrap wrap
    justify-content center
    height 100vh
    width 100%
    background-image url("https://www.allaccesswithjack.co.uk/images/gig2.jpg")
    background-repeat no-repeat
    background-size cover
</style>
