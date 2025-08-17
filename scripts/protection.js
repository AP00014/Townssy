/**
 * Anti-Inspection Protection Script
 * Prevents browser inspection and ensures cross-browser compatibility
 */

(function() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts for developer tools
    document.addEventListener('keydown', function(e) {
        // Prevent F12 key
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i'))) {
            e.preventDefault();
            return false;
        }

        // Prevent Ctrl+U (view source)
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });

    // Detect and close DevTools
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;
        
        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h1>For security reasons, developer tools are not allowed on this site.</h1><p>Please close developer tools to continue browsing.</p></div>';
        }
    }

    // Check periodically
    setInterval(detectDevTools, 1000);

    // Disable text selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';

    // Disable dragging of images
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Cross-browser compatibility checks
    function applyBrowserCompatibility() {
        // Add CSS prefixes for better compatibility
        const style = document.createElement('style');
        style.textContent = `
            .transition {
                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                -ms-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }
            
            .transform {
                -webkit-transform: translateZ(0);
                -moz-transform: translateZ(0);
                -ms-transform: translateZ(0);
                -o-transform: translateZ(0);
                transform: translateZ(0);
            }
            
            /* Force hardware acceleration for smoother animations */
            .hardware-accelerated {
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                -ms-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-perspective: 1000;
                -moz-perspective: 1000;
                -ms-perspective: 1000;
                perspective: 1000;
            }
        `;
        document.head.appendChild(style);
        
        // Apply hardware acceleration to key elements
        const animatedElements = document.querySelectorAll('.mobile-menu, .mobile-menu-overlay, .hamburger, .mobile-nav-item');
        animatedElements.forEach(el => {
            el.classList.add('hardware-accelerated');
        });
        
        // Fix for iOS Safari 100vh issue
        function fixIOSHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        window.addEventListener('resize', fixIOSHeight);
        fixIOSHeight();
    }
    
    // Apply compatibility fixes when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyBrowserCompatibility);
    } else {
        applyBrowserCompatibility();
    }
    
    // Console warning
    const warningMessage = '%c⚠️ Warning: This site is protected!\nAny attempt to inspect elements or use developer tools is prohibited.';
    const warningStyle = 'color:red; font-size:20px; font-weight:bold; text-shadow: 1px 1px 1px black;';
    console.log(warningMessage, warningStyle);
    
    // Override console methods
    const consoleWarn = console.warn;
    const consoleError = console.error;
    const consoleInfo = console.info;
    
    console.warn = function() {
        consoleWarn.apply(console, ['⚠️ Console activity detected and logged.']);
    };
    
    console.error = function() {
        consoleError.apply(console, ['⚠️ Console activity detected and logged.']);
    };
    
    console.info = function() {
        consoleInfo.apply(console, ['⚠️ Console activity detected and logged.']);
    };
})();