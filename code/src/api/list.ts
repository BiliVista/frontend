import axios from 'axios';
import qs from 'query-string';


export interface VideoComment {
  comment: string; 
  sentiment: number; 
  like: number; 
  bvid: string; 
}

export function queryVideoComment() {
  return axios.get<VideoComment[]>('http://127.0.0.1:8000/api/videos/table/');
}
