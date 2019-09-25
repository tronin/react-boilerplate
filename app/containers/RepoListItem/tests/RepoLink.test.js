import React from 'react';
import { render } from '@testing-library/react';
import 'linaria-jest';

import RepoLink from '../RepoLink';

describe('<RepoLink />', () => {
  it('should have a className attribute', () => {
    const { container } = render(<RepoLink />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<RepoLink id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<RepoLink attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
