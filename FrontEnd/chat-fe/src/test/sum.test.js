import React from 'react';
import { render } from '@testing-library/react';
import sum from './sum';

test('1 + 2 = 3',
() => {
    expect(sum(1,2)).toBe(3);
})