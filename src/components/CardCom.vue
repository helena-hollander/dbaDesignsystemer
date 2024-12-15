<script setup>
import { defineProps } from 'vue'
import ImageCom from './ImageCom.vue';


const variants = {
  productSmall: 'bg-primarydark text-white w-[300px] h-[300px] rounded hover:bg-primarymid',
  productHorizontal: 'bg-primarydark text-white w-[630px] h-[300px] rounded hover:bg-primarymid',
  productVertical: 'bg-primarydark text-white w-[300px] h-[637px] rounded',
}

const imageVariants = {
    imageSmall: 'relative h-[200px] w-full',
    imageHorizontal: 'relative h-[200px] w-full',
    imageVertical: 'relative h-[500px] w-full',
}

function getVariantClass(variant) {
  return variants[variant] || ''
}

function getImageVariantClass(imagevariant) {
    return imageVariants[imagevariant] || ''
}

const props = defineProps({
  variant: {
    type: String,
    default: 'productSmall'
  },
  imagevariant: {
    type: String,
    default: 'imageSmall'
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
        <div :class="getImageVariantClass(imagevariant)">
        <ImageCom :image="image" variant="imageProduct" />
        <p class="text-white relative p-1 font-titelDisplay text-xl">{{titel}}</p>
        <p class="text-contrast relative p-2 text-right font-priceDisplay text-2xl">{{price}} DKK</p>
    </div>
</div>
    



</template>