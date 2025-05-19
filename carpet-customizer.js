/**
 * Magic Carpet Customizer - Interactive Functionality
 * Duolingo Campaign Microsite
 */

document.addEventListener('DOMContentLoaded', function() {
    // Main elements
    const carpetVisual = document.getElementById('carpet-visual');
    const carpetBase = document.querySelector('.carpet-base');
    const carpetPattern = document.querySelector('.carpet-pattern');
    const carpetOverlay = document.querySelector('.carpet-overlay');
    const carpetThreads = document.querySelector('.carpet-threads');
    const carpetGems = document.querySelector('.carpet-gems');
    const carpetLeagueEffects = document.querySelector('.carpet-league-effects');
    const duoCharacter = document.querySelector('.duo-character');
    
    // Tabs and content
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Customization options
    const patternOptions = document.querySelectorAll('.pattern-option');
    const colorOptions = document.querySelectorAll('.color-option');
    const threadOptions = document.querySelectorAll('.thread-option');
    const learningStyleOptions = document.querySelectorAll('.learning-style-option');
    const leagueOptions = document.querySelectorAll('.league-option');
    
    // Premium elements
    const premiumElements = document.querySelectorAll('.premium');
    const premiumOverlay = document.getElementById('premium-overlay');
    const closeModalButtons = document.querySelectorAll('.close-modal, .close-modal-button');
    const premiumFeatureImage = document.getElementById('premium-feature-image');
    const premiumFeatureDescription = document.getElementById('premium-feature-description');
    
    // Current state
    let currentState = {
        pattern: 'geometric',
        color: 'blue',
        thread: 'standard',
        learningStyle: 'visual',
        league: 'bronze',
        streak: 7,
        gems: 145,
        currentJourneyNode: 2,
        isPremium: false
    };
    
    // Pattern assets
    const patterns = {
        classic: {
            color: '#E0E0FF',
            pattern: 'url("../images/11.png")',
            premium: false
        },
        geometric: {
            color: '#1CB0F6',
            pattern: 'url("../images/12.png")',
            premium: false
        },
        floral: {
            color: '#A560F8',
            pattern: 'url("../images/13.png")',
            premium: false
        },
        arabesque: {
            color: '#FFD900',
            pattern: 'url("../images/14.png")',
            premium: true
        },
        royal: {
            color: '#FF9600',
            pattern: 'url("../images/15.png")',
            premium: true
        }
    };
    
    // Color assets
    const colors = {
        purple: {
            primary: '#A560F8',
            secondary: '#8A4AD0',
            premium: false
        },
        blue: {
            primary: '#1CB0F6',
            secondary: '#0F8BC0',
            premium: false
        },
        green: {
            primary: '#58CC02',
            secondary: '#46A302',
            premium: false
        },
        gold: {
            primary: '#FFD900',
            secondary: '#E6C200',
            premium: true
        },
        orange: {
            primary: '#FF9600',
            secondary: '#E67E00',
            premium: true
        }
    };
    
    // Initialize the carpet
    function initializeCarpet() {
        updateCarpetPattern();
        updateCarpetColor();
        updateCarpetThreads();
        updateLearningStyleEffect();
        updateLeagueHeight();
        generateThreadPattern();
        generateGems();
        
        // Start the carpet floating animation
        startCarpetAnimation();
    }
    
    // Pattern selection
    function updateCarpetPattern() {
        const pattern = patterns[currentState.pattern];
        
        if (pattern) {
            carpetPattern.style.backgroundImage = pattern.pattern;
            carpetPattern.style.opacity = '0.8';
        }
    }
    
    // Color selection
    function updateCarpetColor() {
        const color = colors[currentState.color];
        
        if (color) {
            carpetBase.style.backgroundColor = color.primary;
        }
    }
    
    // Thread selection
    function updateCarpetThreads() {
        generateThreadPattern();
    }
    
    // Generate thread pattern
    function generateThreadPattern() {
        // Clear existing threads
        carpetThreads.innerHTML = '';
        
        // Create threads based on streak
        for (let i = 0; i < Math.min(currentState.streak, 15); i++) {
            const thread = document.createElement('div');
            thread.className = 'thread';
            
            // Position randomly
            thread.style.top = `${10 + Math.random() * 80}%`;
            thread.style.left = `${5 + Math.random() * 90}%`;
            thread.style.width = `${20 + Math.random() * 60}px`;
            
            // Style based on thread type
            if (currentState.thread === 'standard') {
                thread.style.background = `linear-gradient(90deg, transparent, ${colors[currentState.color].primary}, transparent)`;
            } else if (currentState.thread === 'silver') {
                thread.style.background = 'linear-gradient(90deg, transparent, #C0C0C0, #E8E8E8, #C0C0C0, transparent)';
                thread.style.boxShadow = '0 0 3px rgba(255, 255, 255, 0.8)';
            } else if (currentState.thread === 'gold') {
                thread.style.background = 'linear-gradient(90deg, transparent, #FFD700, #FFF5AA, #FFD700, transparent)';
                thread.style.boxShadow = '0 0 5px rgba(255, 215, 0, 0.7)';
            } else if (currentState.thread === 'magical') {
                thread.style.background = 'linear-gradient(90deg, transparent, #FF5E5E, #FFD166, #06D6A0, #118AB2, #073B4C, transparent)';
                thread.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.8)';
                thread.style.backgroundSize = '200% 100%';
                thread.style.animation = 'rainbowShift 3s linear infinite';
            }
            
            // Add to carpet
            carpetThreads.appendChild(thread);
        }
    }
    
    // Generate gems
    function generateGems() {
        // Clear existing gems
        carpetGems.innerHTML = '';
        
        // Create gems based on gem count
        for (let i = 0; i < Math.min(currentState.gems / 25, 10); i++) {
            const gem = document.createElement('div');
            gem.className = 'gem';
            
            // Position randomly
            gem.style.top = `${10 + Math.random() * 80}%`;
            gem.style.left = `${10 + Math.random() * 80}%`;
            
            // Style based on gem type
            if (Math.random() > 0.7) {
                gem.style.backgroundColor = '#FFD700';
                gem.style.boxShadow = '0 0 8px 2px rgba(255, 215, 0, 0.6)';
            } else if (Math.random() > 0.4) {
                gem.style.backgroundColor = '#1CB0F6';
                gem.style.boxShadow = '0 0 8px 2px rgba(28, 176, 246, 0.6)';
            } else {
                gem.style.backgroundColor = '#A560F8';
                gem.style.boxShadow = '0 0 8px 2px rgba(165, 96, 248, 0.6)';
            }
            
            // Add to carpet
            carpetGems.appendChild(gem);
        }
    }
    
    // Learning style effect
    function updateLearningStyleEffect() {
        // Reset classes
        carpetVisual.className = 'carpet-visual';
        
        // Apply specific effects based on learning style
        if (currentState.learningStyle === 'visual') {
            carpetPattern.style.opacity = '1';
            carpetOverlay.style.backgroundImage = 'none';
        } else if (currentState.learningStyle === 'auditory') {
            carpetPattern.style.opacity = '0.6';
            carpetOverlay.style.backgroundImage = 'url("../images/26.png")';
        } else if (currentState.learningStyle === 'kinesthetic') {
            carpetPattern.style.opacity = '0.7';
            carpetOverlay.style.backgroundImage = 'url("../images/27.png")';
        } else if (currentState.learningStyle === 'personalized') {
            carpetPattern.style.opacity = '0.8';
            carpetOverlay.style.backgroundImage = 'url("../images/28.png")';
        }
    }
    
    // League height and flying effects
    function updateLeagueHeight() {
        // Update height markers
        document.querySelectorAll('.height-marker').forEach(marker => {
            marker.classList.remove('active');
        });
        
        // Set carpet height based on league
        if (currentState.league === 'bronze') {
            carpetVisual.style.transform = 'translateY(0)';
            document.querySelector('.height-marker.bronze').classList.add('active');
        } else if (currentState.league === 'silver') {
            carpetVisual.style.transform = 'translateY(-40px)';
            document.querySelector('.height-marker.silver').classList.add('active');
        } else if (currentState.league === 'gold') {
            carpetVisual.style.transform = 'translateY(-80px)';
            document.querySelector('.height-marker.gold').classList.add('active');
        } else if (currentState.league === 'diamond') {
            carpetVisual.style.transform = 'translateY(-120px)';
            document.querySelector('.height-marker.diamond').classList.add('active');
        }
        
        // Update shadow
        const shadow = document.querySelector('.carpet-shadow');
        if (shadow) {
            if (currentState.league === 'bronze') {
                shadow.style.opacity = '0.3';
                shadow.style.width = '60%';
            } else if (currentState.league === 'silver') {
                shadow.style.opacity = '0.2';
                shadow.style.width = '50%';
            } else if (currentState.league === 'gold') {
                shadow.style.opacity = '0.15';
                shadow.style.width = '40%';
            } else if (currentState.league === 'diamond') {
                shadow.style.opacity = '0.1';
                shadow.style.width = '30%';
            }
        }
    }
    
    // Start carpet flying animation
    function startCarpetAnimation() {
        // Apply floating animation
        carpetVisual.style.animation = 'duoFloat 4s infinite alternate ease-in-out';
    }
    
    // Tab switching functionality
    function setupTabSwitching() {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all tab contents
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Show selected tab content
                const tabId = this.getAttribute('data-tab') + '-tab';
                document.getElementById(tabId).classList.add('active');
                
                // Track tab change
                trackEvent('customizer', 'tab_change', this.getAttribute('data-tab'));
            });
        });
    }
    
    // Pattern selection events
    function setupPatternSelection() {
        patternOptions.forEach(option => {
            option.addEventListener('click', function() {
                const pattern = this.getAttribute('data-pattern');
                
                // Check if premium feature
                if (patterns[pattern] && patterns[pattern].premium && !currentState.isPremium) {
                    showPremiumOverlay('pattern');
                    return;
                }
                
                // Update state and visual
                currentState.pattern = pattern;
                
                // Update active state
                patternOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Update carpet
                updateCarpetPattern();
                
                // Add magical transition effect
                addMagicalTransition();
                
                // Track pattern selection
                trackEvent('customizer', 'pattern_select', pattern);
            });
        });
    }
    
    // Color selection events
    function setupColorSelection() {
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                const color = this.getAttribute('data-color');
                
                // Check if premium feature
                if (colors[color] && colors[color].premium && !currentState.isPremium) {
                    showPremiumOverlay('color');
                    return;
                }
                
                // Update state and visual
                currentState.color = color;
                
                // Update active state
                colorOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Update carpet
                updateCarpetColor();
                updateCarpetThreads();
                
                // Add magical transition effect
                addMagicalTransition();
                
                // Track color selection
                trackEvent('customizer', 'color_select', color);
            });
        });
    }
    
    // Thread selection events
    function setupThreadSelection() {
        threadOptions.forEach(option => {
            option.addEventListener('click', function() {
                const thread = this.getAttribute('data-thread');
                
                // Check if premium feature
                if ((thread === 'gold' || thread === 'magical') && !currentState.isPremium) {
                    showPremiumOverlay('thread');
                    return;
                }
                
                // Update state and visual
                currentState.thread = thread;
                
                // Update active state
                threadOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Update carpet
                updateCarpetThreads();
                
                // Add magical transition effect
                addMagicalTransition();
                
                // Track thread selection
                trackEvent('customizer', 'thread_select', thread);
            });
        });
    }
    
    // Learning style selection events
    function setupLearningStyleSelection() {
        learningStyleOptions.forEach(option => {
            option.addEventListener('click', function() {
                const style = this.getAttribute('data-style');
                
                // Check if premium feature
                if (style === 'personalized' && !currentState.isPremium) {
                    showPremiumOverlay('learningStyle');
                    return;
                }
                
                // Update state and visual
                currentState.learningStyle = style;
                
                // Update active state
                learningStyleOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Update carpet
                updateLearningStyleEffect();
                
                // Add magical transition effect
                addMagicalTransition();
                
                // Track learning style selection
                trackEvent('customizer', 'learning_style_select', style);
            });
        });
    }
    
    // League selection events
    function setupLeagueSelection() {
        leagueOptions.forEach(option => {
            option.addEventListener('click', function() {
                const league = this.getAttribute('data-league');
                
                // Check if premium feature
                if (league === 'diamond' && !currentState.isPremium) {
                    showPremiumOverlay('league');
                    return;
                }
                
                // Update state and visual
                currentState.league = league;
                
                // Update active state
                leagueOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Update carpet
                updateLeagueHeight();
                
                // Add magical transition effect
                addMagicalTransition();
                
                // Track league selection
                trackEvent('customizer', 'league_select', league);
            });
        });
    }
    
    // Premium overlay functionality
    function setupPremiumOverlay() {
        // Premium options
        premiumElements.forEach(element => {
            if (element.closest('.pattern-option') || 
                element.closest('.color-option') || 
                element.closest('.thread-option') || 
                element.closest('.learning-style-option') ||
                element.closest('.league-option')) {
                
                // Premium features already handled in their respective setup functions
                return;
            }
            
            // Other premium elements
            element.addEventListener('click', function() {
                showPremiumOverlay('premium');
            });
        });
        
        // Close premium modal
        closeModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                premiumOverlay.classList.remove('visible');
            });
        });
        
        // Close when clicking outside modal content
        premiumOverlay.addEventListener('click', function(e) {
            if (e.target === premiumOverlay) {
                premiumOverlay.classList.remove('visible');
            }
        });
    }
    
    // Show premium upgrade overlay
    function showPremiumOverlay(featureType) {
        if (!premiumOverlay) return;
        
        // Update content based on feature type
        updatePremiumOverlayContent(featureType);
        
        // Show overlay
        premiumOverlay.classList.add('visible');
        
        // Track premium feature click
        trackEvent('premium', 'feature_click', featureType);
    }
    
    // Update premium overlay content
    function updatePremiumOverlayContent(featureType) {
        if (!premiumFeatureImage || !premiumFeatureDescription) return;
        
        let imageSrc = '';
        let description = '';
        
        switch(featureType) {
            case 'pattern':
                imageSrc = '../images/29.png';
                description = 'Unlock exclusive premium patterns that transform as you learn. Our Arabesque and Royal patterns are designed by language experts to reinforce learning through visual mnemonics.';
                break;
                
            case 'color':
                imageSrc = '../images/30.png';
                description = 'Access our special Gold and Orange color palettes. These premium colors include animated effects that respond to your learning achievements.';
                break;
                
            case 'thread':
                imageSrc = '../images/31.png';
                description = 'Premium magical threads add shimmering effects that pulse with your learning progress. Each golden thread represents a day of your learning streak.';
                break;
                
            case 'learningStyle':
                imageSrc = '../images/32.png';
                description = 'Our adaptive learning technology automatically personalizes your carpet based on how you learn best, combining visual, auditory, and kinesthetic elements.';
                break;
                
            case 'league':
                imageSrc = '../images/33.png';
                description = 'Diamond League members can fly their carpets to exclusive destinations. Soar through clouds and access special landscapes unavailable to free users.';
                break;
                
            default:
                imageSrc = '../images/34.png';
                description = 'Upgrade to Super Duolingo to unlock all premium features and transform your Magic Carpet experience.';
        }
        
        premiumFeatureImage.src = imageSrc;
        premiumFeatureDescription.textContent = description;
    }
    
    // Add magical transition effect
    function addMagicalTransition() {
        carpetVisual.classList.add('carpet-transform');
        setTimeout(() => {
            carpetVisual.classList.remove('carpet-transform');
        }, 800);
    }
    
    // Interactive carpet effects
    function setupInteractiveCarpet() {
        if (!carpetVisual) return;
        
        carpetVisual.addEventListener('mousemove', function(e) {
            // Only add tilt effect if using kinesthetic learning style
            if (currentState.learningStyle === 'kinesthetic') {
                // Get position relative to carpet
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate tilt based on mouse position (limited to 5 degrees)
                const tiltX = ((y / rect.height) - 0.5) * 5;
                const tiltY = ((x / rect.width) - 0.5) * -5;
                
                // Apply tilt effect
                this.style.transform = `translateY(${carpetVisual.style.transform.match(/translateY\(([^)]+)\)/)?.[1] || '0px'}) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            }
        });
        
        carpetVisual.addEventListener('mouseleave', function() {
            // Reset transform when mouse leaves (preserving translateY)
            this.style.transform = `translateY(${carpetVisual.style.transform.match(/translateY\(([^)]+)\)/)?.[1] || '0px'})`;
        });
        
        carpetVisual.addEventListener('click', function() {
            // Add magical burst effect on click
            addMagicalTransition();
            
            // Track interaction
            trackEvent('customizer', 'carpet_click', currentState.learningStyle);
        });
    }
    
    // Analytics Event Tracking
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
    
    // Initialize all functionality
    function init() {
        // First initialize the carpet
        initializeCarpet();
        
        // Setup all event handlers
        setupTabSwitching();
        setupPatternSelection();
        setupColorSelection();
        setupThreadSelection();
        setupLearningStyleSelection();
        setupLeagueSelection();
        setupPremiumOverlay();
        setupInteractiveCarpet();
    }
    
    // Start everything
    init();
});