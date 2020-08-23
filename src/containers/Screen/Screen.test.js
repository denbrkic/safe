import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import { Screen } from './Screen';
import Indicator from '../../presentation/Indicator/Indicator';
import Status from '../../presentation/Status/Status';

describe('Screen container component', () => {
    test('should contain two nested, presentational, components: Status and Indicator', () => {
        const wrapper = shallow(<Screen />);
        expect(wrapper.find(Status)).toHaveLength(1);
        expect(wrapper.find(Indicator)).toHaveLength(1);
    });

    test('element with "Screen--switch" should contain "Screen--switch-off" class when prop isDeviceOn is false', () => {
        const props = {
            isDeviceOn: false
        }
        const wrapper = shallow(<Screen {...props} />);
        expect(wrapper.find('.Screen--switch').hasClass('Screen--switch-off')).toBe(true);
    });

    test('element with "Screen--switch" should contain "Screen--switch-on" class when prop isDeviceOn is true', () => {
        const props = {
            isDeviceOn: true
        }
        const wrapper = shallow(<Screen {...props} />);
        expect(wrapper.find('.Screen--switch').hasClass('Screen--switch-on')).toBe(true);
    });
});
