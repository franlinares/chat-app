<script setup lang="ts">
import { computed, ref } from 'vue';
import { useChatStore } from '../stores/chat';

const props = defineProps({
  showHeader: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

let message = ref('')
const chatStore = useChatStore()

const emit = defineEmits(['close-modal'])

function closeModal() {
  emit('close-modal')
}

const isInputEmpty = computed(() => message.value.trim() === '')

function sendMessage() {
  if (message.value.trim() !== '') {
    const currentDate = new Date()
    const formattedDate = currentDate.toString()

    const newMessage = {
      id: chatStore.messages.length + 1,
      text: message.value,
      date: formattedDate,
      img: chatStore.getImagesWhenUserIsLogged(),
      isLoggedIn: true
    }
    chatStore.addMessage(newMessage)
    message.value = ''
  }
}

</script>

<template>
  <div
  class="chat-modal__mask"
  >
    <div ref="chatModalWindow" class="chat-modal__window">
      <div v-if="props.showHeader"   class="chat-modal__header">
        <span class="chat-modal__title">
          {{ props.title }}
        </span>
        <span
        class="chat-modal__cross-icon"
          @click="closeModal()"
        >
          &#x2715;
        </span>
      </div>
      <div class="chat-modal__content">
        <slot />
      </div>
      <div class="chat-modal__bottom-content">
        <input class="chat-modal__input" type="text"  placeholder="Escribe un mensaje" v-model="message"  @keydown.enter="sendMessage" />
        <button class="chat-modal__button" @click="sendMessage" :disabled="isInputEmpty" data-test-id="button">
          Enviar
        </button>
      </div>  
    </div>
  </div>
</template>

<style lang="less">
.chat-modal {
  &__mask {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    width: 100vw;
    height: 100%;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__window {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 50%;
    height: 80%;
    margin: auto;
    z-index: 91;
    @media (max-width: 1023px) {
      width: 100%;
      height: 100%; 
    }
  }

  &__header {
    height: 80px;
    width: 100%;
    background-color: #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__title {
    width: 100%;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    align-items: center;
    height: 100%;
    font-weight: 700;
    color: #707070;
    font-size: 20px;
  }

  &__cross-icon {
    padding-right: 2.5%;
    padding-bottom: 12px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    color: #707070;
  }

  &__content {
    padding: 30px 4.15%;
    height: calc(100% - 80px);
    overflow-y: scroll;
  }

  &__bottom-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    height: 90px;
    border-top: 1px solid lightgrey;
  }

  &__input {
    width: 80%;
    height: 50px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    outline: none;
    padding-left: 15px;
  }

  &__button {
    width: 10%;
    background-color: lightblue;
    height: 50px;
    border-radius: 20px
  }
}
</style>




