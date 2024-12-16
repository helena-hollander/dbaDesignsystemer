<script setup>
import { defineProps } from 'vue'

const variants = {
    imageProduct: 'rounded  object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-125',
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
<div class="rounded object-cover w-full h-full overflow-hidden">
   <img :src="image" :class="getVariantClass(variant)" alt="image">
</div>
</template>