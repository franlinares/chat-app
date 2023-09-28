<script setup lang="ts">
import { type PropType } from 'vue';
import DeliveryComponent from '../components/DeliveryComponent.vue';
import MessageComponent from '../components/MessageComponent.vue';
import { type Message } from '../model/message';

const props = defineProps({
  chats: {
    type: Array as PropType<Message[]>,
    default: () => []
  }
})

</script>

<template>
    <div v-if="props.chats" v-for="chat of chats" :key="chat.id" >
      <MessageComponent v-if="!chat.type" :isLoggedIn="chat.isLoggedIn" :text="chat.text" :date="chat.date" :img="chat.img"/>

      <DeliveryComponent v-else :numberVersion="chat.numberVersion" :date="chat.date" :name="chat.name" :url="chat.url" :size="chat.size" :format="chat.format"/>
    </div>
</template>

<style scoped>
.text {
    border-radius: 30px;
    min-height: 80px;
}
</style>