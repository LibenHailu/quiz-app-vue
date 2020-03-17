<template>
  <div>
      <b-nav>
    <b-nav-item disabled><b>{{ myName }}</b>  answered</b-nav-item>
    <b-nav-item disabled><b>{{answered}}/{{total}}</b></b-nav-item>
  </b-nav>
  </div>
</template>

<script>
export default {
  props:[
    "numTotal",
    "numCorrect"
  ],
  computed:{
    answered(){
      return this.$store.state.answered
    },
    total(){
      return this.$store.state.total
    },
       myName(){
      return this.$store.state.name
    }
    
  },
}
</script>
<style scoped>
  b{
    margin-right: 20px;
  }
</style>