import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import DeliveryComponent from '../DeliveryComponent.vue'

describe('DeliveryComponent', () => {
  it('renders properly and the delivery content is shown right', () => {
    const wrapper = mount(DeliveryComponent, { 
      props: { 
        numberVersion: 1,
        date: '2023-09-23T09:16:00',
        name: 'test',
        url: 'test-url',
        format: 'PDF',
        size: '4MB'
      } 
    })
    const deliveryContent = wrapper.find('[data-test-id="delivery-content"]')
    expect(wrapper.exists()).toBeTruthy()
    expect(deliveryContent.text()).toBe('Documento / 4MB PDF 23 septiembre 2023/9:16')
  })
})


