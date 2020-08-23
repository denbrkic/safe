import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import SerialNumber from './SerialNumber';

describe('SerialNumber component', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            sn: 7131566486
        };

        wrapper = shallow(<SerialNumber {...props} />);
    });

    test('should contain the correct text', () => {
        expect(wrapper.find('.SerialNumber--text').text()).toBe(`S/N: ${props.sn}`);
    });
});
