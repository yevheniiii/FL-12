let email = prompt('Enter your email:');
let emailChar = 5;
let passwordChar = 6;
let password;
let changePassword;
let newPassword;
let newPasswordRepeated;
let askPassChange;

if (email === 'null' || email === '' || email === null) {
  alert('Canceled.');
} else if (email.length < emailChar) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  password = prompt('Enter your password:');
  if (password === '' || password === null) {
    alert('Canceled.');
  } else if (password === 'UserPass' && email === 'user@gmail.com') {
    askPassChange = confirm('Do you want to change your password?');
    if (askPassChange) {
      changePassword = prompt('Please write your old password');
      if (changePassword === 'UserPass') {
        newPassword = prompt('Enter your new password');
        if (
          newPassword === 'null' ||
          newPassword === '' ||
          newPassword === null
        ) {
          alert('Canceled');
        } else if (newPassword.length < passwordChar) {
          alert('It’s too short password. Sorry.');
        } else {
          newPasswordRepeated = prompt('Enter your new password again.');
          if (newPassword === newPasswordRepeated) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change.');
    }
  } else if (password === 'AdminPass' && email === 'admin@gmail.com') {
    askPassChange = confirm('Do you want to change your password?');
    if (askPassChange) {
      changePassword = prompt('Please write your old password');
      if (changePassword === 'AdminPass') {
        newPassword = prompt('Enter your new password');
        if (
          newPassword === 'null' ||
          newPassword === '' ||
          newPassword === null
        ) {
          alert('Canceled');
        } else if (newPassword.length < passwordChar) {
          alert('It’s too short password. Sorry.');
        } else {
          newPasswordRepeated = prompt('Enter your new password again.');
          if (newPassword === newPasswordRepeated) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
