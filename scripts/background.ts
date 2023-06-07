chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
    if (command === "New-Chat") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tabId = tabs[0].id;
            if(tabId) chrome.tabs.sendMessage(tabId, { message: "newChat" });
        });
    }
});