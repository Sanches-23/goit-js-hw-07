const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if(!email || !password){
    alert('All form fields must be filled in');
    return
  }

  const result = {
    email,
    password,
  };

  console.log(result);
  e.target.reset();
});