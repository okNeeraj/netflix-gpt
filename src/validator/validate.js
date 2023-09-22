const validate = (emailPhone, password, confirmPassword) => {
  const errors = {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!emailRegex.test(emailPhone) && !phoneRegex.test(emailPhone)) {
    errors.emailPhone = 'Please enter a valid email address or phone number.';
  }

  if (!password) {
    errors.password = 'Password password cannot be empty.';
  } else {
    if (password.length < 8 || password.length > 16) {
      errors.password = 'Password must be between 8 and 16 characters.';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.password = 'Password must contain at least one lowercase letter.';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter.';
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.password = 'Password must contain at least one digit.';
    }
  }

  if (confirmPassword !== undefined) {
    const trimmedConfirmPassword = confirmPassword.trim();
    if (trimmedConfirmPassword === '') {
      errors.confirmPassword = 'Confirm password cannot be empty.';
    } else if (trimmedConfirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match.';
    }
  }

  return Object.keys(errors).length === 0 ? null : errors;
}

export default validate;
