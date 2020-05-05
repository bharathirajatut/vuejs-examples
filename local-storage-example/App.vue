<template>

<div id="app">
      
  
  
  

<v-app> 
    <v-content>

       <v-text-field style="margin-top:50px" v-model="name" 
            label="Name"
            outlined
          ></v-text-field>

<br>

  <v-btn @click="setVal" color="primary" >Set Value</v-btn>

  <v-btn @click="getVal" color="secondary" >Get Value</v-btn>

  <v-btn @click="removeVal" color="error">Remove Value</v-btn>
  
    </v-content>
</v-app>
  </div>  

</template>

<script>

export default {
  name: 'App',

  data(){
    return {
      name:''
    }
  },
  created: function () {
    this.getVal()    
  },
  methods:{
    
    setVal(){
      localStorage.setItem('name',this.name)
    },
    getVal(){
      this.name=localStorage.getItem('name')
    },
    removeVal()
    {
      localStorage.removeItem('name')
      this.name=''
    }
    
  }
  
};
</script>
