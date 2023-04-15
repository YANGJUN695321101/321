chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download") {
        const downloadFolder = request.folder || "pinduoduo-goods";
        const goodsListItems = document.querySelectorAll(".goods-list-item");

        goodsListItems.forEach((item) => {
            const title = item.querySelector(".goods-name").innerText.trim();
            const imageUrl = item.querySelector(".goods-img img").src;

            chrome.downloads.download({
                url: imageUrl,
                filename: `${downloadFolder}/${title}_main.jpg`
            });
        });

        sendResponse({ result: "下载已开始" });
    }
});
