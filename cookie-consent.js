document.addEventListener('DOMContentLoaded', function() {
  // Find all cookie banner buttons by ID or class
  var acceptButtons = document.querySelectorAll('#cookie-accept-all, .cookie-button.accept');
  var customizeButtons = document.querySelectorAll('#cookie-customize, .cookie-button.customize');
  var rejectButtons = document.querySelectorAll('#cookie-reject-all, .cookie-button.reject');
  
  // Find the cookie banner by ID or class
  var cookieBanner = document.querySelector('#cookie-consent-banner, .cookie-banner');
  
  // Add event listeners to all accept buttons
  acceptButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (cookieBanner) {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookieConsent', 'accepted');
      }
    });
  });
  
  // Add event listeners to all customize buttons
  customizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (cookieBanner) {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookieConsent', 'customized');
      }
    });
  });
  
  // Add event listeners to all reject buttons
  rejectButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (cookieBanner) {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookieConsent', 'rejected');
      }
    });
  });
  
  // Check if consent was already given
  if (localStorage.getItem('cookieConsent') && cookieBanner) {
    cookieBanner.style.display = 'none';
  }
});
