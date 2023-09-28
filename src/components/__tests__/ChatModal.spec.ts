import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useChatStore } from '../../stores/chat';

import { mount } from '@vue/test-utils'
import ChatModal from '../ChatModal.vue'


describe('ChatModal', () => {
    beforeEach(() => {
    setActivePinia(createPinia())
    })
  it('renders properly', () => {
    const wrapper = mount(ChatModal, { 
      props: { 
        showHeader: true,
        title: 'test'
      } 
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})


