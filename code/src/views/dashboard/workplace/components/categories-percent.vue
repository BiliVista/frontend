<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card class="general-card" :header-style="{ paddingBottom: '0' }" :body-style="{
      padding: '20px',
    }">
      <template #title>
        {{ $t('workplace.categoriesPercent') }}
      </template>
      <Chart height="310px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
import useLoading from '@/hooks/loading';
import useChartOption from '@/hooks/chart-option';
import { ref } from 'vue';
import { Data3Lian, query3Lian } from '@/api/dashboard';
import { AnyObject } from '@/types/global';


const { loading, setLoading } = useLoading(true);
const coin = ref<number>(0);
const like = ref<number>(0);
const favorite = ref<number>(0);
const { chartOption } = useChartOption((isDark) => {
  // echarts support https://echarts.apache.org/zh/theme-builder.html
  // It's not used here
  return {
    legend: {
      left: 'center',
      data: ['Like', 'Favorite', 'Coin'],
      bottom: 0,
      icon: 'circle',
      itemWidth: 8,
      textStyle: {
        color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
      },
      itemStyle: {
        borderWidth: 0,
      },
    },
    tooltip: {
      show: true,
      trigger: 'item',
    },
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'Total',
            textAlign: 'center',
            fill: isDark ? '#ffffffb3' : '#1D2129',
            fontSize: 19,
            fontWeight: 500,
          },
        },
      ],
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '50%'],
        label: {
          formatter: '{d}%',
          fontSize: 14,
          color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
        },
        itemStyle: {
          borderColor: isDark ? '#232324' : '#fff',
          borderWidth: 1,
        },
        data: [
          {
            value: [coin.value],
            name: 'Coin',
            itemStyle: {
              color: isDark ? '#3D72F6' : '#249EFF',
            },
          },
          {
            value: [like.value],
            name: 'Like',
            itemStyle: {
              color: isDark ? '#A079DC' : '#313CA9',
            },
          },
          {
            value: [favorite.value],
            name: 'Favorite',
            itemStyle: {
              color: isDark ? '#6CAAF5' : '#21CCFF',
            },
          },
        ],
      },
    ],
  };
});
const fetchData = async () => {
  setLoading(true);
  try {
    const { data } = await query3Lian();
    favorite.value=data.favorite;
    like.value=data.like;
    coin.value=data.coin;    
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    setLoading(false);
  }
};
fetchData();
</script>

<style scoped lang="less"></style>
