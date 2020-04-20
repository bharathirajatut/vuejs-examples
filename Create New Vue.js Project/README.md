# Create New Vue.js Project

Myself Angular Developer. Today I am going to start learning Vue.js. I just wanted to share how to learn Vue.js in a comparison with Angular. 

If you are a Angular developer and you want to learn Vue.js, this series of tutorials will be helpful to you.

Vue.js is very similar to Angular. If you know Angular well, then learning the Vue.js is very easy.

## Variables:

In Angular, we will create a variable inside a class, outside of the function. But in Vue.js, we will create variables inside the data property, like below.

```
data:{
name:"Raja"
}
```

## Functions:
Functions will be created inside the methods property like below.
```
methods: {
      sayHello : function() {
         return "Hello";
      }
```
So the Vue.js is very similar to Angular.

# Create Vue.js Project

## Step1.
We can create Vue.js project in two different ways. One way is easy setup like jQuery. I will show the other way in the next tutorial.

Like jQuery add Vue.js script in your HTML file 

```
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## Step2.

Create a div with an id property. The id will be useful to map the Vue instance.

```
<div id="app">
</div>
```

## Step3.

Create Vue instance like below and create a variable inside the data property.
```
<script type="text/javascript">
    new Vue({
        el:"#app",
        data:{
            name:"Raja"
        }
    })
</script>
```

The el will be used to map the Vue instance. So the variables and functions will be executed only inside the app id.

## Step4.

Display the name using double curly brace like Angular.

```
<div id="app">

    <h3>Hello {{name}} </h3>
</div>
```

## Preview Project

Simply download the demo-app.html file and open the file using the browser. It will display output. No need command like ng serve in Angular for this approach.

1. It is a simple library. Not a framework. 
2. It is Like jQuery.
3. The Vue instance will work inside the app id only.
4. The code writing is very similar to Angular only
