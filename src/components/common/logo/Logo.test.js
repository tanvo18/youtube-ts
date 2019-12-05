import React from 'react';
import Logo from './Logo';
import renderer from 'react-test-renderer';

const props = {
  logoClass: 'logo',
  logoImg: '../../assets/images/youtube.png',
  logoAlt: 'this is a logo',
  link: '/'
};

describe('test logo', () => {
  it('should render logo source correctly', () => {
    const wrapper = shallow(<Logo {...props} />);
    expect(wrapper.find('img').props().src).toBe('../../assets/images/youtube.png');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Logo {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
