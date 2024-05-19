<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
      <el-container>
        <el-aside width="200px"><LeftNav/></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import TopBar from './components/TopBar.vue';
import LeftNav from './components/LeftNav.vue';
</script>