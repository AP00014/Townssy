/**
 * Code Obfuscation Script
 * Makes it harder to inspect and understand the website code
 */

// Self-executing function to avoid global scope pollution
(function() {
    // Create a random string generator
    function randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    // Generate decoy variables and functions to confuse inspection
    const decoyCount = 50;
    for (let i = 0; i < decoyCount; i++) {
        const varName = '_' + randomString(8);
        window[varName] = randomString(20);
        
        // Create decoy functions
        const funcName = '_func_' + randomString(8);
        window[funcName] = function() {
            return randomString(10);
        };
    }
    
    // Create a complex object structure to confuse inspection
    window._protectionSystem = {
        config: {
            enabled: true,
            level: 'maximum',
            modules: [
                { id: randomString(5), name: 'core', active: true },
                { id: randomString(5), name: 'shield', active: true },
                { id: randomString(5), name: 'monitor', active: true },
                { id: randomString(5), name: 'blocker', active: true }
            ]
        },
        initialize: function() {
            this.config.modules.forEach(function(module) {
                module.initialized = true;
                module.timestamp = Date.now();
            });
        },
        status: {
            running: true,
            startTime: Date.now(),
            checks: 0,
            blocked: 0
        },
        incrementChecks: function() {
            this.status.checks++;
        },
        incrementBlocked: function() {
            this.status.blocked++;
        }
    };
    
    // Initialize the protection system
    window._protectionSystem.initialize();
    
    // Set up periodic status updates
    setInterval(function() {
        window._protectionSystem.incrementChecks();
    }, 5000);
    
    // Create decoy event listeners
    const events = ['mousemove', 'click', 'keydown', 'scroll'];
    events.forEach(function(eventType) {
        document.addEventListener(eventType, function() {
            window._protectionSystem.status.lastActivity = Date.now();
        });
    });
    
    // Create a hidden iframe for additional confusion
    function createHiddenFrame() {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        iframe.src = 'about:blank';
        document.body.appendChild(iframe);
        
        // Add decoy content to the iframe
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.body.innerHTML = '<div id="security-layer"></div>';
        } catch (e) {}
    }
    
    // Create the hidden frame after a delay
    setTimeout(createHiddenFrame, 1000);
    
    // Add a mutation observer to detect DOM changes that might be inspection attempts
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check for potential inspection tools being injected
                Array.from(mutation.addedNodes).forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        const element = node;
                        const id = element.id || '';
                        const className = element.className || '';
                        
                        // Check for common inspector element IDs or classes
                        if (id.includes('inspector') || id.includes('devtools') || 
                            className.includes('inspector') || className.includes('devtools')) {
                            window._protectionSystem.incrementBlocked();
                        }
                    }
                });
            }
        });
    });
    
    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Add a custom property descriptor to make it harder to modify protection functions
    function protectFunction(obj, funcName) {
        const originalFunc = obj[funcName];
        Object.defineProperty(obj, funcName, {
            configurable: false,
            get: function() {
                return originalFunc;
            },
            set: function() {
                // Silently fail
                return originalFunc;
            }
        });
    }
    
    // Protect key functions
    protectFunction(window, 'addEventListener');
    protectFunction(document, 'addEventListener');
    protectFunction(Element.prototype, 'addEventListener');
    
    // Add a final layer of confusion with eval-based code
    // This makes it harder to understand the code flow
    const confusionCode = [
        "window['_s'+'ec'] = true;",
        "window['_p'+'rot'] = function() { return true; };",
        "window['_c'+'heck'] = function() { return Math.random() > 0.5; };"
    ];
    
    confusionCode.forEach(function(code) {
        try {
            eval(code);
        } catch (e) {}
    });
    
    // Log a warning message that will be hidden by our console overrides
    console.log("%cWarning: This site is protected against inspection", "color: red; font-size: 20px; font-weight: bold;");
})();