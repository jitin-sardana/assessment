import React from 'react';
import Loading from '../Loading';
import { render } from '@testing-library/react';


describe('Testing Common Components - Loading', () => {
    it('Test Loading Component with Backdrop', () => {
        render(<Loading loading={true} />);
    });
    it('Test Loading Component without Backdrop', () => {
        render(<Loading loading={false} />);
    });
})