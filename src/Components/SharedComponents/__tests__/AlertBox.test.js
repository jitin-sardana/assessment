import React from 'react';
import AlertBox from '../AlertBox';
import { render } from '@testing-library/react';


describe('Testing Common Components - AlertBox', () => {
    it('Test AlertBox', () => {
        AlertBox('success', 'message');
    });
})