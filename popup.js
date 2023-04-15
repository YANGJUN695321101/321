document.getElementById("download-button").addEventListener("click", () => {
    const downloadFolder = document.getElementById("download-folder").value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "download", folder: downloadFolder }, (response) => {
            if (response && response.result) {
                alert(response.result);
            } else {
                alert("下载失败，请确保您在正确的页面上。");
            }
        });
    });
});
