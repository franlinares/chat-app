<script setup lang="ts">
import { useDateFormat } from '../composables/dateFormatting';


const props = defineProps({
 numberVersion: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  format: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
})

const { formatDate } = useDateFormat()


</script>

<template>
     <div class="flex-row-reverse flex items-center justify-end mb-5 border-t border-b border-silver">
        <div class="text-inherit h-90 w-full flex flex-col justify-center">
            <h2>Versión: {{ props.numberVersion }}</h2>
            <a :href="props.url" target="_blank" class="flex, h-70, px-4, py-2, flex, flex-col, items-start, justify-center">{{ props.name }}</a>
            <p data-test-id="delivery-content">Documento / {{ props.size }} {{ props.format }} <span class="text-xs mt-2 italic">{{ formatDate(props.date) }}</span></p>
        </div>
       
    </div>
</template>