<script setup>
import HeroOrganism from '@organisms/HeroOrganism.vue'
import ProjectsOrganism from '../components/organisms/ProjectsOrganism.vue';
// import BlogsOrganism from '../components/organisms/BlogsOrganism.vue'
</script>

<template>
  <div class="wrapper-small md:px-10">
    <div class="h-96 mt-5">
      <HeroOrganism />
    </div>
    <!-- <BlogsOrganism /> -->
    <ProjectsOrganism />
  </div>
</template>
