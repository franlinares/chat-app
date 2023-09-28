import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useChatStore } from '../chat';


describe('Chat Store', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })
  
    it('testing chat store', () => {
      const chatStore = useChatStore()
      chatStore.fetchMessages()
      expect(chatStore.messages).toStrictEqual([])
    })
  })


