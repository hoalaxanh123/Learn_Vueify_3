<template>
  <v-app class="overflow-hidden">
    <v-layout>
      <navigation-component />

      <v-app-bar
        absolute
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >
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
  import { useTheme } from 'vuetify'
  import NavigationComponent from './components/NavigationComponent.vue'

  const theme = useTheme()
  const toggleTheme = () =>
    (theme.global.name.value = theme.global.current.value.dark
      ? 'light'
      : 'dark')
</script>
