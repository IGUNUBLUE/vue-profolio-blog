<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const config = inject('config')
</script>

<template>
  <div>
    <nav class="wrapper py-6 dark:bg-gray-900">
      <div class="px-10 flex justify-between items-center">
        <div class="logo">
          <RouterLink to="/">
            <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              {{ config.devLogo }}
            </h1>
          </RouterLink>
        </div>

        <div class="flex flex-row">
          <RouterLink class="nav-link" to="/posts">Blog</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.mobile-link {
  @apply block px-3 py-2 text-lg text-gray-900 rounded-md text-white font-medium text-center;
}

.nav-link {
  @apply ml-5 font-medium text-center text-lg text-gray-700 dark:text-gray-200 dark:hover:text-primary hover:text-primary m-auto;
}
</style>
