import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import MessageComponent from '../MessageComponent.vue'

describe('MessageComponent', () => {
  it('renders properly and the date content is shown', () => {
    const wrapper = mount(MessageComponent, { 
      props: { 
        isLoggedIn: true,
        text: 'test',
        img: 'img-test',
        date: '2023-09-23T09:16:00'
      } 
    })
    const chatDate = wrapper.find('[data-test-id="chat-date"]')
    expect(wrapper.exists()).toBeTruthy()
    expect(chatDate.text()).toBe('test 23 septiembre 2023/9:16')
  })
})


