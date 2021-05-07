import React from 'react';
import { queryByRole, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />);
	const header = screen.queryByText(/checkout form/i);
	expect(header).toBeTruthy();
	expect(header).toBeInTheDocument();
	expect(header).toHaveTextContent(/checkout form/i);
});

test('form shows success message on submit with form details', async () => {
	render(<CheckoutForm />);
	const firstName = 'Robert';
	const lastName = 'Paulson';
	const address = '123 Fake St.';
	const city = 'Truth or Consequences';
	const state = 'New Mexico';
	const zip = '87901';

	const firstNameInput = screen.getByLabelText(/first name:/i);

	userEvent.type(firstNameInput, firstName);

	expect(firstNameInput).toHaveValue(firstName);

	const submitButton = screen.queryByRole('button');
	userEvent.click(submitButton);
});
