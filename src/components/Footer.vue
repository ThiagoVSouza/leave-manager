<script>

  import LogoSVG from '@/assets/logo.vue'
  import Home from '@/assets/home.vue'
  import Request from '@/assets/request.vue'
  import Report from '@/assets/report.vue'
  import Settings from '@/assets/settings.vue'
  import Guide from '@/assets/guide.vue'
  

  export default {
    components: { LogoSVG,Home,Request,Report,Settings,Guide },
    methods:{

      nav(to){

        this.$router.push({ "path": "/"+to })

      }

    },
    computed: {

      homeColor(){ 

        return this.$route.name == "home" ? ' bg-blue-700 dark:bg-[#172a46] ' : '' ;

      },
      requestColor(){ 

        return this.$route.name == "request" ? ' bg-blue-700 dark:bg-[#172a46] ' : '' ;

      },
      configurationColor(){ 

        return this.$route.name == "configuration" ? ' bg-blue-700 dark:bg-[#172a46] ' : '' ;

      },
      reportColor(){ 

        return this.$route.name == "report" ? ' bg-blue-700 dark:bg-[#172a46] ' : '' ;

      },
      guideColor(){ 

        return this.$route.name == "guide" ? ' bg-blue-700 dark:bg-[#172a46] ' : '' ;

      }

    }

  }
  
</script>

<template>

  <div class="p-2 text-slate-100 text-center dark:bg-[#09192f] bg-blue-500 flex items-center justify-center gap-2">
    
    <button @click="nav('')" :class="[homeColor]" class="dark:hover:bg-[#172a46] hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 dark:text-[#8fadd9] rounded-lg  px-2 py-2 "><Home class="fill-white w-7 h-7 dark:fill-[#8fadd9]" />Home</button>
    <button @click="nav('request')" :class="[requestColor]"  class="dark:hover:bg-[#172a46] hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 dark:text-[#8fadd9] rounded-lg  px-2 py-2 "><Request class="fill-white w-7 h-7 dark:fill-[#8fadd9]" />Request</button>
    <button @click="nav('report')" :class="[reportColor]"  class="dark:hover:bg-[#172a46] hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 dark:text-[#8fadd9] rounded-lg  px-2 py-2 "><Report class="fill-white w-7 h-7 dark:fill-[#8fadd9]" />Report</button>
    <button @click="nav('configuration')" :class="[configurationColor]"  class="dark:hover:bg-[#172a46] hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 dark:text-[#8fadd9] rounded-lg  px-2 py-2 "><Settings class="fill-white w-7 h-7 dark:fill-[#8fadd9]" />Settings</button>
    <button @click="nav('guide')" :class="[guideColor]"  class="dark:hover:bg-[#172a46] hover:bg-blue-700 transition-colors  flex flex-col items-center justify-center text-slate-100 dark:text-[#8fadd9] rounded-lg  px-2 py-2 "><Guide class="fill-white w-7 h-7 dark:fill-[#8fadd9]" />Guide</button>

  </div>
  
  
</template>

<style scoped>
</style>