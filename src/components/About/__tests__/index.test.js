import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
    //first test to verify that the componenet is rendering.
    it('renders', () => {
        render(<About />);
    });

    // Second test to compare snapshot of the DOM.
    it('matches snapshot DOM node structure', () => {
        // render About
        const {asFragment} = render(<About />); // as fragment function returns a snapshot of the About componenet.
        expect(asFragment()).toMatchSnapshot();
    });
})

