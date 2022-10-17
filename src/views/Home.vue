<script>



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
        
            api.get("/home").then((response)=>{ console.log(response.data); this.requests = response.data.requests; this.loading = 3;  });

        },
        search() {
            
            api.post("/home", { "search" : this.get_value("search")   } ).then(
                
                (response)=>{ 
                    
                    console.log(response.data); 
                    this.requests = response.data.requests; 
                    this.loading = 3;  

                    this.search_name = response.data.search;
                
                });

            this.loading = 1;

            

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

  > Home

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

  <div class=" max-w-4xl m-auto w-full text-slate-700  dark:text-slate-400 ">

   
    <div class="flex flex-col md:flex-row p-2 pt-8 "> 
        <div class="flex justify-center items-center">

          
        </div>
        <div class="flex-grow  flex justify-end">

                <div class=" relative w-full md:w-96"> 
                      
                      <input id="search" type="text" class="h-14 w-full pl-4 pr-20 rounded-lg z-0 dark:bg-slate-600 focus:shadow outline-offset-2" placeholder="Search employee name or type">
                        <div class="absolute top-2 right-2">
                            
                            <button @click="this.search()" :value="this.search_name" class="h-10 w-16 text-white rounded-lg dark:bg-slate-500 dark:hover:bg-slate-700 bg-red-500 hover:bg-red-600 outline-offset-2 transition-colors">Search</button>
                            
                        </div>
                    </div>
           
          
        </div>

      </div>
    
      <div class="flex flex-col">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 dark:border-slate-700 shadow sm:rounded-lg">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-[#09192f] dark:text-slate-400">
                                Employee</th>

                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-[#09192f] dark:text-slate-400">
                                Type</th>
                            
                            
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-[#09192f] dark:text-slate-400">
                                Date</th>
                            
                        </tr>
                    </thead>

                    <tbody class="bg-white dark:bg-[#172a46]">
                        <tr v-for="requests in requests" :key="requests.id">
                           
                            <td class="text-gray-700 dark:text-slate-400 px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                {{requests.employee_name}}
                            </td>

                            <td class="text-gray-700 dark:text-slate-400 px-6 py-4  whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                {{requests.type_name}}
                            </td>

                            <td class="text-gray-700 dark:text-slate-400 px-6 py-4  whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                {{requests.date}}
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