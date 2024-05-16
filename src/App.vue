<script setup>
import SearchPage from './components/SearchPage.vue';
import TopBar from './components/TopBar.vue';

import {ref} from 'vue';

let backgroundImg=ref('https://cdn.jsdelivr.net/gh/open17/Pic/img/202403011536167.jpeg')


</script>

<template>
  <div class="flex w-screen h-screen flex-col bg-cover pt-20" :style="{'background-image':`url(${backgroundImg})`}">
    <TopBar/>
    <SearchPage/>
  </div>
</template>

<style scoped>

</style>
