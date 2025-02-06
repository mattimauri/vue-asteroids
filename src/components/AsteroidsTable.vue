<template>
  <v-card>
    <v-card-title>📊 Risultati</v-card-title>
    <v-data-table :headers="headers" :items="formattedAsteroids" dense>
      <template v-slot:item.nome="{ item }">
        {{ item.nome }}
      </template>
      <template v-slot:item.data="{ item }">
        {{ item.data }}
      </template>
      <template v-slot:item.dist="{ item }">
        {{ item.dist }} AU
      </template>
      <template v-slot:item.v_rel="{ item }">
        {{ item.v_rel }} km/s
      </template>
      <template v-slot:item.h="{ item }">
        {{ item.h || 'N/A' }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
  asteroids: {
    type: Array,
    required: true,
  },
});

const headers = [
  { title: 'Nome', key: 'nome' },
  { title: 'Data', key: 'data' },
  { title: 'Distanza (AU)', key: 'dist' },
  { title: 'Velocità (km/s)', key: 'v_rel' },
  { title: 'Magnitudine', key: 'h' },
];

const formattedAsteroids = computed(() => {
  return props.asteroids.map((asteroid) => ({
    nome: asteroid[0], 
    data: asteroid[3], 
    dist: asteroid[4] ? parseFloat(asteroid[4]).toFixed(4) : 'N/A', 
    v_rel: asteroid[7] ? parseFloat(asteroid[7]).toFixed(2) : 'N/A', 
    h: asteroid[10] || 'N/A', 
  }));
});

</script>