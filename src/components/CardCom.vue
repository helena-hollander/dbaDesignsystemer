<script setup>
import { defineProps } from 'vue'
import ImageCom from './ImageCom.vue';


const variants = {
  productSmall: 'bg-primarydark text-white ring-2 ring-primarydark w-full h-[300px] rounded active:bg-primarymid active:ring-primarymid',
  productHorizontal: 'bg-primarydark text-white ring-2 ring-primarydark w-full h-[300px] rounded  col-span-2 active:bg-primarymid active:ring-primarymid',
  productVertical: 'bg-primarydark text-white ring-2 ring-primarydark w-full h-[616px] rounded  row-span-2 active:bg-primarymid active:ring-primarymid',
}

const imageVariants = {
    imageSmall: 'relative h-[220px] w-full overflow-hidden',
    imageHorizontal: 'relative h-[220px] w-full overflow-hidden',
    imageVertical: 'relative h-[536px] w-full overflow-hidden',
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

 <div :class="getVariantClass(variant) + ' group'">
    <div :class="getImageVariantClass(imagevariant)">
        <ImageCom :image="image" variant="imageProduct" />
    </div>
    <div class="p-2">
        <p class="text-white relative font-titelDisplay text-xl">{{titel}}</p>
        <p class="text-contrast relative text-right font-priceDisplay text-2xl">{{price}} DKK</p>
    </div>
</div>
    



</template>