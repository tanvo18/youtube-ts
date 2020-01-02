import React from 'react';
import VideoItem from '../video-item/VideoItem';
import './VideoList.scss';

interface IProps {
  videos: []
}

const VideoList: React.FC<IProps> = ({videos}) => {
  const handleClickVideo = (e: React.MouseEvent<HTMLElement>, videoId: string) => {
    console.log('videoId ', videoId);
  }

  return (
    <div className="container video-container">
      <div>
        <ul className="video-list">
          {
            videos.map((videoItem, index) => (
              <VideoItem
                key={index}
                video={videoItem}
                onClickVideo={handleClickVideo}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default VideoList
