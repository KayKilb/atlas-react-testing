import React from 'react';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

describe('CoverArt Component', () => {
  it('renders with a cover image and matches snapshot', () => {
    const { asFragment } = render(<CoverArt coverImage="test-image.jpg" />);
    
    // Assert that the snapshot matches
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct image source', () => {
    const { getByAltText } = render(<CoverArt coverImage="test-image.jpg" />);
    
    // Assert that the image src is correct
    const img = getByAltText('Cover Art');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
  });
});
