import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

// Test Suite for Counter Component
describe('Counter Component', () => {
    test('renders initial count value as 0', () => {
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
        const decrementButton = screen.getByTestId('decrement-button');
    
        fireEvent.click(decrementButton);

        expect(countValue).toHaveTextContent('-1');
      });

      test('resets count to 0 when reset button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        const resetButton = screen.getByTestId('reset-button');
    
        fireEvent.click(incrementButton);
        fireEvent.click(resetButton);
        expect(countValue).toHaveTextContent('0');
      });

      test('does not go below 0 when decrementing from 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByTestId('decrement-button');
    
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-2');
      });

      test('increment and decrement work in sequence', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        const decrementButton = screen.getByTestId('decrement-button');
    
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('2');
    
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('1');
      });
    });

// Test Suite for Greeting Component
describe('Greeting Component', () => {
    test('greeting component with your name', () => {
      render(<Greeting name="Lintang" />);
      const greetingMessage = screen.getByTestId('greeting');
      expect(greetingMessage).toHaveTextContent('Hello, Lintang');
    });
  
    test('greeting component with lecturer name', () => {
      render(<Greeting name="Dr. Farid Suryanto" />);
      const greetingMessage = screen.getByTestId('greeting');
      expect(greetingMessage).toHaveTextContent('Hello, Dr. Farid Suryanto');
    });
  
    test('greeting component with empty name', () => {
      render(<Greeting name="" />);
      const greetingMessage = screen.getByTestId('greeting');
      expect(greetingMessage).toHaveTextContent('Hello,');
    });
  
    test('greeting component does not display null or undefined', () => {
      render(<Greeting name={null} />);
      const greetingMessage = screen.getByTestId('greeting');
      expect(greetingMessage).toHaveTextContent('Hello,');
  
      render(<Greeting name={undefined} />);
      expect(greetingMessage).toHaveTextContent('Hello,');
    });
  });
  
  
  // Test Suite for AlertButton Component
  describe('AlertButton Component', () => {
    test('calls alert with the correct message when button is clicked', () => {
      const mockAlert = jest.fn();
      window.alert = mockAlert; // Mock fungsi alert
  
      render(<AlertButton message="Test Alert" />);
      const alertButton = screen.getByTestId('alert-button');
  
      fireEvent.click(alertButton);
      expect(mockAlert).toHaveBeenCalledWith('Test Alert');
    });

    test('triggers alert with empty message', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        render(<AlertButton message="" />);
    
        const alertButton = screen.getByTestId('alert-button');
        fireEvent.click(alertButton);
    
        expect(alertSpy).toHaveBeenCalledWith('');
        alertSpy.mockRestore();
      });
    
      test('triggers alert with message containing special characters', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        render(<AlertButton message="Test @#$% message!" />);
    
        const alertButton = screen.getByTestId('alert-button');
        fireEvent.click(alertButton);
    
        expect(alertSpy).toHaveBeenCalledWith('Test @#$% message!');
        alertSpy.mockRestore();
      });
  });
    

