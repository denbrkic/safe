import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import Status from './Status';

describe('Status component', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            text: 'Ready'
        };

        wrapper = shallow(<Status { ...props } />);
    });

    test('should contain the correct text passed by props', () => {
        expect(wrapper.find('span').text()).toBe(props.text);
    });
});
