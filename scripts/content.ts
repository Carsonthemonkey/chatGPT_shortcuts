window.addEventListener("load", function () {
    startup();
});

chrome.runtime.onMessage.addListener(request => {
    switch(request.message) {
        case "newChat":
            newChat();
            break;
        case "focusChat":
            focusChat();
            break;
    }
});

function startup() {
    console.log("Content script started!");
}

function newChat() {
    console.log("New chat created!");
}

function focusChat() {
    console.log("Chat focused!");
}