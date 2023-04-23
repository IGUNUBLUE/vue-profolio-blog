<script setup>
import { RouterLink } from 'vue-router'

import DoubleDownAtomIcon from '@atoms/icons/DoubleDownAtomIcon.vue'

defineProps({
  title: {
    type: String,
    default: 'Blogs'
  },
  posts: {
    type: Array,
    default() {
      return []
    }
  }
})


function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
</script>

<template>
  <div class="mt-16">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center">{{ title }}</h2>
      <DoubleDownAtomIcon class="h-4 w-4" />
    </div>

    <div class="wrapper-small my-5">
      <div v-for="post of posts" :key="post.slug" class="project-card md:flex mt-10">
        <div class="img max-w-lg md:max-w-sm mx-auto m-2">
          <RouterLink :to="`/posts/${post.slug}`">
            <img
              :alt="post.title"
              :src="`${post.thumbnail[0].url}`"
              class="rounded-xl h-44 w-96 object-cover object-center"
            />
          </RouterLink>
        </div>
        <div class="flex flex-col justify-between max-w-lg mx-auto">
          <div class="txt md:px-5 lg:px-0">
            <RouterLink :to="`/posts/${post.slug}`">
              <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {{ post.title }}
              </h2>
            </RouterLink>
            <p class="font-semibold text-gray-600 dark:text-gray-300 text-sm">
              {{ formatDate(post.created_at) }}
            </p>
            <div class="flex flex-col justify-between max-w-lg mx-auto"></div>
            <span
              v-for="tag of post.tags"
              :key="tag"
              class="font-semibold text-gray-600 bg-opacity-25 dark:bg-opacity-40 dark:text-gray-300 text-sm rounded bg-gray-200 dark:bg-primary mr-1 px-1"
            >
              #{{ tag }}
            </span>
            <p class="text-base text-gray-700 dark:text-gray-200 my-1">
              {{ post.description }}
            </p>
            <RouterLink
              :to="`/posts/${post.slug}`"
              class="text-base font-semibold text-gray-700 dark:text-gray-200 my-3 hover:underline"
            >
              Read more >
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
