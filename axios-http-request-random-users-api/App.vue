<template>
  <div id="app">
    
    <p v-for="x in usersList" :key="x.id.value">
     {{x.name.first}} - {{x.gender}}
    </p>
    <button v-on:click="getData">Load Data</button>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App', //component name
  components: { //export other component here
    
  },
  data(){
    return {
      usersList:[]
    }
  },
  methods:{
    //your function goes here
    getData()
    {
      axios.get('https://randomuser.me/api/?results=5').then(response=>{
        console.log(response.data);
        this.usersList=response.data["results"]
      }).catch(err=>{
        console.log(err);
      })
    }
    //function ends here
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
