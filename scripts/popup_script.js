// This script will be loaded by the popup from the html.
// It can communicate with the browser via chrome.scripting API (https://developer.chrome.com/docs/extensions/reference/api/scripting)
// The browser script can communicate back with the popup using chrome.runtime.sendMessage

console.log("popup_script.js loaded...")

// Update the popup dynamically

const updatePopupContent = (content) => {
    document.getElementById("dynamic_content").innerText = content.docTitle;
}


// Add event listener

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.messageType === "messageTypeA") {
      console.log(request);
      console.log(sender);
      updatePopupContent(request);
      sendResponse({ message: "messageTypeA recieved" });
    };
  });


// Trigger the browser_script

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let currentTab = tabs[0]; // Get the first tab object in the array
    if (currentTab) {
      let tabId = currentTab.id;
  
      // Execute a script in the current tab
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['scripts/browser_script.js']
      });
    };
  });