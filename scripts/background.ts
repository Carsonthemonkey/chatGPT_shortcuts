chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
    switch (command) {
        case "New-Chat":
            sendMessageToContentScript("newChat");
            break;
        case "Focus-Chat":
            sendMessageToContentScript("focusChat");
            break;
        }
});

function sendMessageToContentScript(message: string){
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        if(tabId) chrome.tabs.sendMessage(tabId, { message: message });
        return !!tabId;
    });
}