<script setup lang="ts">
import { useDateFormat } from '../composables/dateFormatting';

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  }
})

const { formatDate } = useDateFormat()

</script>

<template>
    <div :class="[props.isLoggedIn === true ?  'flex-row': 'flex-row-reverse', 'flex', 'items-center', 'justify-end', 'mb-5']">
        <div class="text-inherit">
            <p :class="[props.isLoggedIn === true ? 'bg-bermuda' : 'bg-silver', 'text', 'flex', 'h-70', 'px-4', 'py-2', 'flex', 'flex-col', 'items-start', 'justify-center']" data-test-id="chat-date">{{ props.text }} <span class="text-xs mt-2 italic">{{ formatDate(date) }}</span></p>
        </div>
        <img :class="[props.isLoggedIn === true ? 'ml-3' : 'mr-3', 'w-8', 'h-8', 'rounded-full', 'object-cover' ]" :src="props.img" alt="">
    </div>

</template>

<style scoped>
.text {
    border-radius: 30px;
    min-height: 80px;
}
</style>