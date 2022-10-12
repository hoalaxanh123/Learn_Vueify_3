import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGetColorGallery = defineStore('counter', () => {
  const willGetColor = ref(true)
  function changeStyle(newState: boolean) {
    willGetColor.value = newState
  }

  return { willGetColor, changeStyle }
})
