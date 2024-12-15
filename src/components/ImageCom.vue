<script setup>
import { defineProps } from 'vue'

const variants = {
    imageProduct: 'rounded p-[2px] object-cover w-[300px] h-[220px] relative',
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
<div >
   <img :src="image" :class="getVariantClass(variant)" alt="image">
</div>
</template>