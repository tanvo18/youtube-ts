import React from 'react';
import VideoList from './VideoList';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
  videos: [
    {
      'kind': 'youtube#video',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
      'id': 'cBVGlBWQzuc',
      'snippet': {
        'publishedAt': 'a day ago',
        'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
        'title': 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)',
        'description': '"Girls Like You” is out now.\nhttp://smarturl.it/GLY \n\nFor more, visit: \nhttps://www.facebook.com/maroon5 \nhttps://twitter.com/maroon5 \nhttps://www.instagram.com/maroon5 \n\nSign up for updates: http://smarturl.it/Maroon5.News\n\nMusic video by Maroon 5 performing Girls Like You. © 2018 Interscope Records\n\nhttp://vevo.ly/BGhT8W',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
        },
        'channelTitle': 'Maroon5VEVO',
      },
      'statistics': {
        'viewCount': '1M',
        'likeCount': '128K',
        'dislikeCount': '1K',
        'favoriteCount': '0',
        'commentCount': '10027'
      }
    }
  ],
  statisticData: [
    {
      'kind': 'youtube#video',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/QKYIcBPd8bwSw1iqefGNRk4ZkeY"',
      'id': 'cBVGlBWQzuc',
      'snippet': {
        'publishedAt': 'a day ago',
        'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
        'title': 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)',
        'description': '"Girls Like You” is out now.\nhttp://smarturl.it/GLY \n\nFor more, visit: \nhttps://www.facebook.com/maroon5 \nhttps://twitter.com/maroon5 \nhttps://www.instagram.com/maroon5 \n\nSign up for updates: http://smarturl.it/Maroon5.News\n\nMusic video by Maroon 5 performing Girls Like You. © 2018 Interscope Records\n\nhttp://vevo.ly/BGhT8W',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg',
            'width': 120,
            'height': 90
          },

        },
        'channelTitle': 'Maroon5VEVO',
        'categoryId': '10',
      },

      'statistics': {
        'viewCount': '1M',
        'likeCount': '128K',
        'dislikeCount': '1K',
        'favoriteCount': '0',
        'commentCount': '10027'
      }
    },
  ]
};

const emptyVideos = {
  videos: []
};

describe('test VideoList', () => {
  it('should render VideoItem', () => {
    const wrapper = shallow(<VideoList {...props} />);
    expect(wrapper.find('VideoItem').length).toBeGreaterThan(0);
  });

  it('should not render VideoItem with empty props', () => {
    const wrapper = mount(<VideoList {...emptyVideos} />);
    console.log('wrapper ', wrapper.find('.video-list div').debug());
    expect(wrapper.find('.video-list div').text()).toBe('There are no videos');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Router><VideoList {...props} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
