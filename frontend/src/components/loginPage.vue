<!-- eslint-disable prettier/prettier -->
<template>

  
      <div class="container">
        <div>
        <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
          Staff Login </h1>
        </div>
        <div class="mx-auto flex flex-col items-top md:flex-row pt-10" >
          <div class="w-fit my-4 md:ml-10 md:my-0">
          <div class="justify-content">
          <div class="align-items">
          <hr>
          <label for="uname"> Username </label>
          <input type="text"  
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
          placeholder="Enter Username" required><br><br>
  
          <label for="psw"> Password </label>
          <input type="password"  
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:cursor-pointer"
          placeholder="Enter Password" required><br><br>
          <hr>
  
          <button 
            class="bg-red-700 text-white rounded hover:bg-red-600"
            type ="submit"
            >
            Login</button>
            </div>    
          </div>
       </div>
    </div>
  </div>  
</template>