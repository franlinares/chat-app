<script setup lang="ts">
import { computed, onMounted } from 'vue';
import ChatModal from '../components/ChatModal.vue';
import ChatComponent from '../components/ChatTextComponent.vue';
import { useChatStore } from '../stores/chat';

const chatStore = useChatStore()

let title = 'Comentarios'
const emit = defineEmits(['close-modal'])

onMounted(() => {
    chatStore.fetchMessages()
})

const getMessages = computed(() => chatStore.getMessages())

function closeModal() {
    emit('close-modal')
}
</script>

<template>
    <div class="flex flex-col">
        <ChatModal v-if="getMessages"  @close-modal="closeModal"  :show-header="true" :title="title">
            <ChatComponent :chats="getMessages" />
        </ChatModal>
        
    </div>
</template>
