<script >


import api from '@/services/api';

export default {

    data(){

        return {

            loading : 1,
            types : [],
            employees : [],
            message : "",
            message_title : "",
            requests: [],
            search_name: "",
            

        }

    },
    methods: {

        loadpage() {
        
            api.get("/stats").then((response)=>{ console.log(response.data); this.employees = response.data.employees; this.types = response.data.types; this.loading = 3;  });

        },
               
        
        get_value(id){

            return document.getElementById(id).value;

        }

    },
    mounted() {

        console.log("Mounted!");

        this.loadpage();

    }

}





</script>

<template>
  
  <div class="relative w-full h-full flex items-start justify-center flex-col overflow-hidden">

<div class="py-2 px-7 bg-blue-700 dark:bg-[#0c203c] dark:text-[#8fadd9] w-full text-white text-xl">

  > Report

</div>
<div class="relative w-full h-full flex-grow">


    <div v-if="loading === 1" class="absolute bg-slate-100 dark:bg-slate-800 h-full w-full flex justify-center items-center overflow-y-auto overflow-x-hidden">
        
        <img src="images/loader.svg" class="w-14 h-14" />


    </div>
    <div v-else-if="loading === 2" class="absolute bg-slate-100 dark:bg-slate-800 h-full w-full flex justify-center items-center overflow-y-auto overflow-x-hidden">
        
        <div class="w-full md:w-96 bg-white dark:bg-[#172a46] border-gray-200  shadow sm:rounded-lg">

            <div class="w-full p-4 pb-8">

                <div class="w-full p-2 flex justify-center text-lg">

                <p><b>{{this.message_title}}</b></p>

                </div>
                <div class="w-full p-6 pb-8 flex justify-center">

                    <p>{{this.message}}</p>

                </div>
                <div class="w-full pt-1 flex justify-center">

                    <button @click="this.loadpage();" class="h-10 w-20 text-white rounded-lg dark:bg-slate-500 dark:hover:bg-slate-700 bg-red-500 hover:bg-red-600 outline-offset-2 transition-colors">Ok</button>
                                

                </div>

            </div>

        </div>

    </div>

<div v-else class="absolute bg-slate-100 dark:bg-slate-800 h-full w-full overflow-y-auto overflow-x-hidden">

  <div class=" max-w-4xl m-auto w-full text-slate-700 dark:text-slate-400">

   
    <div class="flex flex-col md:flex-row p-2 pt-8 "> 
        <div class="flex justify-center items-center">

          <p class="text-xl p-2 font-bold">Requests per employees</p>

        </div>
        <div class="flex-grow  flex justify-end">


           
          
        </div>

      </div>
    
      <div class="flex flex-col">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 dark:border-slate-700 shadow  sm:rounded-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#09192f] dark:text-slate-400">
                                    Name</th>
                                
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#09192f] dark:text-slate-400">
                                    Quantity</th>
                                
                            </tr>
                        </thead>

                        <tbody class="bg-white dark:bg-[#172a46]">
                            <tr  v-for="employees in employees" :key="employees.id">
                               
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    <div class="text-sm leading-5 text-gray-500 dark:text-slate-400">{{employees.name}}</div>
                                </td>

                                <td class="px-6 py-4  whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    {{employees.qty}}
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    <div class="flex flex-col md:flex-row p-2 pt-8 "> 
        <div class="flex justify-center items-center">

          <p class="text-xl p-2 font-bold">Requests per type of leave</p>

        </div>
        <div class="flex-grow  flex justify-end">


           
          
        </div>

      </div>
    
      <div class="flex flex-col">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 dark:border-slate-700 shadow  sm:rounded-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#09192f] dark:text-slate-400">
                                    Name</th>
                                
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#09192f] dark:text-slate-400">
                                    Quantity</th>
                                
                            </tr>
                        </thead>

                        <tbody class="bg-white dark:bg-[#172a46]">
                            <tr v-for="types in types" :key="types.id">
                               
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    <div class="text-sm leading-5 text-gray-500 dark:text-slate-400">{{types.name}}</div>
                                </td>

                                <td class="px-6 py-4  whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    {{types.qty}}
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      
      

  </div>

</div>

</div>

</div>


</template>

<style scoped>
</style>