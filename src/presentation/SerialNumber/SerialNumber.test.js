import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import SerialNumber from './SerialNumber';

describe('Serial number component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<SerialNumber />);
        expect(wrapper).toBeTruthy();
    });
});
