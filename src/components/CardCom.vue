<script setup>
import { defineProps } from 'vue'
import ImageCom from './ImageCom.vue';


const variants = {
  productSmall: 'bg-primarydark text-white w-[300px] h-[300px] rounded hover:bg-primarymid',
  productHorizontal: 'bg-primarydark text-white w-[630px] h-[300px] rounded',
  productVertical: 'bg-primarydark text-white w-[300px] h-[637px] rounded',
}

function getVariantClass(variant) {
  return variants[variant] || ''
}

const props = defineProps({
  variant: {
    type: String,
    default: 'productSmall'
  }
})
</script>

<template>

    <div :class="getVariantClass(props.variant)">
        <div class="relative h-[200px] w-fit">
        <ImageCom image="../public/images/udstoppetugle.png" variant="imageProduct" />
        <p class="text-white relative">Udstoppet ugle</p>
        <p class="text-contrast relative">1.900 DKK</p>
    </div>
</div>
    



</template>