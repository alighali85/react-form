import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from '../AppHeader';
import '@testing-library/jest-dom/extend-expect';

describe('Main App Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<AppHeader />);
    const appHeaderContainer = getByTestId(AppHeader.testId);
    expect(appHeaderContainer).toBeInTheDocument();
  });

  it('shows header`s title', () => {
    const { getByText } = render(<AppHeader title="AppHeader" />);
    const headerTitle = getByText(/AppHeader/i);
    expect(headerTitle).toBeInTheDocument();
  });
});
