window.addEventListener("load", function () {
    startup();
});

const chatBox: HTMLTextAreaElement | null = document.querySelector("textarea#prompt-textarea");

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

document.addEventListener("keydown", function (event) {
    if(event.key == "q" && document.activeElement != chatBox) {
        event.preventDefault();
        focusChat();
    }
})

function startup() {
    console.log("Content script started!");
}

function newChat() {
    console.log("New chat created!");
}

function focusChat() {
    chatBox?.focus();
    if(chatBox) chatBox.textContent = "";
}