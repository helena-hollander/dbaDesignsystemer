<script setup>
import { defineProps } from 'vue';
import ButtonCom from './ButtonCom.vue';

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
    </div>
</template>