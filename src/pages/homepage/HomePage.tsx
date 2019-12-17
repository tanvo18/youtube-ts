import React, { useState, useEffect } from 'react';
import VideoList from '../../components/video-list/VideoList';
import * as videoAPI from '../../api/videoAPI';
import './Homepage.scss';
import { roundNumber, calculateDate } from '../../utils/common';

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<[]>([]);

  useEffect(() => {
    videoAPI.getPopularVideos()
    .then(response => {
      // Normalize data
      let normalizeVideos = response.data.items;
      normalizeVideos.forEach((videoItem: any) => {
        videoItem.statistics.viewCount = roundNumber(videoItem.statistics.viewCount)
        videoItem.snippet.publishedAt = calculateDate(videoItem.snippet.publishedAt);
      })
      setVideos(normalizeVideos);
    })
  }, []);

  return (
    <div className="video-wrapper">
      <VideoList
        videos={videos}
      />
    </div>
  )
}

export default HomePage
