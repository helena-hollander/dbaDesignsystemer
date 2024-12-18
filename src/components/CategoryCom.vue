<script setup>
import { defineProps } from 'vue';
import ButtonCom from './ButtonCom.vue';
import { Car, Ship, Bike, Shovel, Dumbbell, Baby, Laptop, Phone, Tv, Cat, Brush, Music } from 'lucide-vue-next';
import { computed } from 'vue';

const icons = {
    car: Car,
    bike: Bike,
    ship: Ship,
    shovel: Shovel,
    dumbbell: Dumbbell,
    baby: Baby,
    computer: Laptop,
    phone: Phone,
    tv: Tv,
    cat: Cat,
    brush: Brush,
    music: Music,
}



const props = defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

const IconComponent = computed(() => {
  // Ensure the icon prop is in lowercase to match the keys in the icons object
  const iconKey = props.icon.toLowerCase();
  return icons[iconKey] || Users; // Fallback to 'Users' icon if not found
});
</script>

<template>
    <div class="flex">
        <component :is="IconComponent" size="24" class="stroke-primarydark" />
        <ButtonCom variant="ghost" :text="text" />
    </div>
</template>