<template>
  <div>
    <app-header></app-header>
    <p>Select Category</p>
    <!-- <p>{{cate}}</p> -->
    <router-link to='/details' class="router">
        <button
         v-for="choice in categories" :key="choice" @click="updateCategory(choice.id)">
     {{ choice.name }}
        </button>
    </router-link>
  </div>
</template>
<script>
import Header from "./Header";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      categories: [
        {name: "Any Category",id: null},
        {name: "General Knowledge",id: 9},
        {name: "Entertainment: Books",id: 10},
        {name: "Entertainment: Film",id: 11},
        {name: "Entertainment: Music",id: 12},
        {name: "Entertainment: Musical & Theatres",id: 13},
        {name: "Entertainment: Television",id: 14},
        {name: "Entertainment: Video Games",id: 15},
        {name: "Entertainment: Board Games",id: 16},
        {name: "Science & Nature",id: 17},
        {name: "Science: Computers",id: 18},
        {name: "Science: Mathematics",id: 19},
        {name: "Mythology",id: 20},
        {name: "Sports",id: 21},
        {name: "Geography",id: 22},
        {name: "History",id: 23},
        {name: "Politics",id: 24},
        {name: "Art",id: 25},
        {name: "Celebrities",id: 26},
        {name: "Animals",id: 27},
        {name: "Vehicles",id: 28},
        {name: "Entertainment: Comics",id: 29},
        {name: "Science: Gadgets",id: 30},
        {name: "Entertainment: Japanese Anime & Managa",id: 31},
        {name: "Entertainment: Cartoon & Animation",id: 32}
      ]
    };
  },
  components: {
    appHeader: Header
  },
  methods: {
    ...mapMutations([
      'updateCategory',
    ]),
    // clicked(choice) {
    //   console.log(choice);
    // }
  },
  computed:{
      // cate(){
      //     return this.$store.state.category;
      // }
  }
};
</script>
<style scoped>
.router{
    text-decoration: none;
}
button {
  width: 350px;
  cursor: pointer;
  border: 1px solid #888888;
  background: #e5e5e5;
  /* color: #121212; */
  color: #545047;
  padding: 8px;
  display: block;
  margin-top: 10px;
}
p{
    color: #888888;
}
</style>