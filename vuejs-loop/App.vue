<template>
  <div id="app">
    <p v-for="x in months" :key="x">
      {{x}}
    </p>
    
    <!-- 
      <p v-for="x in months" v-bind:key="x">
      {{x}}
    </p>
    -->

    <p v-for="x in emp" v-bind:key="x">
      {{x}}
    </p>

   <p v-for="(title,value) in emp" v-bind:key="value">
      {{title}} - {{value}}
    </p>

    <p v-for="x in empList" v-bind:key="x">
      {{x.name}} - {{x.gender}}
    </p>

  </div>
</template>

<script>

export default {
  name: 'App', //component name
  components: { //export other component here
    
  },

  data(){
    return {
      months:["Jan","Feb","March","April","May"],
      emp:{name:"Raja",age:25},
      empList:[
        {name:'Mano',gender:'Male'},
        {name:'Saranya',gender:'Female'}
        ]
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
