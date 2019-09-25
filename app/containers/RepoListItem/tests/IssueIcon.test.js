import React from 'react';
import { render } from '@testing-library/react';
import 'linaria-jest';

import IssueIcon from '../IssueIcon';

describe('<IssueIcon />', () => {
  it('should have a className attribute', () => {
    const { container } = render(<IssueIcon />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<IssueIcon id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should adopt any attribute', () => {
    const { container } = render(<IssueIcon attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(true);
  });
});
