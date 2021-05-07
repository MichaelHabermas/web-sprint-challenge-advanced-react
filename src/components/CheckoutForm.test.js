import React from 'react';
import { queryByText, render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />);
	const header = screen.queryByText(/react plants/i);
	expect(header).toBeTruthy();
	expect(header).toBeInTheDocument();
	expect(header).toHaveTextContent(/react plants/i);
});

test('form shows success message on submit with form details', async () => {
	render(<CheckoutForm />);
});
