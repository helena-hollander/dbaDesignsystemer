<script setup>
import { User } from 'lucide-vue-next';


</script>
<template>
<div class="w-full h-[400px] border-primarymid border-[2px] rounded ml-[20px]">
    <p class="m-[10px] text-xl font-titelDisplay text-contrast">Beskeder</p>
    <div class="grid grid-cols-10 w-full h-full">
    <div class="w-[40px] h-[40px] bg-contrast rounded ml-[10px]">
        <User class="w-full h-full stroke-white"></User>
    </div>
    <div class="col-span-5 border-[2px] border-primarymid rounded h-fit text-primarydark ml-[10px] p-[10px] font-regularOblique">Hej,<br>Hvad hedder det søde egern?</div>
    </div>
</div>
</template>