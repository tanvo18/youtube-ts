import React from 'react';
import './VideoItem.scss';
import { Link } from 'react-router-dom';

interface IProps {
  video: {
    id: string;
    snippet: {
      title: string,
      thumbnails: {
        medium: {
          url: string
        }
      },
      channelTitle: string,
      publishedAt: string
    },
    statistics: {
      viewCount: string;
    }
  };
  onClickVideo: any;
}

const VideoItem: React.FC<IProps> = ({ video, onClickVideo }): JSX.Element => {
  const snippet = video.snippet;
  const statistics = video.statistics;

  return (
    <li
      className="video-list-item"
      onClick={(e) => onClickVideo(e, video.id)}
    >
      <Link
        className="video-link"
        to={`/watch/${video.id}`}
      >
        <div className="thumbnail-wrap">
          <img src={snippet.thumbnails.medium.url} alt="" className="thumbnail-img" />
        </div>
        <p className="video-title">{snippet.title}</p>
        <p className="channel-title">{snippet.channelTitle}</p>
        <p className="video-description">{statistics.viewCount} views - {snippet.publishedAt}</p>
      </Link>
    </li>
  )
}

export default VideoItem
