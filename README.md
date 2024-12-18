# README.md

# Chrome Go to Top Extension

This Chrome extension adds a button at the bottom of web pages. When clicked, the button scrolls the page back to the top.

## Installation

1. Download or clone the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the `chrome-scroll-extension` directory.

## Usage

Once installed, the extension will automatically add a "Scroll to Top" button at the bottom of every page. Click the button to scroll back to the top of the page.

## Files

- `src/background.js`: Background script for managing the extension's lifecycle.
- `src/content.js`: Content script that adds the button and implements the scroll functionality.
- `manifest.json`: Configuration file for the Chrome extension.