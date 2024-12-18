<script setup>
import { defineProps } from 'vue';
import ButtonCom from './ButtonCom.vue';
import { Users } from 'lucide-vue-next';


const props = defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
       <ButtonCom variant="ghost" :text="text" />
       <Users size="24" class="stroke-primarydark"/>
    </div>
</template>