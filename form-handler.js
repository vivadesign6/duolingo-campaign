document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Ensure parent consent is checked
      const parentConsent = document.getElementById('parent-consent');
      if (!parentConsent.checked) {
        alert('Parent/guardian consent is required');
        return;
      }
      
      // Get form data
      const formData = new FormData(form);
      
      // In a real scenario, you would submit this to your backend
      console.log('Form submitted');
      
      // Redirect to thank you page
      window.location.href = 'thank-you.html';
    });
  }
});