<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Contents titol="Llista de la Classe"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Contents from '@/components/Contents.vue'

export default {
  name: 'Home',
  components: {
    Contents
  }
}
</script>

