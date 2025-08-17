/**
 * Browser Compatibility and Advanced Protection Script
 * Ensures the site runs smoothly across all browsers and platforms
 */

(function() {
    // Browser detection
    const browser = (function() {
        const ua = navigator.userAgent;
        let tem;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
            tem = ua.match(/\bEdge\/(\d+)/);
            if (tem != null) {
                return { name: 'Edge', version: tem[1] };
            }
        }
        
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        
        return { name: M[0], version: M[1] };
    })();

    // Apply browser-specific fixes
    function applyBrowserFixes() {
        const html = document.documentElement;
        html.classList.add(`browser-${browser.name.toLowerCase()}`);
        html.classList.add(`browser-${browser.name.toLowerCase()}-${browser.version}`);
        
        // iOS specific fixes
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            html.classList.add('browser-ios');
            
            // Fix for 100vh issue on iOS
            function setVhProperty() {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }
            
            window.addEventListener('resize', setVhProperty);
            window.addEventListener('orientationchange', setVhProperty);
            setVhProperty();
        }
        
        // Safari specific fixes
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
            html.classList.add('browser-safari');
            
            // Fix for Safari flexbox issues
            const flexElements = document.querySelectorAll('.d-flex');
            flexElements.forEach(el => {
                el.classList.add('safari-flex-fix');
            });
        }
        
        // IE and Edge specific fixes
        if (browser.name === 'IE' || browser.name === 'Edge') {
            html.classList.add('browser-ms');
            
            // Add object-fit polyfill for IE/Edge
            if (typeof window.objectFitImages === 'function') {
                window.objectFitImages();
            }
        }
        
        // Firefox specific fixes
        if (browser.name === 'Firefox') {
            html.classList.add('browser-firefox');
            
            // Add specific fixes for Firefox
            const animatedElements = document.querySelectorAll('.animated, .transition');
            animatedElements.forEach(el => {
                el.classList.add('firefox-fix');
            });
        }
    }

    // Apply hardware acceleration to improve performance
    function applyHardwareAcceleration() {
        const elements = [
            '.mobile-menu',
            '.mobile-menu-overlay',
            '.hamburger',
            '.mobile-nav-item',
            '.slick-slider',
            '.animated',
            '.transition'
        ];
        
        elements.forEach(selector => {
            const els = document.querySelectorAll(selector);
            els.forEach(el => {
                el.classList.add('hardware-accelerated');
            });
        });
    }

    // Advanced protection techniques
    function applyAdvancedProtection() {
        // Disable developer tools using debugger trick
        setInterval(function() {
            debugger;
        }, 100);
        
        // Obfuscate HTML structure
        function obfuscateHTML() {
            // Add random comments throughout the DOM to confuse inspection
            const allElements = document.querySelectorAll('*');
            const randomElements = Array.from(allElements).sort(() => 0.5 - Math.random()).slice(0, 50);
            
            randomElements.forEach(el => {
                const comment = document.createComment(`protection-${Math.random().toString(36).substring(2, 15)}`);
                el.parentNode.insertBefore(comment, el);
            });
            
            // Add decoy elements with misleading class names
            const decoyContainer = document.createElement('div');
            decoyContainer.style.display = 'none';
            decoyContainer.innerHTML = `
                <div class="main-content">
                    <div class="header">
                        <div class="logo"></div>
                        <nav class="navigation"></nav>
                    </div>
                    <div class="content">
                        <div class="sidebar"></div>
                        <div class="articles"></div>
                    </div>
                    <div class="footer"></div>
                </div>
            `;
            document.body.appendChild(decoyContainer);
        }
        
        // Run obfuscation after a delay
        setTimeout(obfuscateHTML, 2000);
        
        // Detect and block browser extensions that might be used for inspection
        function detectExtensions() {
            const extensionDetectors = [
                { name: 'Firebug', test: () => window.Firebug && window.Firebug.chrome },
                { name: 'React DevTools', test: () => window.__REACT_DEVTOOLS_GLOBAL_HOOK__ },
                { name: 'Redux DevTools', test: () => window.__REDUX_DEVTOOLS_EXTENSION__ },
                { name: 'Angular DevTools', test: () => window.ng && window.ng.probe },
                { name: 'Vue DevTools', test: () => window.__VUE_DEVTOOLS_GLOBAL_HOOK__ }
            ];
            
            extensionDetectors.forEach(detector => {
                try {
                    if (detector.test()) {
                        console.warn(`Development extension detected: ${detector.name}`);
                    }
                } catch (e) {}
            });
        }
        
        detectExtensions();
    }

    // Apply all fixes and protections when DOM is loaded
    function init() {
        applyBrowserFixes();
        applyHardwareAcceleration();
        applyAdvancedProtection();
        
        // Add classes to body for protected content
        document.body.classList.add('protected-content');
        
        // Log browser information (hidden from console)
        const browserInfo = `Running on ${browser.name} ${browser.version}`;
        const hiddenLog = browserInfo.split('').map(char => char.charCodeAt(0) ^ 42).join(',');
        window._browserInfo = hiddenLog;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();