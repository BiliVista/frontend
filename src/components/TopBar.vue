<template>
    <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item>
            <img style="width: 100px" src="https://cdn.jsdelivr.net/gh/open17/Pic/img/202405190542655.png"
                alt="Element logo" />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item>
            <el-icon :size="20">
                <Search />
            </el-icon>
        </el-menu-item>
        <el-menu-item  class=" px-0">
            <el-icon :size="20">
                <Bell />
            </el-icon>
        </el-menu-item>
        <el-menu-item >
            <el-icon :size="20">
                <TakeawayBox />
            </el-icon>
        </el-menu-item>
        <el-menu-item>
            <el-icon :size="20">
                <Setting />
            </el-icon>
        </el-menu-item>
        <el-menu-item>
            <el-avatar src="https://avatars.githubusercontent.com/u/125687556?v=4" />
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>


<style scoped>
.el-menu-top :deep(.el-menu-item){
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>