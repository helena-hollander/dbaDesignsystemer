<script setup>
import ImageCom from '@/components/ImageCom.vue';
import { defineProps } from 'vue'


</script>

<template>
<div class="flex bg-primarydark w-full rounded p-[2px] mx-[20px] h-[420px]">
    <div class="w-[70%] h-full">
     <ImageCom image="/images/egern4.png" variant="imageProduct" class="pr-[2px]"/>
    </div>
    <div class="w-[30%] h-full grid grid-rows-3">
        <ImageCom image="/images/egern3.png" variant="imageProduct" class="h-[33.3%] pb-[2px]"/>
        <ImageCom image="/images/egern2.png" variant="imageProduct" class="h-[33.3%] pb-[2px]"/>
        <ImageCom image="/images/egern1.png" variant="imageProduct" class="h-[33.3%]"/>
    </div>
</div>
</template>
