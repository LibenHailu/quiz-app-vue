<template>
  <div id="main">
    <div id="main-content">
      <app-header></app-header>
      <p>Enter Your Name:</p>
      <form>
        <input type="text" placeholder="Enter Name" @input="updateName" />
        <router-link to="/prefs" tag="button">Submit</router-link>
      </form>
      <p>Your Name is: {{name}}</p>
      <!-- <p>{{totalQuestions}}</p> -->
    </div>
    <footer>
      <p>Developed by Liben and Yab</p>
    </footer>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import Header from "./Header";
export default {
  components: {
    appHeader: Header
  },
  computed: {
    // ...mapGetters(["totalQuestions"]),
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    updateName(e) {
      return this.$store.commit("updateName", e.target.value);
    }
  }
};
</script>
<style scoped>
#main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex-grow: 1;
}
footer {
  color: #888888;
  border-top: 1px solid #eeeeee;
  margin-top: 16px;
  padding: 16px 0;
}

input {
  border: 1px solid #cccccc;
  padding: 8px;
}

button {
  cursor: pointer;
  border: 1px solid #888888;
  background: #888888;
  color: white;
  padding: 8px;
}
p{
    color: #888888;
}
</style>