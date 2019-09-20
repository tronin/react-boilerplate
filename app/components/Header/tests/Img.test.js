import React from 'react';
import { render } from 'react-testing-library';
import 'linaria-jest';

import Img from '../Img';

describe('<Img />', () => {
  it('should have a class attribute', () => {
    const { container } = render(
      <Img src="http://example.com/test.jpg" alt="test" />,
    );
    expect(container.querySelector('img').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const { container } = render(
      <Img src="http://example.com/test.jpg" alt="test" />,
    );
    expect(container.querySelector('img').alt).toEqual('test');
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(
      <Img src="http://example.com/test.jpg" attribute="test" alt="test" />,
    );
    expect(container.querySelector('img').getAttribute('attribute')).toBeNull();
  });
});
