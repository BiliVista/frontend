<template>
  <div  v-show="!loading" class="container">
    <Card :like="video.like" :share="video.share" :goodRate="Math.ceil(video.rate*100)" :videoTitle="video.title"
      :name="video.author"
      :img="video.img"
      v-for="video in renderList" :key="video.bvid"/>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import useLoading from '@/hooks/loading';
import { queryVideoInfo, videoInfo } from '@/api/dashboard';
import Card from './components/Card.vue';

const { loading, setLoading } = useLoading();
const renderList = ref<videoInfo[]>();
const fetchData = async () => {
  try {
    setLoading(true);
    const { data } = await queryVideoInfo();
    renderList.value = data;
  } catch (err) {
    console.err(err);
  } finally {
    setLoading(false);
  }
};
fetchData();
</script>

<style scoped>
.container {
  padding: 5rem;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>