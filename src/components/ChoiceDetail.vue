<template>
<div>
    <app-header></app-header>
   
    <div v-if="changer">
     <div>
       <label>Number of Question:</label> <br>
    <b-form-select class="form-wid" v-model="questions" :options="noOfQuestions"></b-form-select>
  </div>
   <div>
       <label >Select Difficulty:</label> <br>
    <b-form-select class="form-wid" v-model="difficulty" :options="difficulties"></b-form-select>
  </div>
   <div class="mt-3">Questions: <strong>{{ questions }}</strong></div>
    <div class="mt-3">Difficulty: <strong>{{ difficulty }}</strong></div>
     <div class="form-btn">
<!-- <router-link tag="button" to="/quest">Start</router-link> -->
<button @click="change">Start</button>

  </div>
    </div>
    <father-component v-else :details="[questions,difficulty]"/>


</div>
</template>
<script>
import Header from './Header'
import FatherComponent from './FatherComponent'
export default {

    data(){
return{
    questions:'10',
    difficulty:'Any Difficulty',
    changer: true,
    //  details: { 'questions':questions, 'difficulty':difficulty},
        noOfQuestions: [
          { value: 10, text: 10 },
          { value: 20, text: 20 },
          { value: 30, text: 30 },
          { value: 40, text: 40 },
          { value: 50, text: 50 }
        ],
            difficulties: [
          { value: 'Any Difficulty', text: 'Any Deficulty'},
          { value: 'easy', text: 'Easy' },
          { value: 'medium', text: 'Medium' },
          { value: 'hard', text: 'Hard' }
        ],
}
    },
    
      
  
    components:{
        appHeader: Header,
        fatherComponent: FatherComponent
    },
    methods:{
      change(){
        this.changer = !this.changer
        console.log(this.changer)
      }
    }    
}
</script>
<style scoped>
form{
    margin-top: 50px;
}
.form-wid{
    max-width: 350px;
}
.form-btn{
    max-width: 350px;
    text-align: center;
}
button {
    cursor: pointer;
    border: 1px solid #888888;
    background: #888888;
    color: white;
    padding: 8px 20px 8px 20px;

}

</style>