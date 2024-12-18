// Saves options to chrome.storage
function saveOptions() {
    const shortcut = document.getElementById('shortcut').value.toLowerCase();
    if (!shortcut) {
        showStatus('Please enter a shortcut key', false);
        return;
    }

    if (!/^[a-z]$/.test(shortcut)) {
        showStatus('Please enter a single letter (a-z)', false);
        return;
    }

    chrome.storage.sync.set(
        { shortcutKey: shortcut },
        () => {
            showStatus('Settings saved!', true);
        }
    );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    chrome.storage.sync.get(
        { shortcutKey: 'i' }, // default value
        (items) => {
            document.getElementById('shortcut').value = items.shortcutKey;
        }
    );
}

function showStatus(message, success) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.style.display = 'block';
    status.className = success ? 'success' : '';
    setTimeout(() => {
        status.style.display = 'none';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

// Add input validation
document.getElementById('shortcut').addEventListener('input', (e) => {
    const input = e.target;
    input.value = input.value.toLowerCase();
    if (input.value.length > 1) {
        input.value = input.value.charAt(0);
    }
});
