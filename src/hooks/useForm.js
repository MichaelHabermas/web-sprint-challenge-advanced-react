// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = initialValues => {
	// control the state of the success message
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	// control the form input values
	const [values, setValues] = useState(initialValues);

	// update form values for each field as characters are inputted in their respective fields
	const handleChanges = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	// on clicking the submit button, display the info with a success message
	const handleSubmit = e => {
		e.preventDefault();
		setShowSuccessMessage(true);
	};

	return [values, showSuccessMessage, handleChanges, handleSubmit];
};
