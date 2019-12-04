import React from 'react';
import VideoList from '../../components/video-list/VideoList';
import './Homepage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="video-wrapper">
      <VideoList />
    </div>
  )
}

export default HomePage
