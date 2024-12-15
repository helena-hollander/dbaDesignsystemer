<script setup>
import { defineProps } from 'vue'

const variants = {
    imageProduct: 'rounded p-[2px] object-cover w-full h-full',
    imageDisplay: 'object-cover',
}

function getVariantClass(variant) {
  return variants[variant] || ''
}

const props = defineProps({
  variant: {
    type: String,
    default: 'imageProduct'
  },
  image: {
    type: String, 
    required: true
  }
})
</script>

<template>
<div class="object-cover w-full h-full">
   <img :src="image" :class="getVariantClass(variant)" alt="image">
</div>
</template>