import React from 'react';
import { render, screen } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

describe('SongTitle Component', () => {
  it('renders song title and artist', () => {
    render(<SongTitle title="Test Song" artist="Test Artist" />);
    
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<SongTitle title="Test Song" artist="Test Artist" />);
    expect(asFragment()).toMatchSnapshot();
  });
});