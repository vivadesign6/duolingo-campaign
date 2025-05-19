/**
 * Magic Carpet Journey - Main JavaScript
 * Duolingo Campaign Microsite
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initCountdown();
    initPrivacyModal();
    initCookieConsent();
    initFaqAccordion();
    initAnimations();
    
    // Track page view (if analytics consent given)
    trackPageView(window.location.pathname);
});

/**
 * Mobile Navigation Functionality
 */
function initNavigation() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (!menuToggle || !mainMenu) return;
    
    menuToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        mainMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = menuToggle.contains(event.target) || mainMenu.contains(event.target);
        
        if (!isClickInside && mainMenu.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Track navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent.trim();
            trackEvent('navigation', 'click', linkText);
        });
    });
}

/**
 * Countdown Timer Functionality
 */
function initCountdown() {
    const countdownElements = document.querySelectorAll('.countdown-timer');
    if (!countdownElements.length) return;
    
    countdownElements.forEach(countdownElement => {
        const targetDate = new Date(countdownElement.getAttribute('data-target-date') || '2025-08-31');
        const daysElement = document.getElementById('countdown-days');
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        
        if (!daysElement || !hoursElement || !minutesElement) return;
        
        function updateCountdown() {
            const now = new Date();
            const timeDifference = targetDate - now;
            
            if (timeDifference <= 0) {
                daysElement.textContent = '0';
                hoursElement.textContent = '0';
                minutesElement.textContent = '0';
                return;
            }
            
            // Calculate days, hours, minutes
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            
            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
        }
        
        // Initial update
        updateCountdown();
        
        // Update countdown every minute
        setInterval(updateCountdown, 60000);
    });
}

/**
 * Privacy Modal Functionality
 */
function initPrivacyModal() {
    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (!privacyLink || !privacyModal) return;
    
    privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        privacyModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            privacyModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal when clicking outside the content
    privacyModal.addEventListener('click', function(e) {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Cookie Consent Management
 */
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookie-consent-banner');
    if (!cookieBanner) return;
    
    const acceptAllButton = document.getElementById('cookie-accept-all');
    const customizeButton = document.getElementById('cookie-customize');
    const rejectAllButton = document.getElementById('cookie-reject-all');
    
    // Check if consent already given
    const consentStatus = localStorage.getItem('cookie_consent_status');
    if (consentStatus) {
        cookieBanner.style.display = 'none';
        applyStoredConsent(JSON.parse(consentStatus));
    } else {
        cookieBanner.style.display = 'block';
    }
    
    // Accept all cookies
    if (acceptAllButton) {
        acceptAllButton.addEventListener('click', function() {
            setConsent({
                essential: true,
                analytics: true,
                marketing: true
            });
        });
    }
    
    // Reject non-essential cookies
    if (rejectAllButton) {
        rejectAllButton.addEventListener('click', function() {
            setConsent({
                essential: true,
                analytics: false,
                marketing: false
            });
        });
    }
    
    // Customize cookies (for a real implementation, this would show more options)
    if (customizeButton) {
        customizeButton.addEventListener('click', function() {
            // This is a simplified version. In a real implementation,
            // this would toggle a detailed cookie preferences panel
            alert('This would show detailed cookie preferences in a real implementation.');
            
            // For this demo, we'll just reject non-essential cookies
            setConsent({
                essential: true,
                analytics: false,
                marketing: false
            });
        });
    }
}

/**
 * Set Cookie Consent Preferences
 */
function setConsent(consentOptions) {
    // Store consent in localStorage
    localStorage.setItem('cookie_consent_status', JSON.stringify(consentOptions));
    
    // Apply consent settings
    applyStoredConsent(consentOptions);
    
    // Hide banner
    const cookieBanner = document.getElementById('cookie-consent-banner');
    if (cookieBanner) {
        cookieBanner.style.display = 'none';
    }
    
    // Track consent for compliance
    trackConsentSelection(consentOptions);
}

/**
 * Apply Stored Consent Settings
 */
function applyStoredConsent(consentOptions) {
    // Apply essential cookies (always on)
    console.log('Essential cookies enabled');
    
    // Apply analytics if consented
    if (consentOptions.analytics) {
        console.log('Analytics cookies enabled');
        // This would initialize analytics in a real implementation
    }
    
    // Apply marketing if consented
    if (consentOptions.marketing) {
        console.log('Marketing cookies enabled');
        // This would initialize marketing cookies in a real implementation
    }
}

/**
 * Track Consent Selection
 */
function trackConsentSelection(consentOptions) {
    // Record consent for compliance purposes
    const consentData = {
        timestamp: new Date().toISOString(),
        essential: consentOptions.essential,
        analytics: consentOptions.analytics,
        marketing: consentOptions.marketing,
        userAgent: navigator.userAgent
    };
    
    // This would typically be sent to a server endpoint
    console.log('Consent recorded:', consentData);
}

/**
 * Initialize FAQ Accordion
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                // Toggle current item
                item.classList.toggle('active');
                
                // Track FAQ interaction
                if (item.classList.contains('active')) {
                    const questionText = item.querySelector('h3').textContent;
                    trackEvent('faq', 'open', questionText);
                }
            });
        }
    });
}

/**
 * Initialize Animations
 */
function initAnimations() {
    // Hero animations
    const heroElements = document.querySelectorAll('.animate-element');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, 300 * index);
    });
    
    // Scroll animations
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkScroll = () => {
        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('show');
            }
        });
    };
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

/**
 * Analytics Event Tracking
 */
function trackEvent(category, action, label) {
    // Check for analytics consent
    const consentStatus = localStorage.getItem('cookie_consent_status');
    const hasAnalyticsConsent = consentStatus ? JSON.parse(consentStatus).analytics : false;
    
    if (!hasAnalyticsConsent) {
        console.log('Analytics consent not provided');
        return;
    }
    
    // In a real implementation, this would send data to Google Analytics or similar
    console.log('Event tracked:', {
        category: category,
        action: action,
        label: label
    });
}

/**
 * Track Page View
 */
function trackPageView(pagePath) {
    // Check for analytics consent
    const consentStatus = localStorage.getItem('cookie_consent_status');
    const hasAnalyticsConsent = consentStatus ? JSON.parse(consentStatus).analytics : false;
    
    if (!hasAnalyticsConsent) {
        console.log('Analytics consent not provided');
        return;
    }
    
    // In a real implementation, this would send data to Google Analytics or similar
    console.log('Page view tracked:', {
        page_path: pagePath,
        page_title: document.title
    });
}