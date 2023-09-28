<script setup lang="ts">
import ChatListView from './views/ChatListView.vue'
import { ref } from 'vue'

let showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

</script>

<template>
  <button @click="openModal" class="bg-midnight hover:bg-metal text-white font-semibold py-2 px-4 rounded-full">Open Chat Modal</button>
  <ChatListView v-if="showModal" @close-modal="closeModal"/>
</template>
