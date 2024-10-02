import React from 'react';
import { render, screen } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt Component', () => {
  it('renders with a cover image', () => {
    render(<CoverArt coverImage="test-image.jpg" />);
    const img = screen.getByAltText('Cover Art');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<CoverArt coverImage="test-image.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });
});