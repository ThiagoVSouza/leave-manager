<script>

  import LogoSVG from '@/assets/logo.vue'
  import Home from '@/assets/home.vue'
  import Request from '@/assets/request.vue'
  import Report from '@/assets/report.vue'
  import Settings from '@/assets/settings.vue'
  import Guide from '@/assets/guide.vue'

  export default {
    components: { LogoSVG,Home,Request,Report,Settings,Guide }
  }

</script>

<template>

  <div class="p-4 text-slate-100 text-center bg-blue-500 flex items-center justify-center gap-2">
    
    <button class="hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 rounded-lg  px-2 py-1 "><Home class="fill-white w-7 h-7" />Home</button>
    <button class="hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 rounded-lg  px-2 py-1 "><Request class="fill-white w-7 h-7" />Request</button>
    <button class="hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 rounded-lg  px-2 py-1 "><Report class="fill-white w-7 h-7" />Report</button>
    <button class="hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 rounded-lg  px-2 py-1 "><Settings class="fill-white w-7 h-7" />Settings</button>
    <button class="hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 rounded-lg  px-2 py-1 "><Guide class="fill-white w-7 h-7" />Guide</button>

  </div>
  
  
</template>

<style scoped>
</style>