//This is only for testing and will be removed later

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded from ppup.ts");
    document.getElementById('new-chat-btn')?.addEventListener('click', () => {
        console.log("New chat button clicked!");
        chrome.runtime.sendMessage({ message: "newChat" });
    });
});