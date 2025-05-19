// Only load after consent
function loadAnalytics() {
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    // Google Analytics code would go here
    console.log('Analytics loaded');
  }
}

// Call this after user accepts cookies
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  loadAnalytics();
}