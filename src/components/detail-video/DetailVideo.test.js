import React from 'react';
import DetailVideo from './DetailVideo';
import renderer from 'react-test-renderer';

const props = {
  videoId: 'gIOyB9ZXn8s'
};

describe('test DetailVideo', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<DetailVideo {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
