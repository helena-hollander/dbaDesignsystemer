<script setup>

import ButtonCom from '@/components/ButtonCom.vue';
import CardCom from '@/components/CardCom.vue';
import CategoryCom from '@/components/CategoryCom.vue';
</script>

<template>
  <h2 class="absolute mb-[10px] ml-[20px] text-contrast font-titelDisplay text-3xl translate-y-[-70px] translate-x-[270px]">NYHEDER</h2>
  <!-- <ButtonCom variant="primary">Click me</ButtonCom>
  <ButtonCom variant="secondary">Click me</ButtonCom> -->
  <categories class="categorybox absolute">
   
    <h2 class="mb-[10px] ml-[20px] text-contrast font-regularOblique text-3xl translate-y-[-70px]">KATEGORIER</h2>
  <div class="text-xl translate-y-[-46px] grid gap-1 w-full mt-[10px] mr-4 border-y-2 border-r-2 border-primarymid rounded-r pl-[20px] py-3">
    <CategoryCom text="Biler" icon="car"></CategoryCom>
    <CategoryCom text="Både" icon="ship"></CategoryCom>
    <CategoryCom text="Cykler" icon="bike"></CategoryCom>
    <CategoryCom text="Haveudstyr" icon="shovel"></CategoryCom>
    <CategoryCom text="Sport" icon="dumbbell"></CategoryCom>
    <CategoryCom text="Børn" icon="baby"></CategoryCom>
    <CategoryCom text="Computer" icon="computer"></CategoryCom>
    <CategoryCom text="Mobil" icon="phone"></CategoryCom>
    <CategoryCom text="TV" icon="tv"></CategoryCom>
    <CategoryCom text="Dyr" icon="cat"></CategoryCom>
    <CategoryCom text="Hobby" icon="brush"></CategoryCom>
    <CategoryCom text="Musik" icon="music"></CategoryCom>

  </div>
</categories>

<cardsection>
  <div class="justify-self-end mr-[20px] overflow-hidden p-[2px]">
  <div class="grid grid-cols-4 grid-flow-row-dense gap-4 w-[80vw] relative">
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productHorizontal" image="public/images/egern1.png" imagevariant="imageHorizontal" titel="Udstoppet Egern" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
 <!-- Ekstra herunder-->
  <CardCom variant="productVertical" image="public/images/udstoppetugle2.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productHorizontal" image="public/images/udstoppetmuldvarp.png" imagevariant="imageHorizontal" titel="Udstoppet Muldvarp" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/glofugl.png" titel="Udstoppet fugl" price="4.000"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productVertical" image="public/images/fasan.png" imagevariant="imageVertical" titel="Fasan m.fl." price="1.900"/>
  <CardCom variant="productSmall" image="public/images/samledefritter.png" titel="Samling Fritter" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/fuglesamling.png" titel="Udstoppet Fuglesamling" price="4.000"></CardCom>
  <CardCom variant="productHorizontal" image="public/images/kronhjort.png" imagevariant="imageHorizontal" titel="Udstoppet Kronhjort" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetand.png" titel="Udstoppet And" price="4.000"></CardCom>

</div>
</div>
</cardsection>
</template>

<style>
.categorybox {
  width: calc(20% - 36px);
}
</style>