import React, { useState, useEffect } from 'react';
import VideoList from '../../components/video-list/VideoList';
import { searchVideoByKeyword, getStatisticById } from '../../api/videoAPI';
import { roundNumber, calculateDate } from '../../utils/common';

interface IProps {
  match: {
    params: {
      searchtext: string
    }
  };
}

const SearchPage: React.FC<IProps> = ({ match }) => {
  const [videos, setVideos] = useState<[]>([]);

  useEffect(() => {
    searchVideoByKeyword(match.params.searchtext)
    .then((response) => {
       // Get id of videos from searchData
      let id = '';
      // Concat string id
      response.data.items.forEach((item: any) => {
        id += item.id.videoId + ', ';
      });

      getStatisticById(id).then((response) => {
        // Normalize data
        let normalizeVideos = response.data.items;
        normalizeVideos.forEach((videoItem: any) => {
        videoItem.statistics.viewCount = roundNumber(videoItem.statistics.viewCount)
        videoItem.snippet.publishedAt = calculateDate(videoItem.snippet.publishedAt);
      })
      setVideos(normalizeVideos);
      });
    });
  }, []);

  return (
    <div className="video-wrapper">
      <VideoList
        videos={videos}
      />
    </div>
  )
}

export default SearchPage
