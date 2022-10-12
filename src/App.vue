<template>
  <v-app class="overflow-hidden">
    <v-layout>
      <navigation-component :show-menu="drawer" />

      <v-app-bar
        absolute
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="store.toggleShowMenu"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My app</v-toolbar-title>
        <v-btn @click="toggleTheme">toggle theme</v-btn>
      </v-app-bar>
      <v-main>
        <v-card class="ma-5 pa-5">
          <router-view />
        </v-card>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'
  import NavigationComponent from './components/NavigationComponent.vue'
  import { useUserSetting } from './stores/useUserSetting'
  const store = useUserSetting()
  const drawer = ref<boolean>(false)

  const theme = useTheme()
  const toggleTheme = () => {
    const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
    theme.global.name.value = newTheme
    localStorage.setItem('theme', newTheme)
  }
</script>
