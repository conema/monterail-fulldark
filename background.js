messenger.WindowListener.registerChromeUrl([ 
    ["content",  "MonterailOverlay", "content/"]
]);

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/addressbook/addressbook.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadAddressbook.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/addressbook/abContactsPanel.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadAddressbook.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messengercompose/messengercompose.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadCompose.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messenger.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messageWindow.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/customizeToolbar.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/glodaFacetView.xhtml", 
    "chrome://MonterailOverlay/content/scripts/loadSearch.js");

messenger.WindowListener.startListening();
