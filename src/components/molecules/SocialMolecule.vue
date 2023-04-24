<script setup>
import { inject } from 'vue'

import GitHubAtomIcon from '@atoms/icons/GitHubAtomIcon.vue'
import TwitterAtomIcon from '@atoms/icons/TwitterAtomIcon.vue'
import LinkedInAtomIcon from '@atoms/icons/LinkedInAtomIcon.vue'

const config = inject('config')
</script>

<template>
  <div
    class="wrapper flex flex-wrap text-base text-center m-3 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
  >
    <a aria-label="Github" class="social-link hover:text-primary mx-3" :href="config.devGithubLink" target="_blank">
      <GitHubAtomIcon class="h-6 w-6" />
    </a>

    <a
      aria-label="Twitter"
      class="social-link hover:text-primary mx-3"
      :href="config.devTwitterLink"
      target="_blank"
    >
      <TwitterAtomIcon class="h-6 w-6" />
    </a>

    <a
      aria-label="LinkedIn"
      class="social-link hover:text-primary mx-3"
      :href="config.devLinkedinLink"
      target="_blank"
    >
      <LinkedInAtomIcon class="h-6 w-6" />
    </a>
  </div>
</template>
