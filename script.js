document.addEventListener('DOMContentLoaded', function () {
  var signup = document.getElementById('signup-form');
  var signin = document.getElementById('signin-form');

  function enterApp() {
    try {
      localStorage.setItem('dreamnoteUser', 'true');
    } catch (e) {}
    window.location.href = 'dream-log.html';
  }

  if (signup) {
    signup.addEventListener('submit', function (e) {
      e.preventDefault();
      enterApp();
    });
  }

  if (signin) {
    signin.addEventListener('submit', function (e) {
      e.preventDefault();
      enterApp();
    });
  }

  // Protect app pages: if user isn't "logged in" redirect to sign-in
  var publicPages = ['index.html', 'sign-up.html', 'sign-in.html', ''];
  var path = window.location.pathname.split('/').pop();
  var logged = false;
  try { logged = !!localStorage.getItem('dreamnoteUser'); } catch (e) {}
  if (!logged && publicPages.indexOf(path) === -1) {
    window.location.href = 'sign-in.html';
  }
  // Header indicator and sign-out
  var userIndicator = document.getElementById('user-indicator');
  var signoutBtn = document.getElementById('signout-btn');
  try {
    if (logged) {
      if (userIndicator) {
        userIndicator.style.display = '';
        userIndicator.textContent = 'Signed in';
      }
      if (signoutBtn) {
        signoutBtn.style.display = '';
        signoutBtn.addEventListener('click', function () {
          try { localStorage.removeItem('dreamnoteUser'); } catch (e) {}
          window.location.href = 'sign-in.html';
        });
      }
    } else {
      if (userIndicator) userIndicator.style.display = 'none';
      if (signoutBtn) signoutBtn.style.display = 'none';
    }
  } catch (e) {}
});
