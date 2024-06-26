import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export interface ContentDataRecord {
  x: number;
  y: number;
}

export function queryContentData() {
  return axios.get<ContentDataRecord[]>('http://127.0.0.1:8000/api/videos/rate/compare/');
}

export interface PopularRecord {
  key: string;
  rate: number;
  title: string;
}

export function queryPopularList(params: { type: string }) {
  return axios.get<TableData[]>('http://127.0.0.1:8000/api/videos/popular/list', { params });
}


export interface Data3Lian {
  like: number;
  favorite: number;
  coin: number
}

export function query3Lian() {
  return axios.get<Data3Lian>('http://127.0.0.1:8000/api/videos/count/3lian/');
}


export interface videoInfo {
  rate: number;
  bvid: string;
  author: string;
  title: string;
  like: number;
  share: number;
  img:string;
}

export function queryVideoInfo() {
  return axios.get<videoInfo[]>('http://127.0.0.1:8000/api/videos/infos/');
}


export interface BasicCount {
  'view':string,
  'video':string,
  'comment':string,
  'sentiment':string
}

export function queryBasicCount() {
  return axios.get<BasicCount>('http://127.0.0.1:8000/api/videos/count/basic/');
}