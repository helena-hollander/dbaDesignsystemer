<script setup>
import GalleryCom from '@/components/GalleryCom.vue';
import UserCardCom from '@/components/UserCardCom.vue';
import MessageCom from '@/components/MessageCom.vue';
</script>

<template>
    <div class="grid grid-cols-10 grid-rows-10 gap-[20px]">
     <div class="col-span-6 row-span-2"><GalleryCom></GalleryCom></div>
    <div class="col-span-4 mr-[40px]"><UserCardCom></UserCardCom></div>
    <div class="col-span-4 row-span-2 mr-[40px]"><MessageCom></MessageCom></div>
    </div>
</template>