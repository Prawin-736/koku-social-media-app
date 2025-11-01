//checks url to confirm in developer or production mode.
const hostname = window.location.hostname;
let API_URL;

if (hostname === 'localhost') {
  API_URL = 'http://localhost:3000';
} else {
  API_URL = 'https://prawin.dev/project/koku-socialmedia-app';
}

// redirect to signIn page

const backToLoginButton = document.querySelector('#signup-formgroup');

backToLoginButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = `${API_URL}/api/user/signIn`;
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#signup-form');
  const errorBox = document.querySelector('#signup-error-message');
  const successBox = document.querySelector('#signup-success-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Clear and hide previous messages
    errorBox.innerHTML = '';
    errorBox.style.display = 'none';
    successBox.style.display = 'none';

    const userName = document.getElementById('userName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const genderId = genderInput ? genderInput.id : '';

    const genderMap = {
      maleBox: 'male',
      femaleBox: 'female',
      otherBox: 'other',
    };

    const data = {
      username: userName,
      DOB: dateOfBirth,
      gender: genderMap[genderId] || '',
      email,
      password,
    };

    try {
      const response = await fetch(`${API_URL}/api/user/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let result = await response.json();

      if (!response.ok) {
        let firstError =
          result.errors &&
          Array.isArray(result.errors) &&
          result.errors.length > 0
            ? result.errors[0].message
            : result.message || 'Unknown error occurred';

        console.log('First error:', firstError);

        errorBox.innerHTML = `<small class="bg-danger-subtle px-4 py-2 rounded-2">${firstError}</small>`;
        errorBox.classList.remove('d-none');
        errorBox.style.display = 'block';
      } else {
        successBox.innerHTML = `<small class="bg-success-subtle px-4 py-2 rounded-2">${result.message}</small>`;
        successBox.classList.remove('d-none');
        successBox.style.display = 'block';
        form.reset();

        // Redirect to signIn page after 2 seconds
        setTimeout(() => {
          window.location.href = `${API_URL}/api/user/signIn`;
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      errorBox.innerHTML = `<small class="bg-danger-subtle px-4 py-2 rounded-2">Something went wrong. Please try again.</small>`;
      errorBox.classList.remove('d-none');
      errorBox.style.display = 'block';
    }
  });
});
