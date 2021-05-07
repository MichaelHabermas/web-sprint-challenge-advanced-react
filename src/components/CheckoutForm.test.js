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
	const lastNameInput = screen.getByLabelText(/last name:/i);
	const addressInput = screen.getByLabelText(/address:/i);
	const cityInput = screen.getByLabelText(/city:/i);
	const stateInput = screen.getByLabelText(/state:/i);
	const zipInput = screen.getByLabelText(/zip:/i);

	userEvent.type(firstNameInput, firstName);
	userEvent.type(lastNameInput, lastName);
	userEvent.type(addressInput, address);
	userEvent.type(cityInput, city);
	userEvent.type(stateInput, state);
	userEvent.type(zipInput, zip);

	expect(firstNameInput).toHaveValue(firstName);
	expect(lastNameInput).toHaveValue(lastName);
	expect(addressInput).toHaveValue(address);
	expect(cityInput).toHaveValue(city);
	expect(stateInput).toHaveValue(state);
	expect(zipInput).toHaveValue(zip);

	expect(screen.queryByTestId('successMessage')).toBeFalsy();

	const submitButton = screen.queryByRole('button');
	userEvent.click(submitButton);

	const postSubmittedSection = screen.getByTestId('successMessage');
	expect(postSubmittedSection).toBeInTheDocument();

	const successMessage = screen.queryByText(/You have ordered some plants! Woo-hoo!/i);

	expect(successMessage).toBeTruthy();
	expect(successMessage).toBeInTheDocument();
});
