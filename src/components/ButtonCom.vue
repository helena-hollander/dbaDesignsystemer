<script setup>
import { defineProps } from 'vue'

const variants = {
  primary: 'bg-primarydark border-2 border-primarydark text-white font-buttonPrimary hover:bg-white hover:text-primarydark hover:border-2 hover:border-primarydark p-2 rounded h-[40px] active:bg-primarymid leading-none',
  secondary: 'bg-primarymid border-2 border-white text-white font-buttonPrimary hover:bg-primarydark hover:text-white hover:border-2 hover:border-primarydark p-2 rounded h-[40px] active:bg-primarymid active:border-primarymid leading-none',
  ghost: 'text-primarydark font-buttonPrimary hover:text-contrast active:underline',
}

function getVariantClass(variant) {
  return variants[variant] || ''
}

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  text: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <button :class="getVariantClass(props.variant)">
  <p class="px-[10px]">{{ text }}</p>
  </button>
</template>