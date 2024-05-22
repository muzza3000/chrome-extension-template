// This script is called when the user selects the "Browser Action" button AKA the button for the chrome extension
console.log("background.js loaded...")

// There is a choice to either add an event listener to call a script in the current tab using the below
// OR
// to use a "default_popup" in the manifest, which will load a custom HTML file. You cannot do both!!!

// Called when the user clicks on the extension icon

// chrome.action.onClicked.addListener(function(tab) {
//   console.log("Extension Run")
//   console.log(tab)
  

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['scripts/in-tab-script.js']
//   });
// });