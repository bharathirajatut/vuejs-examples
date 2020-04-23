<template>
  <div id="app">
    <h3>Name:{{name}}</h3>
    <p>Addition of 10 and 20 is {{a+b}}</p>
    <p>
      Emp Name : {{emp.name}}
    </p>

    <p>
      Emp Age : {{emp.age}}
    </p>

  <p>
      Emp Gender : {{emp.gender}}
    </p>

<input v-model="salary">
<p> Salary is {{salary}} </p>
  </div>
</template>

<script>

export default {
  name: 'App', //component name
  components: { //export other component here
    
  },

  data(){
    return {
      name:"Raja",
      a:10,
      b:20,
      emp:{name:'Mano',age:20,gender:'Male'},
      salary:0
    }
  },
  methods:{
    //your function goes here
    
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
