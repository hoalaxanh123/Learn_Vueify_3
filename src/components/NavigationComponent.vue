<template>
  <v-navigation-drawer expand-on-hover rail absolute rounded floating>
    <v-list density="compact" nav>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/11.jpg"
        title="Vuong Nguyen"
        subtitle="vuongnguyen@com"
      ></v-list-item>

      <v-divider />

      <v-list-item prepend-icon="mdi-domain">
        <router-link to="/">Home</router-link>
      </v-list-item>

      <v-list-item prepend-icon="mdi-dialpad">
        <router-link :to="{ name: 'about' }">About</router-link>
      </v-list-item>

      <v-list-item prepend-icon="mdi-call-split">
        <router-link :to="{ name: 'jobs' }">Jobs</router-link>
      </v-list-item>

      <v-divider />
      <v-list-item
        prepend-icon="mdi-call-split"
        title="Color Gallery"
        value="Color Gallery"
        @click="store.changeStyle(true)"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-call-split"
        title="Grey Gallery"
        value="Grey Gallery"
        @click="store.changeStyle(false)"
      >
      </v-list-item>
    </v-list>
    <template #append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { useGetColorGallery } from '../stores/useGetColorGallery'

  const store = useGetColorGallery()
</script>
