import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App.tsx';

describe('App', () => {
  it('Renders Hello World', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello world');
  });
});
