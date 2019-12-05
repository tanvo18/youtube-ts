import React from 'react';
import VideoItem from './VideoItem';
import renderer from 'react-test-renderer';

const props = {
  video: {
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
    statistics: {
      viewCount: '1M'
    }
  },
};

describe('Test VideoItem', () => {
  const onClickVideo = jest.fn();

  it('should call function onClickVideo when click item', () => {
    const wrapper = shallow(<VideoItem 
      {...props} 
      onClickVideo={onClickVideo}  
    />);
    wrapper.simulate('click');
    expect(onClickVideo).toHaveBeenCalled();
  });

  it('should render video title correctly', () => {
    const wrapper = shallow(<VideoItem 
      {...props} />);
    expect(wrapper.find('.video-title').props().children).toBe('Maroon 5 - Girls Like You ft. Cardi B (Volume 2)');
  });

  it('should render channel title correctly', () => {
    const wrapper = shallow(<VideoItem 
      {...props} />);
    expect(wrapper.find('.channel-title').props().children).toBe('Maroon5VEVO');
  });

  it('should render video description correctly', () => {
    const wrapper = shallow(<VideoItem 
      {...props} />);
    expect(wrapper.find('.video-description').props().children.join('')).toBe('1M views - a day ago');
  });
});
