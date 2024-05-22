// Note: deliberatly using "var" to avoid the "reference error" when a function is declared twice by opening the extension more than once in the same browser window.

var getDocumentTitle = async () => {
    return document.title
}

var sendDocTitleToPopup = async () => {
    try {
        const docTitle = await getDocumentTitle();
        const popupSendObject = {
            docTitle: docTitle,
            messageType: "messageTypeA"
        };
        if (docTitle) {
            // Sending the object to the popup
            chrome.runtime.sendMessage(popupSendObject, (response) => {
                console.log(response.message)
            }
            )
        };
    } catch (error) {
        console.log(error)
    }
}

sendDocTitleToPopup()