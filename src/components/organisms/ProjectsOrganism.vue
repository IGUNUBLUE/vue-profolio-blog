<script setup>
import { onMounted, inject, ref } from 'vue'

import DoubleDownAtomIcon from '@atoms/icons/DoubleDownAtomIcon.vue'
import GitHubAtomIcon from '@atoms/icons/GitHubAtomIcon.vue'
import ForkAtomIcon from '@atoms/icons/ForkAtomIcon.vue'
import StartAtomIcon from '@atoms/icons/StartAtomIcon.vue'
import LoadAtomIcon from '@atoms/icons/LoadAtomIcon.vue'
import useAxios from '@hooks/useAxios'

defineProps({
  projects: {
    type: Array,
    default() {
      return []
    }
  }
})

const config = inject('config')
const projects = ref([])
const urlApiGithubStarts = `https://api.github.com/search/repositories?q=user:${config.githubUsername}&sort=stars&per_page=3`
const urlApiGithub = `https://api.github.com/users/${config.githubUsername}/repos`
const { isLoading, isError, execRequest } = useAxios()

async function getData() {
  const isWithStarts = config.highlightedRepoNames === 'starts'
  const result = await execRequest(isWithStarts ? urlApiGithubStarts : urlApiGithub)

  if (isWithStarts) {
    projects.value = result?.items
    return
  }

  const reposEnv = config.highlightedRepoNames.split(',')
  const selectedRepos = result?.filter((repo) => {
    return reposEnv.includes(repo.name)
  })
  projects.value = selectedRepos
  return
}
async function handleClick() {
  await getData()
}

onMounted(async () => {
  await getData()
})
</script>

<template>
  <div v-if="isLoading" class="mt-16">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center">Open Source Projects</h2>
      <LoadAtomIcon class="h-4 w-4 ml-1" />
    </div>
  </div>
  <div v-if="isError" class="mt-16">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <button @click="handleClick()" class="text-center border-2 p-2 rounded-md">
        Reload Open Source Projects
      </button>
    </div>
  </div>
  <div v-if="!isError && !isLoading" class="mt-16">
    <div
      class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center">Open Source Projects</h2>
      <DoubleDownAtomIcon class="h-4 w-4" />
    </div>

    <div class="wrapper-small my-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.html_url"
          class="block bg-gray-50 dark:bg-gray-800 p-6 shadow rounded-lg mt-2 lg:mt-0 dark:hover:bg-primary"
          rel="noreferrer"
          target="_blank"
        >
          <div>
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100">
              {{ project.name }}
            </h3>
            <p class="my-2 text-base text-gray-500 dark:text-gray-400">
              {{ project.description }}
            </p>
            <ul
              v-if="config.highlightedRepoNames === 'starts'"
              class="flex items-center space-x-4 text-black dark:text-gray-200"
            >
              <li class="inline-flex items-center">
                <StartAtomIcon class="h-4 w-4 mr-1" />
                <span>{{ project.stargazers_count }}</span>
              </li>
              <li v-if="project.forks" class="inline-flex items-center">
                <ForkAtomIcon class="h-4 w-4 mr-1" />
                <span>{{ project.forks }}</span>
              </li>
            </ul>
          </div>
        </a>
        <div class="flex items-center justify-center">
          <a
            class="bg-black w-full md:w-auto flex items-center justify-center px-10 md:px-24 py-3 shadow-md hover:bg-primary rounded-lg text-white"
            :href="config.devGithubLink"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubAtomIcon class="text-white h-6 w-6 mr-3" />
            See More Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
