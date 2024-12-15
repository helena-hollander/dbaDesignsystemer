<script setup>
import { defineProps } from 'vue'
import ImageCom from './ImageCom.vue';


const variants = {
  productSmall: 'bg-primarydark text-white w-[300px] h-[300px] rounded hover:bg-primarymid',
  productHorizontal: 'bg-primarydark text-white w-[630px] h-[300px] rounded hover:bg-primarymid',
  productVertical: 'bg-primarydark text-white w-[300px] h-[637px] rounded',
}

function getVariantClass(variant) {
  return variants[variant] || ''
}

const props = defineProps({
  variant: {
    type: String,
    default: 'productSmall'
  },
  image: {
    type: String, 
    required: true
  },
  titel: {
    type: String,
    required: true
  },
  price: {
    type: Number, 
    required: true, 
  }
})
</script>

<template>

    <div :class="getVariantClass(variant)">
        <div class="relative h-[200px] w-fit">
        <ImageCom :image="image" variant="imageProduct" />
        <p class="text-white relative p-2">{{titel}}</p>
        <p class="text-contrast relative p-2 text-right">{{price}} DKK</p>
    </div>
</div>
    



</template>