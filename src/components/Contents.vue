<template>
  <p>Soy el componente HELLO-WORLD</p>
  <h2>{{titol}}</h2>
 
<div class="llista-classe">
  <div v-for="item of items" v-bind:key="item">
    {{convertirMajuscules(item)}}
  </div>

</div>

<button class="btn btn-danger">Cambiar</button>

</template>

<script>
export default {
  name: 'Contents',
  props: {
    titol: String
  },
  data() {
    return {
      items: ["Pete", "Mark", "Jamie"]
    }
  },
  methods: {
    convertirMajuscules(text) {
      return text.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
