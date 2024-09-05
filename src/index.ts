import { removeNotiNumber } from "./utils";

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : -1 },
    func: removeNotiNumber,
  }).then();
});
