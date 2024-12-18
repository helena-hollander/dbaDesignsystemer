<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CardCom from "./components/CardCom.vue";
import ButtonCom from './components/ButtonCom.vue';

</script>

<template>
  <header>
    <div class="wrapper bg-primarymid w-full h-[180px] content-end">

      
     <div class="justify-self-end self-end">
      <nav class="grid grid-cols-3 w-[30vw] h-full justify-items-center py-2 items-center">
        <ButtonCom variant="ghost" text="DBA Guide"/>
        <ButtonCom variant="ghost" text="Opret bruger"/>
        <ButtonCom variant="ghost" text="Kunderservice"/>
      </nav>
     </div>
    </div>
    <div class="justify-self-end">
    <searchbar class="grid grid-cols-10 justify-items-end items-center w-[60vw] left-0 my-[20px]">
    <div class="bg-white col-span-5 col-end-10 border-primarymid border-2 rounded w-full h-[40px] relative mr-[20px] justify-self-end">
    </div>
    <ButtonCom variant="primary" text="SØG" class="my-[10px] col-start-10 mr-[20px]"></ButtonCom>
    </searchbar>
  </div>
  </header>
 

<body class="bg-white">
  

  <RouterView />
</body>
</template>

