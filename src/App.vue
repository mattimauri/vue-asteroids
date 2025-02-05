<template>
  <v-app>
    <v-container>
      <h1 class="text-center">🚀 Asteroidi Vicini alla Terra</h1>
      <Filters @fetch-data="fetchAsteroids" />
      <AsteroidsTable :asteroids="asteroids" />
    </v-container>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import Filters from './components/Filters.vue';
import AsteroidsTable from './components/AsteroidsTable.vue';
import axios from 'axios';

export default {
  components: { Filters, AsteroidsTable },
  setup() {
    const asteroids = ref([]);

    const fetchAsteroids = async (filters) => {
      const url = `/api/cad.api?date-min=${filters.dateMin}&date-max=${filters.dateMax}&dist-max=${filters.distMax}&sort=date&limit=10`;
      try {
        const response = await axios.get(url);
        asteroids.value = response.data.data || [];
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };

    return { asteroids, fetchAsteroids };
  },
};
</script>