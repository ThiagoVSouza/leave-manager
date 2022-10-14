<script>

export default {

     methods:{

      nav(to){

        this.$router.push({ "path": "/"+to })

      }

    },
    

  }

</script>

<template>
  <div class="bg-blue-500 p-4 text-slate-100 text-center flex flex-row items-center justify-center">
    <div class="flex-grow md:block flex">

      <button @click="nav('')" class="m-auto md:m-0 rounded-lg p-1 px-4 gap-2 font-bold text-3xl hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 "><i>Leave Manager</i></button>
    
    </div>
    <div class="hidden md:block">

      <p  class=" text-sm flex-grow ">Developed by Thiago de Souza<br/><u><a href="https://github.com/ThiagoVSouza/leave-manager" target="_blank">Source Code</a></u></p>
      
    </div>
    
  </div>
</template>

<style scoped>
</style>