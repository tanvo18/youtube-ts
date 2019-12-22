import { create } from 'apisauce';
import * as constant from '../constants/constants';

// Base URL
const api = create({
  baseURL: constant.BASE_URL
});

/**
 * Function get popular videos
 */
export const getPopularVideos = () => {
  const url = '/videos';

  return api.get(url, {
    chart: constant.CHART,
    regionCode: constant.REGION_CODE,
    part: constant.PART,
    videoCategoryId: '',
    maxResults: constant.MAX_RESULT,
    key: constant.API_KEY
  });
};

/**
 * Function  get video by id
 * @param {string} videoId id of video
 */
export const getVideosById = (videoId: string) => {
  const url = '/videos';

  return api.get(url, {
    id: videoId,
    part: constant.PART,
    key: constant.API_KEY
  });
};

/**
 * Function search video by keyword
 * @param {string} keyword search keyword
 */
export const searchVideoByKeyword = (keyword: string) => {
  const url = '/search';

  return api.get(url, {
    part: 'snippet',
    maxResults: constant.MAX_RESULT,
    q: keyword,
    type: constant.TYPE,
    key: constant.API_KEY
  });
};

/**
 * Function get statistic of video by id
 * @param {string} videoId id of video 
 */
export const getStatisticById = (videoId: string) => {
  const url = '/videos';

  return api.get(url, {
    id: videoId,
    part: constant.PART,
    maxResults: constant.MAX_RESULT,
    key: constant.API_KEY
  });
};
