import { type Message } from '@/model/message'
import axios from 'axios'
import { defineStore } from 'pinia'

const baseUrl = 'http://localhost:3000'


export const useChatStore = defineStore('chat', {
  state: (): { 
    messages: Message[]
   } => ({
    messages: []
  }),
  getters: {
    getMessages: (state) => (): Message[] => {
      return state.messages
    },
    getImagesWhenUserIsLogged: (state) => (): string => {
      let img = ''
      const loggedInMessage = state.messages.find((message) => message.isLoggedIn === true)
      if (loggedInMessage) {
        img = loggedInMessage.img
      }
      return img
    },
  },
  actions: {
    fetchMessages() {
      const url = `${baseUrl}/chat`
      return axios.get<Message[]>(url)
        .then((response) => {
          console.log(`messages call success`)
          this.messages = response.data

          this.messages.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
        })
        .catch((error) => {
          console.error('Error in messages:', error)
        })
    },
    addMessage(newMessage: Message) {
      const url = `${baseUrl}/chat`
      return axios.post<Message>(url, newMessage)
        .then((response) => {
          console.log('New message added')
          this.messages.push(response.data)
        })
        .catch((error) => {
          console.error('Error adding message:', error)
        })
    },
  }
})
