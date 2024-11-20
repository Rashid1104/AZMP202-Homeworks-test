function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const EmailLS = localStorage.getItem('email');
    const PasswordLS = localStorage.getItem('password');

    if (email === EmailLS && password === PasswordLS) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Welcome to Home page',
      }).then(() => {
        window.location.href = 'logo.html';
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error for login',
        text: 'untrue name or password',
      });
    }
  }