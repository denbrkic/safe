import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import { Keypad } from './Keypad';
import Key from '../../presentation/Key/Key';

describe('Keypad container component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            onDisplayState: function() {
                return false;
            }
        };

        wrapper = shallow(<Keypad {...props} />);
    });

    test('should contain 12 nested Key components', () => {
        expect(wrapper.find(Key)).toHaveLength(12);
    });
});
