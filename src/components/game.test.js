import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it('Restarts game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [55, 22],
            feedback: 'Good job',
            correctAnswer: 99
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });
    it('Can make Guess', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 77
        });
        wrapper.instance().makeGuess(75);
        expect(wrapper.state('guesses')).toEqual([75]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
    });
    it('Can make aural updates', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 88
        });
        wrapper.instance().makeGuess(4);
        wrapper.instance().makeGuess(87);
        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus'))
            .toEqual('Here\'s the status of the game right now: You\'re Hot! You\'ve made 2 guesses. In order of most- to least-recent, they are: 87, 4');
    });

});
