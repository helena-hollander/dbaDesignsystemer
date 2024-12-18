<script setup>
import ImageCom from '@/components/ImageCom.vue';
import { defineProps } from 'vue'


</script>

<template>
<div class="flex bg-primarydark w-full rounded p-[2px] mb-[20px] mx-[20px] h-[400px]">
    <div class="w-[70%] h-full">
     <ImageCom image="public/images/udstoppetugle.png" variant="imageProduct" class="pr-[2px]"/>
    </div>
    <div class="w-[30%]">
        <ImageCom image="public/images/udstoppetugle.png" variant="imageProduct" class="h-[33.3%] pb-[2px]"/>
        <ImageCom image="public/images/udstoppetugle.png" variant="imageProduct" class="h-[33.3%] pb-[2px]"/>
        <ImageCom image="public/images/udstoppetugle.png" variant="imageProduct" class="h-[33.3%]"/>
    </div>
</div>
</template>
