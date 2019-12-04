import { create } from 'apisauce';
import * as constant from '../constants/constants';

// Base URL
const api = create({
  baseURL: constant.BASE_URL
});

/**
 * Function get popular videos
 */
export const getPopularVideos = (videoAPI = api) => {
  const url = '/videos';

  return videoAPI.get(url, {
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
export const getVideosById = (videoId, videoAPI = api) => {
  const url = '/videos';

  return videoAPI.get(url, {
    id: videoId,
    part: constant.PART,
    key: constant.API_KEY
  });
};
