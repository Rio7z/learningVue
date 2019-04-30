<template lang="pug">
    #nav   
        .space
        img(alt="Logo" src="https://www.allaccesswithjack.co.uk/images/logo.svg")
        img.tesco(alt="Logo" src="https://www.allaccesswithjack.co.uk/images/tesco.svg")
</template>


<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style lang="stylus" scoped>

.space
    width 100px

.tesco
    height 30%
img
    height 50%

#nav
    padding 10px
    display flex
    justify-content space-between
    align-items center
    background-color black
    width 100%
    max-height 100px
</style>
