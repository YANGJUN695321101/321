// 监听content.js发来的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const goodsInfo = request.goodsInfo;

  // 下载商品图片
  goodsInfo.forEach((item, index) => {
    const validTitle = item.title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    const imageUrl = item.mainImgUrl;

    chrome.downloads.download({
      url: imageUrl,
      filename: `${validTitle}_main.jpg`,
    });
  });
});

// 添加browserAction点击事件
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, { file: "content.js" });
});
