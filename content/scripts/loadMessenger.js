var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

const fileName = "messenger.css";

function onLoad(activatedWhileWindowOpen) {
  WL.injectCSS("chrome://MonterailOverlay/content/skin/" + fileName);


  if (Services.appinfo.OS == "WINNT") {
    WL.injectCSS("chrome://MonterailOverlay/content/skin/win/skin/" + fileName);
  } else if (Services.appinfo.OS == "Linux") {
    WL.injectCSS("chrome://MonterailOverlay/content/skin/linux/skin/" + fileName);
  } else if (Services.appinfo.OS == "Darwin") {
    WL.injectCSS("chrome://MonterailOverlay/content/skin/mac/skin/" + fileName);
  }
}

function onUnload(deactivatedWhileWindowOpen) {
}