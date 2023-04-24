<script setup>
import { inject } from 'vue'

import TechStackMolecule from '@molecules/TechStackMolecule.vue'

const config = inject('config')
</script>

<template>
  <div class="flex h-full text-center text-gray-700 dark:text-gray-200 m-8">
    <div class="m-auto">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
        <span class="font-normal dark:text-gray-300"> 👋 I am </span>{{ config.devName }} a
      </h2>
      <h3
        class="font-bold text-primary dark:text-primary text-2xl md:text-3xl lg:text-4xl mt-3 mb-3"
      >
        {{ config.devRole }}
      </h3>
      <p class="text-lg lg:text-xl font-semibold max-w-xl">{{ config.devDescription }}</p>

      <div class="mt-5">
        <TechStackMolecule />
      </div>
    </div>
  </div>
</template>
