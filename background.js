messenger.WindowListener.registerChromeUrl([
    ["content", "MonterailFDOverlay", "content/"]
]);

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/addressbook/addressbook.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadAddressbook.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/addressbook/abContactsPanel.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadAddressbook.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messengercompose/messengercompose.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadCompose.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messenger.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messageWindow.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/customizeToolbar.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/glodaFacetView.xhtml",
    "chrome://MonterailFDOverlay/content/scripts/loadSearch.js");

messenger.WindowListener.startListening();
