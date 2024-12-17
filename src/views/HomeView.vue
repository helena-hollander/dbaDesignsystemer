<script setup>

import ButtonCom from '@/components/ButtonCom.vue';
import CardCom from '@/components/CardCom.vue';
import CategoryCom from '@/components/CategoryCom.vue';
</script>

<template>
  <!-- <ButtonCom variant="primary">Click me</ButtonCom>
  <ButtonCom variant="secondary">Click me</ButtonCom> -->

<categories class="">
  <div class="absolute grid w-[16vw] translate-y-[-80px] mt-[10px] mr-[20px] border-y-2 border-r-2 border-primarymid rounded-r pl-[20px]">
    <h2 class="my-[10px] text-contrast font-titelSecondary text-3xl">KATEGORIER</h2>
    <CategoryCom text="Biler" icon="car"></CategoryCom>
    <CategoryCom text="Både" icon="car"></CategoryCom>
    <CategoryCom text="Cykler" icon="car"></CategoryCom>
    <CategoryCom text="Haveudstyr" icon="car"></CategoryCom>
    <CategoryCom text="Sport" icon="car"></CategoryCom>
    <CategoryCom text="Børn" icon="car"></CategoryCom>
    <CategoryCom text="Computer" icon="car"></CategoryCom>
    <CategoryCom text="Mobil" icon="car"></CategoryCom>
    <CategoryCom text="TV" icon="car"></CategoryCom>
    <CategoryCom text="Dyr" icon="car"></CategoryCom>
    <CategoryCom text="Hobby" icon="car"></CategoryCom>
    <CategoryCom text="Musik" icon="car"></CategoryCom>
  </div>
</categories>
<cardsection>
  <div class="justify-self-end mr-[20px] overflow-hidden p-[2px]">
  <div class="grid grid-cols-4 grid-flow-row-dense gap-4 w-[80vw] relative">
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
 <!-- Ekstra herunder-->
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>

</div>
</div>
</cardsection>
</template>