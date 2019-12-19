import React, { useState, useEffect, Suspense, lazy } from 'react';
import { searchVideoByKeyword, getStatisticById } from '../../api/videoAPI';
import { roundNumber, calculateDate } from '../../utils/common';
import { IVideoItem } from '../../interfaces/Interface';

interface IProps {
  match: {
    params: {
      searchtext: string
    }
  };
}

const VideoList = lazy(() => import('../../components/video-list/VideoList'));
const SearchPage: React.FC<IProps> = ({ match }) => {
  const [videos, setVideos] = useState<[]>([]);

  useEffect(() => {
    searchVideoByKeyword(match.params.searchtext)
      .then((response) => {
        // Get id of videos from searchData
        let id: string = '';
        // Concat string id
        response.data.items.forEach((item: any) => {
          id += item.id.videoId + ', ';
        });

        getStatisticById(id).then((response) => {
          // Normalize data
          let normalizeVideos = response.data.items;
          normalizeVideos.forEach((videoItem: IVideoItem) => {
            videoItem.statistics.viewCount = roundNumber(videoItem.statistics.viewCount)
            videoItem.snippet.publishedAt = calculateDate(videoItem.snippet.publishedAt);
          })
          setVideos(normalizeVideos);
        });
      });
  }, [match.params.searchtext]);

  return (
    <div className="video-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <VideoList
          videos={videos}
        />
      </Suspense>
    </div>
  )
}

export default SearchPage
