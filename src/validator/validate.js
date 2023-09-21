const validate = (emailPhone, password, confirmPassword) => {
  const errors = {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number, modify as needed

  if (!emailRegex.test(emailPhone) && !phoneRegex.test(emailPhone)) {
    errors.emailPhone = 'Please enter a valid email address or phone number.';
  }

  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  if (!isPasswordValid) {
    errors.password = 'Your password must contain between 4 and 60 characters.';
  }

  // if (confirmPassword !== undefined && confirmPassword.trim() !== '') {
  //   if (confirmPassword !== password) {
  //     errors.confirmPassword = 'Passwords do not match.';
  //   }

  if (confirmPassword !== undefined) {
    const trimmedConfirmPassword = confirmPassword.trim();
    if (trimmedConfirmPassword === '') {
      errors.confirmPassword = 'Confirm password cannot be empty.';
    } else if (trimmedConfirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match.';
    }
  }

  return Object.keys(errors).length === 0 ? true : errors;
}

export default validate;
