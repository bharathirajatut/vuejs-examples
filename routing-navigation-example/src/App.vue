<template>

<div id="app">
      
    
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
    <v-btn to="/">Home</v-btn>
    <v-btn to="/about">About</v-btn>
    <v-btn to="/contact">Contact</v-btn>
    <v-btn to="/product/2">Product</v-btn>


    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>  

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
