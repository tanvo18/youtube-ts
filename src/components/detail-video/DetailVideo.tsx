import React from 'react'

interface IProps {
  videoUrl: string;
  selectedVideo: {
    snippet: {
      title: string
    }
  };
}

const DetailVideo = ({videoUrl, selectedVideo}: IProps): JSX.Element => {
  return (
    <div>
      <iframe src={videoUrl}
        title={selectedVideo.snippet.title}
        width="100%"
        height="580"
        frameBorder="0"
        allowFullScreen>
      </iframe>

      <div>

      </div>
    </div>
  )
}

export default DetailVideo
