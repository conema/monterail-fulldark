var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

const fileName = "addressbook.css";

function onLoad(activatedWhileWindowOpen) {
  WL.injectCSS("chrome://MonterailFDOverlay/content/skin/" + fileName);


  if (Services.appinfo.OS == "WINNT") {
    WL.injectCSS("chrome://MonterailFDOverlay/content/skin/win/skin/" + fileName);
  } else if (Services.appinfo.OS == "Linux") {
    WL.injectCSS("chrome://MonterailFDOverlay/content/skin/linux/skin/" + fileName);
  } else if (Services.appinfo.OS == "Darwin") {
    WL.injectCSS("chrome://MonterailFDOverlay/content/skin/mac/skin/" + fileName);
  }
}

function onUnload(deactivatedWhileWindowOpen) {
}