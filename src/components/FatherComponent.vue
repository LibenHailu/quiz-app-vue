<template>
  <div>
     <div class="loader" v-if="loadCheck"></div>
    
    <div v-if="show">
    <QuestionHeader />


   <h5>Time</h5>
    <b-progress v-model="value" :value="time" :max="parseInt(details[0])" class="mb-3" ></b-progress>


<!-- <p>{{details}}</p> -->
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8" mx="auto" offset-lg="2" offset-md="2" offset-sm="2">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
            :numTotal="numTotal"
          />
        </b-col>
      </b-row>
    </b-container>
    </div>






<div v-if="over">
    <b-card
    title="Quiz App"
    tag="article"
 
    class="mb-2"
  >
    <b-card-text>
     Game Over...
    </b-card-text>

    <router-link tag="b-button" to="/prefs">Replay</router-link>

  </b-card>
</div>


<div v-if="won">
    <b-card
    title="Quiz App"
    tag="article"
 
    class="mb-2"
  >
    <b-card-text>
     You Won...
    </b-card-text>

  <router-link tag="b-button" to="/prefs">Replay</router-link>
  </b-card>
</div>







    
  </div>
</template>

<script>
import QuestionHeader from "./QuestionHeader.vue";
import QuestionBox from "./QuestionBox";
export default {
  name: "app",
  components: {
    QuestionHeader,
    QuestionBox
  },
  props:["details"],
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      loader:true,
       value: 0,
       dangerValue:'',
       over: false,
       show: true,
       won: false

    };
  },
  computed:{
    loadCheck(){
      // console.log(this.questions.length)
      if(this.questions.length > 0){
        return this.loader = !this.loader
      }
    },
        time(){
      setInterval(()=>{
        if(this.value < this.details[0]){
        this.value++
        }
        else{
          this.over = true
          this.show = false
        }
      }, 20000);
      console.log(this.value);
    },
    // checkDanger(){
    //   dangerPoint = (parseInt(this.details[0])*90)/100
    //   console.log(dangerPoint)
    //   if(this.value === dangerPoint){
    //     this.dangerValue = 'danger'
    //   }

    // }
    

    
 
  
  },
  methods: {
    next() {

      
      this.index++;


        if(this.index === (this.questions.length-1)){
        setTimeout(()=>{
this.show = false
this.won = true
        },2)
      }
    
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
        this.$store.commit('incrementAnswered')
        
      }
      this.numTotal++;
      this.$store.commit('incrementTotal')
    }
  },
  mounted: function() {
 
    if(this.details[1] === "Any Difficulty" && this.$store.state.category === null){
  var api = "https://opentdb.com/api.php?amount="+this.details[0]+"&type=multiple";
    console.log(api);
    fetch(api, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });

    }
      else if(this.$store.state.category === null){
  var api = "https://opentdb.com/api.php?amount="+this.details[0]+"&type=multiple"+"&difficulty="+this.details[1];
    console.log(api);
    fetch(api, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });
    }
       else if(this.details[1] === "Any Difficulty" && this.$store.state.category !== null){
  var api = "https://opentdb.com/api.php?amount="+this.details[0]+"&type=multiple"+"&category="+this.$store.state.category;
    console.log(api);
    fetch(api, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });

    }
    else{
    var api = "https://opentdb.com/api.php?amount="+this.details[0]+"&type=multiple&difficulty="+this.details[1]+"&category="+this.$store.state.category;
    console.log(api);
    fetch(api, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = jsonData.results;
      });

    }
  
    
  }



};
</script>

<style>
/* #yab-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 1.5s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
h5{
  color: #888888;
}

</style>