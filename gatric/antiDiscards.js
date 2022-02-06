// evita cair do site

chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.update(tab.id, {autoDiscardable: false});
});
chrome.tabs.onReplaced.addListener(function(tabId) {
  chrome.tabs.update(tabId, {autoDiscardable: false});
});
chrome.runtime.onInstalled.addListener(function(details) {
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      chrome.tabs.update(tab.id, {autoDiscardable: false});
    });
  });
});
