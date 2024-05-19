import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

const haveReadIds: number[] = [];
const getMessageList = () => {
  return [
    {
      id: 1,
      type: 'message',
      title: 'open17',
      subTitle: '的私信',
      avatar:
        '//avatars.githubusercontent.com/u/125687556?v=4',
      content: '想快速搭建博客?看看vitepress主题open17吧~',
      time: '今天 12:30:01',
    },
    {
      id: 4,
      type: 'notice',
      title: '试用期即将截止通知',
      subTitle: '',
      avatar: '',
      content: 'BiliVista体验期限即将截止，如需继续使用产品请前往…',
      time: '今天 12:20:01',
      messageType: 3,
    },
    {
      id: 5,
      type: 'notice',
      title: 'BiliVista试用版开通成功',
      subTitle: '',
      avatar: '',
      content: 'BiliVista试用版开通成功并生效',
      time: '今天 12:20:01',
      messageType: 1,
    },
  ].map((item) => ({
    ...item,
    status: haveReadIds.indexOf(item.id) === -1 ? 0 : 1,
  }));
};

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/message/list'), () => {
      return successResponseWrap(getMessageList());
    });

    Mock.mock(new RegExp('/api/message/read'), (params: { body: string }) => {
      const { ids } = JSON.parse(params.body);
      haveReadIds.push(...(ids || []));
      return successResponseWrap(true);
    });
  },
});
