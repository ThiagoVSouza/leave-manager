<script>

// import api from '@services/api';

import api from '@/services/api';

export default {

    data(){

        return {

            loading : 1,
            types : [],
            employees : [],
            message : "",
            message_title : "",
            

        }

    },
    methods: {

        loadpage() {
        
            api.get("/configuration").then((response)=>{ console.log(response.data); this.employees = response.data.employees;this.types = response.data.types; console.log(response.data.employees); this.loading = 3;  });

        },
        add_type(){

            api.put("/configuration/type", { "name" : this.get_value("type_name")   }).then(
                
                (response)=>{ 
                    
                    console.log("Insert Type:",response.data); 
                    console.log("Types:",response.data.types); 

                    if(response.data.error == "true"){

                        this.message_title = "Error";
                        this.message = response.data.error_message;

                    }else{

                        this.employees = response.data.employees;
                        this.types = response.data.types;

                        this.message_title = "Message";
                        this.message = "Type added sucecessfully!";

                    }
                    
                    this.loading = 2 ; 
                    

                });

            this.loading = 1;  

        },
        add_employee(){

            api.put("/configuration/employee", { "name" : this.get_value("employee_name")   }).then(
                
                (response)=>{ 
                    
                    console.log("Insert Employee:",response.data); 

                    if(response.data.error == "true"){

                        this.message_title = "Error";
                        this.message = response.data.error_message;

                    }else{

                        this.employees = response.data.employees;
                        this.types = response.data.types;

                        console.log("Insert Type:",response.data.types); 


                        this.message_title = "Message";
                        this.message = "Employee added sucecessfully!";

                    }
                    
                    this.loading = 2;  
                    

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

      > Settings

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

      <div class=" max-w-4xl m-auto w-full text-slate-700 dark:text-slate-400 ">

       
        <div class="flex flex-col md:flex-row py-2 pt-8 "> 
            <div class="flex justify-center items-center">

                <p class="text-xl p-2 font-bold">Types of leaves</p>

            </div>
            <div class="flex-grow  flex justify-end">

                   <div class=" relative w-full md:w-96"> 
                      
                    <input type="text"  id="type_name" class="h-14 w-full pl-4 pr-20 rounded-lg z-0 focus:shadow outline-offset-2 dark:bg-slate-600" placeholder="Type name">
                      <div class="absolute top-2 right-2">
                          
                          <button @click="add_type()" class="h-10 w-16 text-white rounded-lg dark:bg-slate-500 dark:hover:bg-slate-700 bg-red-500 hover:bg-red-600 outline-offset-2">Add</button>
                          
                      </div>
                  </div>
              
            </div>

          </div>
        
          <div class="flex flex-col">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 dark:border-slate-700 shadow  sm:rounded-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-50 dark:border-slate-700 dark:bg-[#09192f] dark:text-slate-400">
                                    Name</th>
                                
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#09192f] dark:text-slate-400">
                                    Status</th>
                                
                            </tr>
                        </thead>

                        <tbody class="bg-white dark:bg-[#172a46]">
                            <tr v-for="types in types" :key="types.id">
                               
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    <div class="text-sm leading-5 text-gray-500 dark:text-slate-400">{{types.name}}</div>
                                    
                                </td>

                                <td class="px-6 py-4  whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    <span
                                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
          
          <div class="flex flex-col md:flex-row py-2 pt-8"> 
            <div class="flex justify-center items-center">

                <p class="text-xl p-2 font-bold">Employees</p>

            </div>
            <div class="flex-grow  flex justify-end">

                   <div class=" relative w-full md:w-96"> 
                      
                    <input id="employee_name" type="text" class="h-14 w-full pl-4 pr-20 rounded-lg z-0 focus:shadow outline-offset-2 dark:bg-slate-600" placeholder="Employee Name">
                      <div class="absolute top-2 right-2">
                          
                          <button @click="add_employee()" class="h-10 w-16 text-white rounded-lg dark:bg-slate-500 dark:hover:bg-slate-700 bg-red-500 hover:bg-red-600 outline-offset-2">Add</button>
                          
                      </div>
                  </div>
              
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
                                    Status</th>
                                
                            </tr>
                        </thead>

                        <tbody class="bg-white dark:bg-[#172a46]">
                            <tr v-for="employees in employees" :key="employees.id">
                               
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    <div class="text-sm leading-5 text-gray-500 dark:text-slate-400">{{employees.name}}</div>
                                </td>

                                <td class="px-6 py-4  whitespace-no-wrap border-b border-gray-200 dark:border-slate-700">
                                    <span
                                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
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