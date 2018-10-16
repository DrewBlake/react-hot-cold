import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Should fire onMakeGuess when form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 44;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
    it('Should reset values after submit', () => {
        const wrapper = mount(<GuessForm />);
        wrapper.find('input[type="number"]').instance().value = 7;
        wrapper.simulate('submit');
        expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
    });
});