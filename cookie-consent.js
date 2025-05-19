document.addEventListener('DOMContentLoaded', function() {
  // Get the cookie banner element
  const cookieBanner = document.getElementById('cookie-consent-banner');
  
  // Check if it exists
  if (cookieBanner) {
    // Check if consent was already given
    if (localStorage.getItem('cookieConsent')) {
      cookieBanner.style.display = 'none';
    }
    
    // Add event listeners to buttons
    document.getElementById('cookie-accept-all').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBanner.style.display = 'none';
    });
    
    document.getElementById('cookie-customize').addEventListener('click', function() {
      // You could open a modal here
      localStorage.setItem('cookieConsent', 'customized');
      cookieBanner.style.display = 'none';
    });
    
    document.getElementById('cookie-reject-all').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'rejected');
      cookieBanner.style.display = 'none';
    });
  }
});
