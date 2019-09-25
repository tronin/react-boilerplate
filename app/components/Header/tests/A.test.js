import React from 'react';
import { render } from '@testing-library/react';
import 'linaria-jest';

import A from '../A';

describe('<A />', () => {
  it('should have a class attribute', () => {
    const { container } = render(<A />);
    expect(container.querySelector('a').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<A id={id} />);
    expect(container.querySelector('a').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<A attribute="test" />);
    expect(container.querySelector('a').getAttribute('attribute')).toBeNull();
  });
});
