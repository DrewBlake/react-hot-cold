import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
    it('Renders feedback', () => {
        let wrapper = shallow(<Feedback feedback={'hello'}/>);
        expect(wrapper.contains('hello'));
    });
});