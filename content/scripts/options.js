window.browser = window.browser.extension.getBackgroundPage().browser;

const defaultMessageListHeight = "40";
const defaultFolderTreeHeight = "25";

var messageListInput = document.querySelector("#messageListHeight");
var folderTreeInput = document.querySelector("#folderTreeHeight");

function saveOptions(e) {
    browser.storage.sync.set({
        messageListHeight: messageListInput.value,
        folderTreeHeight: folderTreeInput.value
    });
    e.preventDefault();

    if (messageListInput.validationMessage || folderTreeInput.validationMessage){
        document.querySelector("#error").style.display = "block";
        document.querySelector("#error").innerText = messageListInput.validationMessage + "<br>" + folderTreeInput.validationMessage;
        document.querySelector("#success").style.display = "none";
    } else {
        document.querySelector("#error").style.display = "none";
        document.querySelector("#success").style.display = "block";
        document.querySelector("#success").innerText = "Settings saved. You must restart Thunderbird to see the changes.";
    }
}

function resetOptions(e) {
    browser.storage.sync.set({
        messageListHeight: defaultMessageListHeight,
        folderTreeHeight: defaultFolderTreeHeight
    });
    e.preventDefault();

    messageListInput.value = defaultMessageListHeight;
    folderTreeInput.value = defaultFolderTreeHeight;

    document.querySelector("#error").style.display = "none";
    document.querySelector("#success").style.display = "block";
    document.querySelector("#success").innerText = "Settings are restored. You must restart Thunderbird to see the changes.";
}

function restoreOptions() {
    var gettingItem = browser.storage.sync.get(['messageListHeight', 'folderTreeHeight']);
    gettingItem.then((res) => {
        messageListInput.value = res.messageListHeight || defaultMessageListHeight;
        folderTreeInput.value = res.folderTreeHeight || defaultFolderTreeHeight;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("#submit").addEventListener("click", saveOptions);
document.querySelector("#reset").addEventListener("click", resetOptions);