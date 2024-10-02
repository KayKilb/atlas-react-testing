import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VolumeControl from '../components/VolumeControl';

describe('VolumeControl Component', () => {
  it('renders with correct initial value', () => {
    render(<VolumeControl value={50} onChange={() => {}} />);
    
    const input = screen.getByRole('slider');
    expect(input).toHaveValue('50');
  });

  it('updates value on change', () => {
    const handleChange = jest.fn();
    render(<VolumeControl value={50} onChange={handleChange} />);
    
    const input = screen.getByRole('slider');
    fireEvent.change(input, { target: { value: 75 } });
    
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it('shows correct icon based on volume value', () => {
    const { rerender } = render(<VolumeControl value={0} onChange={() => {}} />);
    
    expect(screen.getByRole('img', { hidden: true })).toHaveClass('SpeakerXMarkIcon');
    
    rerender(<VolumeControl value={50} onChange={() => {}} />);
    expect(screen.getByRole('img', { hidden: true })).toHaveClass('SpeakerWaveIcon');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<VolumeControl value={50} onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
