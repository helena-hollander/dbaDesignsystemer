<script setup>
import ButtonCom from './ButtonCom.vue';
import { User } from 'lucide-vue-next';


</script>

<template>
    <div class="flex bg-primarydark w-full h-[200px] rounded mx-[20px] p-[20px]">
    <div class="w-[116px] h-[116px] bg-white rounded">
        <User class="h-full w-full stroke-contrast"></User>
    </div>
    <div class="px-[10px] text-white leading-none">
        <p class="font-titelDisplay text-2xl leading-none">Navn Mellemnavn Efternavn</p>
        <p class="font-regular text-xl">Adresselinje 1</p>
        <p class="font-regular text-xl ">(Adresselinje 2)</p>
        <p class="font-regularOblique text-white translate-y-[16px]">Bruger siden april 2012</p>
    </div>
    <div class="absolute text-xl h-fit translate-x-[410px] translate-y-[126px]">
        <ButtonCom variant="secondary" text="Følg" class="leading-none"></ButtonCom>
    </div>
    </div>
</template>