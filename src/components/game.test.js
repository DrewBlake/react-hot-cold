import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it(' element', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });
});
