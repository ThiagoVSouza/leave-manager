<script setup>

</script>

<template>
    <div class="relative w-full h-full flex items-start justify-center flex-col overflow-hidden">

<div class="py-2 px-7 bg-blue-700 w-full text-white text-xl dark:bg-[#0c203c] dark:text-[#8fadd9]">

  > Request new leave

</div>
<div class="relative w-full h-full flex-grow">

<div class="absolute bg-slate-100 dark:bg-slate-800 h-full w-full overflow-y-auto overflow-x-hidden flex justify-center items-start md:items-center ">

  <div class="w-full md:w-96 bg-white dark:bg-[#172a46] border-gray-200  shadow sm:rounded-lg">

      <div class="w-full p-4 pb-8">

          
            <label for="type" class="block p-2 text-base font-medium text-gray-700 dark:text-slate-400  ">Employee</label>
            <select id="type" name="type" autocomplete="type-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>

            <label for="type" class="block p-2 text-base font-medium text-gray-700 dark:text-slate-400  ">Type of Leave</label>
            <select id="type" name="type" autocomplete="type-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>

            <label for="type" class="block p-2 text-base font-medium text-gray-700 dark:text-slate-400  ">Date</label>
            <div class="w-full flex flex-row">
                <select id="type" name="type" autocomplete="type-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
                <select id="type" name="type" autocomplete="type-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                <select id="type" name="type" autocomplete="type-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                </select>
            </div>

            <label for="type" class="block p-2 text-base font-medium text-gray-700 dark:text-slate-400 ">Note</label>
            <textarea id="type" name="type" autocomplete="type-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

            <div class="w-full pt-2 flex justify-end">

              <button class="h-10 w-20 text-white rounded-lg dark:bg-slate-500 dark:hover:bg-slate-700 bg-red-500 hover:bg-red-600 outline-offset-2 transition-colors">Request</button>
                            

            </div>

      </div>


  </div>

</div>

</div>

</div>
</template>

<style scoped>
</style>