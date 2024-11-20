import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });

    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');

        fireEvent.click(incrementButton);

        expect(countValue).toHaveTextContent('1');
    });

    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        const decrementButton = screen.getByTestId('decrement-button');
    
        // Tambahkan langkah increment agar nilai tidak mulai dari 0
        fireEvent.click(incrementButton); // Mengubah nilai menjadi 1
        fireEvent.click(decrementButton); // Mengurangi nilai menjadi 0
    
        expect(countValue).toHaveTextContent('0'); // Pastikan nilai kembali ke 0
    });
});
