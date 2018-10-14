const validate = values => {
	const errors = {};
	Object.keys(values).forEach(value => {
		if (!values[value]) {
			errors[value] = `${value} is required`;
		} else {
			errors[value] = undefined;	
		}
	});
	return errors;
};

export default validate;
