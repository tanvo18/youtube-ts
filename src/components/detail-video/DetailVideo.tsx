import React, { useState, useEffect } from 'react';
import { getVideosById } from '../../api/videoAPI';
import { convertFormatDate } from '../../utils/common';


interface IProps {
  videoId: string
}

interface IVideo {
  snippet: {
    title: string
  }
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
  }
}

const DetailVideo: React.FC<IProps> = ({ videoId }): JSX.Element => {
  const videoUrl = `http://www.youtube.com/embed/${videoId}`;
  const defaultVideo = {
    snippet: {
      title: '',
      channelTitle: '',
      publishedAt: '',
      description: ''
    },
    statistics: {
      viewCount: '',
      likeCount: '',
      dislikeCount: '',
    }
  }
  const [selectedVideo, setVideo] = useState<IVideo | any>(defaultVideo);

  useEffect(() => {
    getVideosById(videoId)
      .then((response) => {
        let videoItem = response.data.items[0];
        videoItem.snippet.publishedAt = convertFormatDate(videoItem.snippet.publishedAt);
        setVideo(videoItem);
      })
  }, []);

  return (
    <div>
      <iframe src={videoUrl}
        title={'title'}
        width="100%"
        height="580"
        frameBorder="0"
        allowFullScreen>
      </iframe>

      <div>
        <p className="detail-title">{selectedVideo.snippet.title}</p>
        <div className="detail-description">
          <p className="detail-view">{selectedVideo.statistics.viewCount} views</p>
          <div>
            <button className="btn btn-rate"><i className="fa fa-thumbs-up"></i></button>
            <span>{selectedVideo.statistics.likeCount}</span>
            <button className="btn btn-rate"><i className="fa fa-thumbs-down"></i></button>
            <span>{selectedVideo.statistics.dislikeCount}</span>
          </div>
        </div>

        <div>
          <p>{selectedVideo.snippet.channelTitle}</p>
          <p>Published on {selectedVideo.snippet.publishedAt}</p>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailVideo
