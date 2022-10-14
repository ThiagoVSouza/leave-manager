<script setup>

import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


</script>

<template>

  <div class="flex flex-col h-screen w-screen">

    <Header></Header>
    <div class="flex-grow border-2 border-blue-700">
      <router-view/>
    </div>
    <Footer></Footer>
    
  </div>
  
</template>

<style scoped>


</style>
