import React, { useState, useEffect } from 'react';
import VideoItem from '../video-item/VideoItem';
import * as videoAPI from '../../api/videoAPI';
import './VideoList.scss';
import { roundNumber, calculateDate } from '../../utils/common';

const VideoList: React.FC = (): JSX.Element => {
  const handleClickVideo = (event: MouseEvent, videoId: string) => {
    
  }

  const [videos, setVideos] = useState([]);

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
    <div className="container video-container">
      <div>
        <ul className="video-list">
          {videos && videos.length > 0 ?
            videos.map((videoItem, index) => (
              <VideoItem
                key={index}
                video={videoItem}
                onClickVideo={handleClickVideo}
              />
            ))
            : <div>There are no videos</div>
          }
        </ul>
      </div>
    </div>
  )
}

export default VideoList
