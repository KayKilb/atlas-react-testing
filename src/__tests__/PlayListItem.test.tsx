import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

const mockSong = {
  id: 1,
  title: 'Test Song',
  genre: 'Pop',
  length: '3:30',
  artist: 'Test Artist',
};

describe('PlayListItem Component', () => {
  it('renders song details correctly', () => {
    render(<PlayListItem song={mockSong} isSelected={false} onClick={() => {}} />);
    
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Pop')).toBeInTheDocument();
    expect(screen.getByText('3:30')).toBeInTheDocument();
  });

  it('applies selected class when selected', () => {
    const { container } = render(<PlayListItem song={mockSong} isSelected={true} onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('bg-purple-200');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<PlayListItem song={mockSong} isSelected={false} onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Test Song'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PlayListItem song={mockSong} isSelected={false} onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});