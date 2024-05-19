<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <a-card class="general-card" :title="$t('menu.list.searchTable')">
      <a-table :columns="columns" :data="data" />
    </a-card>
  </div>
</template>



<script lang="ts" setup>
import { computed, ref, reactive, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import useLoading from '@/hooks/loading';
import { queryPolicyList, PolicyRecord, PolicyParams } from '@/api/list';




const { loading, setLoading } = useLoading(true);
const { t } = useI18n();


const columns = [
{
    title: 'Bvid',
    dataIndex: 'bvid',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
  },
  {
    title: 'Like',
    dataIndex: 'like',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
];
const data = reactive([
  {
    name: 'Jane Doe',
    bvid: 'BV1a2x4117cJ',
    comments: "This video has excellent tutorials.",
    like: 230,
    type: 'Tutorial'
  },
  {
    name: 'Alisa Ross',
    bvid: 'BV1b2x4117cK',
    comments: "Very helpful review, thanks!",
    like: 150,
    type: 'Review'
  },
  {
    name: 'Kevin Sandra',
    bvid: 'BV1c2x4117cL',
    comments: "Great news coverage.",
    like: 200,
    type: 'News'
  },
  {
    name: 'Ed Hellen',
    bvid: 'BV1d2x4117cM',
    comments: "Insightful interview with a lot to learn.",
    like: 140,
    type: 'Interview'
  },
  {
    name: 'William Smith',
    bvid: 'BV1e2x4117cN',
    comments: "A comprehensive documentary.",
    like: 450,
    type: 'Documentary'
  },
  {
    name: 'Alisa Ross',
    bvid: 'BV1b2x4117cK',
    comments: "Very helpful review, thanks!",
    like: 150,
    type: 'Review'
  },
  {
    name: 'Kevin Sandra',
    bvid: 'BV1c2x4117cL',
    comments: "Great news coverage.",
    like: 200,
    type: 'News'
  },
  {
    name: 'Ed Hellen',
    bvid: 'BV1d2x4117cM',
    comments: "Insightful interview with a lot to learn.",
    like: 140,
    type: 'Interview'
  },
  {
    name: 'William Smith',
    bvid: 'BV1e2x4117cN',
    comments: "A comprehensive documentary.",
    like: 450,
    type: 'Documentary'
  },
  {
    name: 'Alisa Ross',
    bvid: 'BV1b2x4117cK',
    comments: "Very helpful review, thanks!",
    like: 150,
    type: 'Review'
  },
  {
    name: 'Kevin Sandra',
    bvid: 'BV1c2x4117cL',
    comments: "Great news coverage.",
    like: 200,
    type: 'News'
  },
  {
    name: 'Ed Hellen',
    bvid: 'BV1d2x4117cM',
    comments: "Insightful interview with a lot to learn.",
    like: 140,
    type: 'Interview'
  },
  {
    name: 'William Smith',
    bvid: 'BV1e2x4117cN',
    comments: "A comprehensive documentary.",
    like: 450,
    type: 'Documentary'
  }
]);


</script>

<script lang="ts">
export default {
  name: 'SearchTable',
};
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
}

:deep(.arco-table-th) {
  &:last-child {
    .arco-table-th-item-title {
      margin-left: 16px;
    }
  }
}

.action-icon {
  margin-left: 12px;
  cursor: pointer;
}

.active {
  color: #0960bd;
  background-color: #e3f4fc;
}

.setting {
  display: flex;
  align-items: center;
  width: 200px;

  .title {
    margin-left: 12px;
    cursor: pointer;
  }
}
</style>
