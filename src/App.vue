<template lang="pug">
  #app
    NavBar
    CoverPage
  
</template>


<script>
import NavBar from './components/NavBar.vue'
import CoverPage from './components/CoverPage.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    CoverPage
  }
}
</script>

<style lang="stylus">
@font-face
  font-family oswald 
  font-style normal
  src url(https://fonts.googleapis.com/css?family=Oswald)

*
  margin 0
  -webkit-tap-highlight-color: transparent;

:focus
  outline none !important

#app 
  display flex
  font-family oswald 
  flex-wrap wrap
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #fff

</style>

