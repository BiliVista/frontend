<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <a-card class="general-card" :title="$t('menu.list.searchTable')">
      <a-table :columns="columns" :data="dataTable" />
    </a-card>
  </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useLoading from '@/hooks/loading';
import { queryVideoComment,VideoComment } from '@/api/list';


const { loading, setLoading } = useLoading(true);
const { t } = useI18n();


const columns = [
  {
    title: 'Bvid',
    dataIndex: 'bvid',
  },
  {
    title: 'Comments',
    dataIndex: 'comment',
  },
  {
    title: 'Like',
    dataIndex: 'like',
  },
  {
    title: 'Sentiment',
    dataIndex: 'sentiment',
  },
];

const dataTable = ref<VideoComment[]>();

const fetchData = async () => {
  try {
    setLoading(true);
    const { data } = await queryVideoComment();
    dataTable.value = data;
  } catch (err) {
    console.err(err);
  } finally {
    setLoading(false);
  }
};
fetchData();

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
