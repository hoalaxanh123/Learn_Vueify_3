<template>
  <div>
    <v-row>
      <v-col
        v-for="n in 100"
        :key="n"
        cols="12"
        xs="1"
        sm="4"
        md="3"
        lg="2"
        xl="1"
      >
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            :elevation="isHovering ? 12 : 2"
            v-bind="props"
            style="cursor: pointer"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${
                n * 5 + 10
              }${endURL}`"
              :lazy-src="`https://picsum.photos/10/6?image=${
                n * 5 + 10
              }${endURL}`"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
              @click="
                copyURL(
                  `https://picsum.photos/500/300?image=${n * 5 + 10}${endURL}`
                )
              "
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- <v-alert
      ref="test"
      type="success"
      position="fixed"
      location="bottom center"
      icon="mdi-home"
      transition="scale-transition"
      :closable="true"
      >I'm a success alert.</v-alert
    > -->
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useUserSetting } from '../stores/useUserSetting'

  const store = useUserSetting()

  const endURL = computed<string>(() => {
    return store.willGetColor ? '' : '&grayscale'
  })

  const copyURL = (URL: string) => {
    console.log('URL :>> ', URL)
    navigator.clipboard.writeText(URL)
    alert('Copied!')
  }
</script>
