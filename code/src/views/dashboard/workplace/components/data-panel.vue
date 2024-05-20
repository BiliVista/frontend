<template>
  <a-grid :cols="24" :row-gap="16" class="panel">
    <a-grid-item class="panel-col" :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 6 }">
      <a-space>
        <a-avatar :size="54" class="col-avatar">
          <img alt="avatar"
            src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image" />
        </a-avatar>
        <a-statistic :title="$t('workplace.onlineContent')" :value="renderList.view" :precision="1" :value-from="0"
          animation show-group-separator>
          <template #suffix>
            W+ <span class="unit">{{ $t('workplace.pecs') }}</span>
          </template>
        </a-statistic>
      </a-space>
    </a-grid-item>
    <a-grid-item class="panel-col" :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 6 }">
      <a-space>
        <a-avatar :size="54" class="col-avatar">
          <img alt="avatar"
            src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image" />
        </a-avatar>
        <a-statistic :title="$t('workplace.putIn')" :value="renderList.video" :value-from="0" animation
          show-group-separator>
          <template #suffix>
            <span class="unit">{{ $t('workplace.pecs') }}</span>
          </template>
        </a-statistic>
      </a-space>
    </a-grid-item>
    <a-grid-item class="panel-col" :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 6 }">
      <a-space>
        <a-avatar :size="54" class="col-avatar">
          <img alt="avatar"
            src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image" />
        </a-avatar>
        <a-statistic :title="$t('workplace.newDay')" :value="renderList.comment" :value-from="0" animation
          show-group-separator>
          <template #suffix>
            <span class="unit">{{ $t('workplace.pecs') }}</span>
          </template>
        </a-statistic>
      </a-space>
    </a-grid-item>
    <a-grid-item class="panel-col" :span="{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 6 }"
      style="border-right: none">
      <a-space>
        <a-avatar :size="54" class="col-avatar">
          <img alt="avatar"
            src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image" />
        </a-avatar>
        <a-statistic :title="$t('workplace.newFromYesterday')" :value="renderList.sentiment" :precision="1"
          :value-from="0" animation>
          <template #suffix> % <icon-caret-up class="up-icon" v-if="renderList.sentiment > 90" /> </template>
        </a-statistic>
      </a-space>
    </a-grid-item>
    <a-grid-item :span="24">
      <a-divider class="panel-border" />
    </a-grid-item>
  </a-grid>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useLoading from '@/hooks/loading';
import { queryBasicCount, BasicCount } from '@/api/dashboard';

const { loading, setLoading } = useLoading();
const renderList = ref <BasicCount> ({'view':0,'video':0,'comment':0,'sentiment':0});
const fetchData = async () => {
  try {
    setLoading(true);
    const { data } = await queryBasicCount();
    renderList.value = data;
  } catch (err) {
    console.err(err);
  } finally {
    setLoading(false);
  }
};
fetchData();

// const mostPlay = 1375.5;
// const tolVideo = 26;
// const tolComment = 68874;
// const mostScore = 96.8;

</script>

<style lang="less" scoped>
.arco-grid.panel {
  margin-bottom: 0;
  padding: 16px 20px 0 20px;
}

.panel-col {
  padding-left: 43px;
  border-right: 1px solid rgb(var(--gray-2));
}

.col-avatar {
  margin-right: 12px;
  background-color: var(--color-fill-2);
}

.up-icon {
  color: rgb(var(--red-6));
}

.unit {
  margin-left: 8px;
  color: rgb(var(--gray-8));
  font-size: 12px;
}

:deep(.panel-border) {
  margin: 4px 0 0 0;
}
</style>
