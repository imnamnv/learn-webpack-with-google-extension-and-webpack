console.log("BACKGROUND");
chrome.runtime.onMessage.addListener((mgs, sender, sendResponse) => {
  sendResponse("From the bacground script");
  console.log("sender", sender);
  console.log("mgs", mgs);
});
