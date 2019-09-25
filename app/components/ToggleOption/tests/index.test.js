import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import ToggleOption from '../index';

describe('<ToggleOption />', () => {
  it('should display `value`(two letter language code) when `message` is absent', () => {
    const { queryByText } = render(
      <IntlProvider locale="de">
        <ToggleOption value="de" />
      </IntlProvider>,
    );
    expect(queryByText('de')).toBeDefined();
  });
});
