import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSetting = defineStore('counter', () => {
  const willGetColor = ref(true)
  const showMenu = ref<boolean>(false)

  const changeStyle = (newState: boolean) => {
    willGetColor.value = newState
  }

  const toggleShowMenu = () => {
    showMenu.value = !showMenu.value
  }

  return { willGetColor, showMenu, changeStyle, toggleShowMenu }
})
