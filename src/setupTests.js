import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.mount = mount;
global.render = render;
global.shallow = shallow;

configure({ adapter: new Adapter() });
