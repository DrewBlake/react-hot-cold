import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });
    it('Renders a list of guesses', () => {
        let wrapper = shallow(<GuessList guesses={[4, 5]} />);
        expect(wrapper.contains([]));
    });
});