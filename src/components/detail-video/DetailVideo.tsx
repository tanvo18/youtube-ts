import React, { useState, useEffect } from 'react';
import { getVideosById } from '../../api/videoAPI';
import { convertFormatDate, roundNumber } from '../../utils/common';
import "./DetailVideo.scss";
import { IVideoItem } from '../../interfaces/Interface';

interface IProps {
  videoId: string
}

const DetailVideo: React.FC<IProps> = ({ videoId }) => {
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
  const [selectedVideo, setVideo] = useState<IVideoItem | any>(defaultVideo);

  useEffect(() => {
    // Using api to fetch videos 
    getVideosById(videoId)
      .then((response: any) => {
        let videoItem = response.data.items[0];
        videoItem.snippet.publishedAt = convertFormatDate(videoItem.snippet.publishedAt);
        videoItem.statistics.viewCount = roundNumber(videoItem.statistics.viewCount);
        videoItem.statistics.likeCount = roundNumber(videoItem.statistics.likeCount);
        videoItem.statistics.dislikeCount = roundNumber(videoItem.statistics.dislikeCount);

        setVideo(videoItem);
      })
  }, []);

  return (
    <div className="row detail-section">
      <div className="col-8">
        <div className="detail-wrapper">
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

            <div className="channel-wrapper">
              <p className="channel-wrapper__title">{selectedVideo.snippet.channelTitle}</p>
              <p className="channel-wrapper__time">Published on {selectedVideo.snippet.publishedAt}</p>
              <p className="channel-wrapper__description">{selectedVideo.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailVideo
