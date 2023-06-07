window.addEventListener("load", function () {
    startup();
});

chrome.runtime.onMessage.addListener(request => {
    if (request.message === "newChat") {
        // Create a new chat
        newChat();
    }
});

function startup() {
    console.log("Content script started!");
}

function newChat() {
    console.log("New chat created!");
}