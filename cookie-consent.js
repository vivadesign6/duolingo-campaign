document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('cookieConsent')) {
    document.getElementById('cookie-consent-banner').style.display = 'block';
  }
  
  document.getElementById('cookie-accept-all').addEventListener('click', function() {
    acceptCookies();
    document.getElementById('cookie-consent-banner').style.display = 'none';
  });
  
  document.getElementById('cookie-reject-all').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    document.getElementById('cookie-consent-banner').style.display = 'none';
  });
});