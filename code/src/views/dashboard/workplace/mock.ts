import Mock from 'mockjs';
import qs from 'query-string';
import dayjs from 'dayjs';
import { GetParams } from '@/types/global';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

const commentRateRankList = [
  {
    key: 1,
    rate: 98,
    title: '原神启动',
  },
  {
    key: 2,
    rate: 89,
    title: '1312遇冷，消费者厌倦了电商平…',
  },
  {
    key: 3,
    rate: 80,
    title: '换hi哦我怀念的…',
  },
  {
    key: 4,
    rate: 78,
    title: '普高还是职高？家长们陷入选择…',
  },
  {
    key: 5,
    rate: 72,
    title: '阿…',
  },
];
const likeRateRankList = [
  {
    key: 1,
    rate: 99,
    title: '这是错的...',
  },
  {
    key: 2,
    rate: 85,
    title: '立陶文档经济受损民众…',
  },
  {
    key: 3,
    rate: 82,
    title: '晚上测都忘记',
  },
  {
    key: 4,
    rate: 74,
    title: '额深层次v我50',
  },
  {
    key: 5,
    rate: 65,
    title: '原神启动',
  },
];
setupMock({
  setup() {
    Mock.mock(new RegExp('/api/content-data'), () => {
      const presetData = [58, 81, 53, 90, 64, 88, 49, 79];
      const presetData2=[52, 83, 63, 93, 67, 80, 42, 72];
      const getLineData = () => {
        const count = 8;
        return new Array(count).fill(0).map((el, idx) => ({
          x: presetData2[idx],
          y: presetData[idx],
        })).sort((a, b) => {
          return a.x - b.x;
        });
      };
      return successResponseWrap([...getLineData()]);
    });
    Mock.mock(new RegExp('/api/popular/list'), (params: GetParams) => {
      const { type = 'text' } = qs.parseUrl(params.url).query;
      if (type === 'likeRate') {
        return successResponseWrap([...likeRateRankList]);
      }
      return successResponseWrap([...commentRateRankList]);
    });
  },
});
