<script setup>
import ButtonCom from '@/components/ButtonCom.vue'
import CardCom from '@/components/CardCom.vue';
</script>

<template>
  <!-- <ButtonCom variant="primary">Click me</ButtonCom>
  <ButtonCom variant="secondary">Click me</ButtonCom> -->


<cardsection>
  <div class="justify-self-end mr-[20px] overflow-hidden">
  <div class="grid grid-cols-4 grid-flow-row-dense gap-4 w-[80vw] relative">
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
 <!-- Ekstra herunder-->
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
  <CardCom variant="productVertical" image="public/images/udstoppetugle.png" imagevariant="imageVertical" titel="Udstoppet Ugle" price="1.900"/>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppethjort.png" titel="Udstoppet Hjort" price="3.400"></CardCom>
  <CardCom variant="productSmall" image="public/images/udstoppetræv.png" titel="Udstoppet Ræv" price="4.000"></CardCom>
  <CardCom variant="productHorizontal" image="public/images/udstoppetand.png" imagevariant="imageHorizontal" titel="Udstoppet And" price="500"></CardCom>

</div>
</div>
</cardsection>
</template>