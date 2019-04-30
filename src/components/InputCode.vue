<template lang="pug">
    #InputCode
        .container
            input#code(maxlength="8")
        .container
            button Submit

</template>

<script>
export default {
    name: "codeButton"
}
</script>

<style lang="stylus" scoped>
.container
    display flex
    justify-content center

button
    height 50px
    padding 10px
    width 100px
    border none
    text-decoration: none
    text-align center
    background-color white
    cursor pointer
    margin 10px
    transition-duration: 0.3s
    &:hover
        color black
    &:active
        background-color black
        color white

input
    height 30px
    padding 10px
    width 300px
    text-align center
    font-size 2em
    border black
    border 10px
    background-color white
    opacity 50%
    margin-bottom 20px
</style>

