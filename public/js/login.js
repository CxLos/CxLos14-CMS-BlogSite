//
const loggingIn = async (event) => {

  event.preventDefault();

  // Gather the data from the form elemnts on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {

    //send e-mail and password to server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

// Event listener
document.querySelector('.login-form').addEventListener('submit', loggingIn);
