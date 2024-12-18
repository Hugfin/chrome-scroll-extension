// Handle installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome Scroll Extension installed.");
});

// Listen for messages from content script if needed
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle any messages from content script here
});