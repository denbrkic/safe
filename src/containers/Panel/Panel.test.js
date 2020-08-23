import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import { Panel } from './Panel';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';
import SerialNumber from '../../presentation/SerialNumber/SerialNumber';

describe('Panel container component', () => {
    test('should contain three nested components: Screen, Keypad and SerialNumber', () => {
        const wrapper = shallow(<Panel />);
        expect(wrapper.find(SerialNumber)).toHaveLength(1);
        expect(wrapper.find(Keypad)).toHaveLength(1);
        expect(wrapper.find(Screen)).toHaveLength(1);
    });
});
