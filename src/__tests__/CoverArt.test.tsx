import React from 'react';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

// Define some example image URLs for testing
const defaultImage = 'https://example.com/default-cover.jpg';
const customImage = 'https://example.com/custom-cover.jpg';

describe('CoverArt Component', () => {
    it('should match snapshot with default coverImage', () => {
        const { asFragment } = render(<CoverArt coverImage={defaultImage} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot with a different coverImage', () => {
        const { asFragment } = render(<CoverArt coverImage={customImage} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
