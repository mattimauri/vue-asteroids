<template>
  <v-card>
    <v-card-title>📊 Risultati</v-card-title>
    <v-data-table :headers="headers" :items="asteroids" dense>
      <template v-slot:item.nome="{ item }">
        {{ item[0] }}
      </template>
      <template v-slot:item.data="{ item }">
        {{ item[3] }}
      </template>
      <template v-slot:item.dist="{ item }">
        {{ parseFloat(item[4]).toFixed(4) }} AU
      </template>
      <template v-slot:item.v_rel="{ item }">
        {{ parseFloat(item[7]).toFixed(2) }} km/s
      </template>
      <template v-slot:item.h="{ item }">
        {{ item[10] || 'N/A' }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: ['asteroids'],
  setup() {
    const headers = [
      { title: 'Nome', key: 'nome' },
      { title: 'Data', key: 'data' },
      { title: 'Distanza (AU)', key: 'dist' },
      { title: 'Velocità (km/s)', key: 'v_rel' },
      { title: 'Magnitudine', key: 'h' },
    ];

    return { headers };
  },
};
</script>
