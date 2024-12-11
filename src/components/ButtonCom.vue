<script setup>
import { defineProps } from 'vue'

const variants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400',
}

function getVariantClass(variant) {
  return variants[variant] || ''
}

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <button :class="getVariantClass(props.variant)">
    <slot></slot>
  </button>
</template>