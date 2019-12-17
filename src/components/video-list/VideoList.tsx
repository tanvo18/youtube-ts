import React from 'react';
import VideoItem from '../video-item/VideoItem';
import './VideoList.scss';

interface IProps {
  videos: []
}

const VideoList: React.FC<IProps> = ({videos}): JSX.Element => {
  const handleClickVideo = (event: React.MouseEvent<HTMLElement>, videoId: string) => {
    console.log('videoId ', videoId);
  }

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
