// src/BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './path/to/reducer'; // Adjust the import path accordingly

// Step 1: Test for static text in BookingForm
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
    const headingElement = screen.getByText("Reserve your spot now!");
    expect(headingElement).toBeInTheDocument();
});

// Step 2: Test initializeTimes and updateTimes functions
describe('initializeTimes function', () => {
    test('should return the initial times', () => {
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });
});

describe('updateTimes function', () => {
    test('should return the same times provided in the state', () => {
        const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const action = { type: 'update', date: '2023-05-29' };
        const updatedTimes = updateTimes(state, action);
        expect(updatedTimes).toEqual(state);
    });
});
