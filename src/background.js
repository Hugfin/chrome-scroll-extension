// Handle installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome Scroll Extension installed.");
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // Inject the content script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['src/content.js']
  });
  
  // Inject the CSS
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['src/styles.css']
  });
});