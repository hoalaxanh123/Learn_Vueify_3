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
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
                willGetColor ? '' : '&grayscale'
              }`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${
                willGetColor ? '' : '&grayscale'
              }`"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
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
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ willGetColor: boolean }>()
  console.log('willGetColor :>> ', props.willGetColor)
</script>
