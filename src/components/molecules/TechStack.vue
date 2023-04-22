<script setup>
import JavascriptAtomIcon from '@atoms/icons/JavascriptAtomIcon.vue'
import ReactAtomIcon from '@atoms/icons/ReactAtomIcon.vue'
import NextJsAtomIcon from '@atoms/icons/NextJsAtomIcon.vue'
import VuejsAtomIcon from '@atoms/icons/VuejsAtomIcon.vue'
import StyledComponentsAtomIcon from '@atoms/icons/StyledComponentsAtomIcon.vue'
import CssAtomIcon from '@atoms/icons/CssAtomIcon.vue'
import MongoDbAtomIcon from '@atoms/icons/MongoDbAtomIcon.vue'
import NodeAtomIcon from '@atoms/icons/NodeAtomIcon.vue'
</script>

<template>
  <div class="mt-16 md:mt-24">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center">Tech stack I use</h2>
      <IconDoubleDown class="h-4 w-4" />
    </div>

    <div class="flex flex-wrap justify-center items-center text-4xl mt-5">
      <JavascriptAtomIcon class="m-2 md:m-4" />
      <ReactAtomIcon class="m-2 md:m-4" />
      <NodeAtomIcon class="m-2 md:m-4" />
      <NextJsAtomIcon class="m-2 md:m-4" />
      <VuejsAtomIcon class="m-2 md:m-4" />
      <StyledComponentsAtomIcon class="m-2 md:m-4" />
      <CssAtomIcon class="m-2 md:m-4" />
      <MongoDbAtomIcon class="m-2 md:m-4" />
    </div>
  </div>
</template>
