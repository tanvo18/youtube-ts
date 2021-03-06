import React, { useState, useEffect, Suspense, lazy } from 'react';
import * as videoAPI from '../../api/videoAPI';
import './Homepage.scss';
import { roundNumber, calculateDate } from '../../utils/common';
import { IVideoItem } from '../../interfaces/Interface';

const VideoList = lazy(() => import('../../components/video-list/VideoList'));
const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<[]>([]);

  useEffect(() => {
    videoAPI.getPopularVideos()
      .then((response: any) => {
        if (response) {
          // Normalize data
          let normalizeVideos = response.data.items;
          normalizeVideos.forEach((videoItem: IVideoItem): void => {
            videoItem.statistics.viewCount = roundNumber(videoItem.statistics.viewCount)
            videoItem.snippet.publishedAt = calculateDate(videoItem.snippet.publishedAt);
          })
          setVideos(normalizeVideos);
        }
      })
  }, []);

  return (
    <div className="video-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <VideoList
          videos={videos}
        />
      </Suspense>
    </div>
  )
}

export default HomePage
