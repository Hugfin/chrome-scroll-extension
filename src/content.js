let isButtonVisible = true;
let button = null;
let shortcutKey = '['; // default value

// Load the user's preferred shortcut key
chrome.storage.sync.get({ shortcutKey: '[' }, (items) => {
    shortcutKey = items.shortcutKey;
});

// Listen for changes to the shortcut key
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.shortcutKey) {
        shortcutKey = changes.shortcutKey.newValue;
    }
});

function initializeButton() {
    if (button) return; // Prevent multiple buttons

    button = document.createElement('button');
    button.innerText = 'Go to Top';
    button.className = 'scroll-top-button';

    const closeButton = document.createElement('span');
    closeButton.innerHTML = '✕';
    closeButton.className = 'close-button';
    button.appendChild(closeButton);

    document.body.appendChild(button);

    // Initially hide the button if we're at the top
    button.style.display = window.scrollY > 100 ? 'block' : 'none';

    // Scroll event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            button.style.display = isButtonVisible ? 'block' : 'none';
        } else {
            button.style.display = 'none';
        }
    });

    // Keyboard shortcut for showing the button when invisible
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === shortcutKey && !isButtonVisible) {
            isButtonVisible = true;
            if (window.scrollY > 100) {
                button.style.display = 'block';
            }
        }
    });

    button.addEventListener('click', (e) => {
        if (e.target === closeButton) {
            isButtonVisible = false;
            button.style.display = 'none';
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize the button as soon as the content script loads
initializeButton();
