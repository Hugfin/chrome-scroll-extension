function onInstalled() {
    console.log("Chrome Scroll Extension installed.");
}

chrome.runtime.onInstalled.addListener(onInstalled);