<template>
  <v-card class="pa-4 mb-4">
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="dateMin" label="Data minima" type="date" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="dateMax" label="Data massima" type="date" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="distMax"
            :items="distanze"
            item-title="text"
            item-value="value"
            label="Seleziona la distanza massima"
            outlined
            dense
          ></v-select>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'

const dateMin = ref(new Date().toISOString().split('T')[0]);
const dateMax = ref(new Date(new Date().setDate(new Date().getDate() + 60)).toISOString().split('T')[0]);

const distanze = [
  { text: '0.05 AU (50x distanza Luna)', value: '0.05' },
  { text: '0.1 AU (100x distanza Luna)', value: '0.1' }
];

const distMax = ref(distanze[0].value);

watch([dateMin, dateMax, distMax], () => {
  emit('fetch-data', { 
    dateMin: dateMin.value, 
    dateMax: dateMax.value, 
    distMax: distMax.value 
  });
});

const emit = defineEmits(['fetch-data']);
</script>